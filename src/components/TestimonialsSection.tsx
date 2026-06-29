import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Sukesh stands out as a phenomenal innovator. His core contribution to the Aegis AI cybersecurity framework, which secured a granted patent under his name, demonstrates a level of technical depth, research acumen, and perseverance rarely witnessed at the undergraduate level.",
      author: "Dr. A. Ramesh",
      role: "Professor & Research Coordinator",
      context: "Academic Patent Advisor",
      avatarBg: "bg-cyan-500/10 text-cyan-400"
    },
    {
      quote: "Working with Sukesh on neural architectures for image analysis was highly rewarding. He adapts rapidly to complex models (like BERT and YOLO), writes clean codebases, and bridges frontend views with data pipelines effortlessly. His analytical mindset is top-tier.",
      author: "Ms. S. Priya Dharshini",
      role: "Senior Project Guide",
      context: "Deep Learning Research Lab",
      avatarBg: "bg-indigo-500/10 text-indigo-400"
    },
    {
      quote: "Sukesh's full-stack capabilities, paired with his knowledge of machine learning, make him a highly competitive developer. He doesn't just build models; he wraps them into responsive web apps with optimized database queries and solid API routing. A true asset.",
      author: "Mr. K. Santosh",
      role: "Senior Software Architect & Mentor",
      context: "Industry Internship Guide",
      avatarBg: "bg-purple-500/10 text-purple-400"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 200);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsFading(false);
    }, 200);
  };

  // Auto-play testimonial slides
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-slate-100 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />
      
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            RECOMMENDATIONS
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Academic & Industry Feedback</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carousel Outer Frame */}
        <div className="relative bg-slate-950/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-strong overflow-hidden min-h-[320px] flex flex-col justify-between">
          <Quote className="absolute -top-4 -left-4 w-28 h-28 text-slate-800/30 font-serif pointer-events-none" />
          
          {/* Active Testimonial Content */}
          <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'} space-y-6 relative z-10`}>
            <p className="text-slate-300 text-lg md:text-xl italic leading-relaxed font-medium">
              "{testimonials[activeIndex].quote}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60">
              {/* Profile Initials Avatar */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base ${testimonials[activeIndex].avatarBg}`}>
                {testimonials[activeIndex].author.split(' ').slice(-1)[0][0]}
              </div>

              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  {testimonials[activeIndex].author}
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full font-sans font-semibold">
                    <UserCheck className="w-3 h-3" />
                    Verified Ref
                  </span>
                </h4>
                <p className="text-xs text-slate-400">{testimonials[activeIndex].role} — <span className="text-indigo-400">{testimonials[activeIndex].context}</span></p>
              </div>
            </div>
          </div>

          {/* Slider controls & bullets */}
          <div className="flex items-center justify-between mt-8 pt-4">
            {/* Left/Right Controls */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="p-2 border border-slate-800 hover:border-cyan-500/50 rounded-full hover:bg-slate-900 transition-smooth text-slate-400 hover:text-cyan-400"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="p-2 border border-slate-800 hover:border-cyan-500/50 rounded-full hover:bg-slate-900 transition-smooth text-slate-400 hover:text-cyan-400"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bullet indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsFading(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsFading(false);
                    }, 200);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-smooth ${
                    idx === activeIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
