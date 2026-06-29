import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, radius: 180 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Create subtle deep grid pattern behind nodes
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.7)';
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mouseDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
        if (mouseDist < mouse.radius) {
          const alpha = (1 - mouseDist / mouse.radius) * 0.4;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1vkzCCDKtaWk-qlzi9BP6nCXSvqwoTwBY/view?usp=sharing";
    link.target = "_blank";
    link.download = 'R_SUKESH_Resume.pdf';
    link.click();
  };

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden font-sans">
      {/* Interactive canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Radiant ambient spots */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-float" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
        {/* Floating, glowing profile pic wrapper */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            {/* Spinning/glowing border rings */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-75 blur-md group-hover:opacity-100 transition-smooth duration-700 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-slate-900 shadow-strong bg-slate-900">
              <img
                src={profilePhoto}
                alt="Portrait photograph of R Sukesh, AI & Data Science Specialist"
                className="w-full h-full object-cover transform hover:scale-110 transition-smooth duration-500"
              />
            </div>
          </div>
        </div>

        {/* Headings */}
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          Pre-Final Year AI & Data Science
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">R SUKESH</span>
        </h1>

        <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-6">
          Transforming Data into Intelligence & Concepts into Functional Solutions
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Aspiring AI & Data Science Engineer specialized in constructing intelligent models, processing dynamic datasets, and delivering scalable full-stack web applications. Bridging the gap between algorithms and real-world impact.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold transition-bounce shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.45)]"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-bounce"
            onClick={downloadResume}
          >
            <Download size={18} className="mr-2" />
            Get Resume
          </Button>
        </div>

        {/* Social Bar & Down Arrow */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <a
              href="https://github.com/sukesh-006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-slate-900/80 border border-slate-800 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 shadow-soft hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-smooth transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sukesh-r-68a786326"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-slate-900/80 border border-slate-800 rounded-full text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 shadow-soft hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-smooth transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sukeshvsb@gmail.com"
              aria-label="Email sukeshvsb@gmail.com"
              className="p-3 bg-slate-900/80 border border-slate-800 rounded-full text-slate-400 hover:text-pink-400 hover:border-pink-500/50 shadow-soft hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-smooth transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            aria-label="Scroll to About Me section"
            className="mt-4 p-2 text-slate-500 hover:text-cyan-400 transition-smooth animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;