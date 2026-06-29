import { useEffect, useState, useRef } from 'react';
import { Award, Briefcase, FileSignature, BookCopy } from 'lucide-react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ target, duration = 1500, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="text-4xl sm:text-5xl font-black text-white tracking-tight">
      {count}{suffix}
    </div>
  );
};

const QuickStatsSection = () => {
  const stats = [
    {
      label: "Projects Completed",
      target: 15,
      suffix: "+",
      icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
      description: "Full stack applications, ML models, and NLP tools."
    },
    {
      label: "Certifications",
      target: 8,
      suffix: "+",
      icon: <Award className="w-6 h-6 text-indigo-400" />,
      description: "Coursera specializations, AWS specialties, and Google certs."
    },
    {
      label: "Research Publications",
      target: 7,
      suffix: "",
      icon: <BookCopy className="w-6 h-6 text-purple-400" />,
      description: "Indexed journals, chapters, and presented IEEE papers."
    },
    {
      label: "Granted Patents",
      target: 1,
      suffix: "",
      icon: <FileSignature className="w-6 h-6 text-pink-400" />,
      description: "Granted patent for Aegis AI cybersecurity framework."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-t border-b border-indigo-900/30 relative overflow-hidden font-sans">
      {/* Dynamic ambient particles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl shadow-soft hover:border-cyan-500/20 hover:scale-[1.02] transition-smooth group"
            >
              {/* Icon Container */}
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl mb-4 group-hover:border-cyan-500/30 transition-smooth">
                {stat.icon}
              </div>

              {/* Animated number */}
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />

              {/* Labels */}
              <h4 className="text-sm font-semibold text-slate-300 mt-2 group-hover:text-white transition-smooth">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-[180px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;
