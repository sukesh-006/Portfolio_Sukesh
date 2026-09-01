import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Sukesh stands out as a phenomenal innovator. His core contribution to the Aegis AI cybersecurity framework, which secured a granted patent under his name, demonstrates a level of technical depth, research acumen, and perseverance rarely witnessed at the undergraduate level.',
      author: 'Dr. A. Ramesh',
      role: 'Professor & Research Coordinator',
      context: 'Academic Patent Advisor',
      avatarBg: 'bg-cyan-500/10 text-cyan-400',
    },
    {
      quote: 'Working with Sukesh on neural architectures for image analysis was highly rewarding. He adapts rapidly to complex models, writes clean codebases, and bridges frontend views with data pipelines effortlessly. His analytical mindset is top-tier.',
      author: 'Ms. S. Priya Dharshini',
      role: 'Senior Project Guide',
      context: 'Deep Learning Research Lab',
      avatarBg: 'bg-indigo-500/10 text-indigo-400',
    },
    {
      quote: 'Sukesh\'s full-stack capabilities, paired with his knowledge of machine learning, make him a highly competitive developer. He wraps models into responsive web apps with optimized database queries and strong API design.',
      author: 'Mr. K. Santosh',
      role: 'Senior Software Architect & Mentor',
      context: 'Industry Internship Guide',
      avatarBg: 'bg-purple-500/10 text-purple-400',
    },
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

  useEffect(() => {
    const timer = window.setInterval(handleNext, 8000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-950 py-24 text-slate-100 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24rem] text-cyan-300">Recommendations</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Academic & Industry Feedback</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:p-12" delay={80}>
          <Quote className="absolute -left-6 -top-6 h-28 w-28 text-slate-800" />

          <div className={`relative z-10 space-y-6 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-lg italic leading-relaxed text-slate-300 md:text-xl">“{testimonials[activeIndex].quote}”</p>

            <div className="flex items-center gap-4 border-t border-slate-800 pt-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold ${testimonials[activeIndex].avatarBg}`}>
                {testimonials[activeIndex].author.split(' ').slice(-1)[0][0]}
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-white">
                  {testimonials[activeIndex].author}
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    <UserCheck className="h-3 w-3" />
                    Verified ref
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  {testimonials[activeIndex].role} — <span className="text-indigo-300">{testimonials[activeIndex].context}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <button onClick={handlePrev} aria-label="Previous slide" className="rounded-full border border-slate-700 bg-slate-950/60 p-2 text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-300">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={handleNext} aria-label="Next slide" className="rounded-full border border-slate-700 bg-slate-950/60 p-2 text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-300">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

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
                  className={`h-2 rounded-full transition-all ${idx === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
