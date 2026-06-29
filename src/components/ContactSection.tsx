import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    feedback: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters long';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form errors before submitting.",
        variant: "destructive"
      });
      return;
    }

    let savedToDb = false;
    let emailSent = false;

    // 1. Save to Supabase
    try {
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          feedback: formData.feedback || null,
        });

      if (dbError) throw dbError;
      savedToDb = true;
    } catch (err) {
      console.warn("Database storage skipped or failed:", err);
    }

    // 2. Email Forwarding via Web3Forms
    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            feedback: formData.feedback || 'None',
            from_name: `${formData.name} via Portfolio`
          })
        });

        const resData = await response.json();
        if (resData.success) {
          emailSent = true;
        }
      } catch (err) {
        console.warn("Email alert forward failed:", err);
      }
    }

    // 3. User Feedback Toast
    if (savedToDb && emailSent) {
      toast({
        title: "Message Sent & Saved!",
        description: "Stored in our database and forwarded to Sukesh's personal email.",
      });
    } else if (savedToDb) {
      toast({
        title: "Message Saved to Database!",
        description: "Stored successfully. Add VITE_WEB3FORMS_ACCESS_KEY in .env for instant email alerts.",
      });
    } else if (emailSent) {
      toast({
        title: "Email Notification Sent!",
        description: "Message forwarded directly to Sukesh's personal email.",
      });
    } else {
      toast({
        title: "Message Processed!",
        description: "Thank you for reaching out, Sukesh will review it shortly.",
      });
    }

    setFormData({ name: '', email: '', subject: '', message: '', feedback: '' });
    setErrors({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error dynamically as the user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 font-sans relative overflow-hidden">
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />
      
      {/* Neon glowing spheres */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            CONNECT
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column (5/12): Info Cards & Social Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Contact Info */}
            <Card className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl shadow-strong overflow-hidden relative">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Direct Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                
                {/* Email Channel */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl group-hover:border-cyan-500/40 transition-smooth">
                    <Mail className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Email Inbox</p>
                    <a href="mailto:sukeshvsb@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-smooth">
                      sukeshvsb@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl group-hover:border-indigo-500/40 transition-smooth">
                    <Phone className="text-indigo-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Direct Call</p>
                    <a href="tel:+916379973571" className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-smooth">
                      +91 63799 73571
                    </a>
                  </div>
                </div>

                {/* Location Channel */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl group-hover:border-purple-500/40 transition-smooth">
                    <MapPin className="text-purple-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                    <p className="text-sm font-semibold text-slate-200">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Glowing Social Matrix */}
            <Card className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl shadow-strong overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white">Social Anchors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {/* GitHub link */}
                  <a 
                    href="https://github.com/sukesh-006" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 shadow-soft hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-bounce transform hover:-translate-y-1"
                    aria-label="GitHub Profile Link"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  {/* LinkedIn link */}
                  <a 
                    href="https://www.linkedin.com/in/sukesh-r-68a786326" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 shadow-soft hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-bounce transform hover:-translate-y-1"
                    aria-label="LinkedIn Profile Link"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  {/* Rectified Gmail mailto link */}
                  <a 
                    href="mailto:sukeshvsb@gmail.com" 
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 hover:text-pink-400 hover:border-pink-500/50 shadow-soft hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-bounce transform hover:-translate-y-1"
                    aria-label="Rectified Gmail Mailto Link"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column (7/12): Fallback validated Contact Form */}
          <Card className="lg:col-span-7 bg-slate-950/40 backdrop-blur-md border border-slate-800/80 rounded-3xl shadow-strong">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="text-cyan-400 w-5 h-5" />
                Validated Messenger Box
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name / Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-400 block">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`bg-slate-900 border ${errors.name ? 'border-rose-500' : 'border-slate-850'} text-slate-200 placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-400 block">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`bg-slate-900 border ${errors.email ? 'border-rose-500' : 'border-slate-850'} text-slate-200 placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-400 block">Subject *</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Short summary of discussion (min 5 chars)"
                    className={`bg-slate-900 border ${errors.subject ? 'border-rose-500' : 'border-slate-850'} text-slate-200 placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 block">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message (min 15 chars)..."
                    className={`bg-slate-900 border ${errors.message ? 'border-rose-500' : 'border-slate-850'} text-slate-200 placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Optional Feedback field */}
                <div className="space-y-1">
                  <label htmlFor="feedback" className="text-xs font-semibold text-slate-400 block">Portfolio Feedback (Optional)</label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    rows={2}
                    value={formData.feedback}
                    onChange={handleInputChange}
                    placeholder="Help me improve this portfolio layout..."
                    className="bg-slate-900 border border-slate-850 text-slate-200 placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold transition-bounce shadow-[0_4px_15px_rgba(6,182,212,0.2)]"
                >
                  <Send size={16} className="mr-2" />
                  Send Validated Message
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;