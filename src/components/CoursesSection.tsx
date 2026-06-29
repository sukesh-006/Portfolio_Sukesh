import { Award, CheckCircle, ExternalLink, PlayCircle, BookMarked, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CoursesSection = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Stanford University (Coursera)",
      instructor: "Andrew Ng",
      completion: "2024",
      grade: "98%",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning"],
      credentialUrl: "https://coursera.org/verify/ML-SPECIAL",
      logo: (
        <svg className="w-8 h-8 text-red-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z"/>
        </svg>
      )
    },
    {
      title: "Deep Learning Specialization",
      provider: "DeepLearning.AI (Coursera)",
      instructor: "Andrew Ng",
      completion: "2024",
      grade: "96%",
      skills: ["CNN", "RNN", "LSTM", "GANs", "Transformers"],
      credentialUrl: "https://coursera.org/verify/DL-SPECIAL",
      logo: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "AWS Certified Machine Learning - Specialty",
      provider: "Amazon Web Services",
      instructor: "AWS Training",
      completion: "2024",
      grade: "Pass",
      skills: ["AWS SageMaker", "AWS ML Services", "MLOps", "Model Deployment"],
      credentialUrl: "https://aws.amazon.com/verification",
      logo: (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      )
    },
    {
      title: "Google Data Analytics Professional Certificate",
      provider: "Google (Coursera)",
      instructor: "Google Career Certificates",
      completion: "2023",
      grade: "95%",
      skills: ["SQL", "Tableau", "R", "Data Visualization", "Statistics"],
      credentialUrl: "https://coursera.org/verify/GOOGLE-DATA",
      logo: (
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.102 15.466 1 12.24 1c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.34 0 10.55-4.437 10.55-10.714 0-.726-.075-1.285-.165-1.7H12.24z"/>
        </svg>
      )
    },
    {
      title: "Web Development",
      provider: "Corizo",
      instructor: "Corizo Training Team",
      completion: "2024",
      grade: "Pass",
      skills: ["Front end", "Back end", "Version Control", "Database management", "Deployment"],
      credentialUrl: "#",
      logo: (
        <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      )
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      provider: "Microsoft",
      instructor: "Microsoft Press",
      completion: "2023",
      grade: "Pass",
      skills: ["Azure AI", "Cognitive Services", "Machine Learning", "Bot Framework"],
      credentialUrl: "#",
      logo: (
        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
        </svg>
      )
    }
  ];

  const ongoingCourses = [
    {
      title: "Prompt Engineering for GenAI",
      provider: "Internshala",
      progress: 75,
      expectedCompletion: "December 2025",
      skills: ["LLM Orchestration", "Critical Prompting", "NLP Systems", "Safety Filters"]
    },
    {
      title: "Core Java with AI Integration",
      provider: "W3Schools Academy",
      progress: 60,
      expectedCompletion: "January 2026",
      skills: ["OOPS Fundamentals", "Multi-Threading", "Exception Logic", "AI API Connectors"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 font-sans relative overflow-hidden">
      
      {/* Decorative floating grids */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Professional Credentials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. Completed Certifications: Badge Wall */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-2">
            <Award className="text-cyan-400 w-6 h-6" />
            Credential Wall
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-soft hover:shadow-medium hover:border-cyan-500/20 hover:-translate-y-1 transition-smooth group cursor-pointer"
                onClick={() => cert.credentialUrl !== "#" && window.open(cert.credentialUrl, '_blank')}
              >
                <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                  <div>
                    {/* Badge header & logo */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="p-2.5 bg-slate-950 border border-slate-800/80 rounded-2xl group-hover:border-cyan-500/30 transition-smooth">
                        {cert.logo}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        Verified
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-smooth leading-snug mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mb-3">{cert.provider}</p>
                  </div>

                  <div>
                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-slate-800/80 text-slate-400 text-[10px] py-0 px-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Metadata */}
                    <div className="flex justify-between items-center text-xs text-slate-500 pt-3 border-t border-slate-800/60">
                      <span>Completed: <strong className="text-slate-300">{cert.completion}</strong></span>
                      <span className="font-semibold text-cyan-400 bg-slate-950 px-2 py-0.5 rounded">Grade: {cert.grade}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2. Ongoing Courses: Ribbon cards */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-2">
            <BookMarked className="text-indigo-400 w-6 h-6" />
            Active Continuous Learning
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ongoingCourses.map((course, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 shadow-soft overflow-hidden relative group hover:border-indigo-500/20 transition-smooth"
              >
                {/* Diagonal Ribbon */}
                <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none z-10">
                  <div className="absolute top-4 -right-10 w-36 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-center text-[10px] font-bold text-white uppercase tracking-wider transform rotate-45 shadow-soft flex items-center justify-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '4s' }} />
                    Ongoing
                  </div>
                </div>

                <CardContent className="p-6 md:p-8 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white leading-snug mb-1 pr-16">
                      {course.title}
                    </h4>
                    <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">{course.provider}</p>
                  </div>

                  {/* Progress block */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Current Progress</span>
                      <span className="text-indigo-300 font-bold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2 bg-slate-800" />
                  </div>

                  {/* Skills lists */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-slate-400 block">Target Curriculum:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-slate-800/50 text-slate-300 text-[10px] hover:bg-slate-800 border-none">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-800/60">
                    <span>Expected Completion</span>
                    <strong className="text-slate-300">{course.expectedCompletion}</strong>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;