import { Award, GraduationCap, MapPin, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import Reveal from '@/components/Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_30%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-[0.28rem] mb-3">WHO I AM</h2>
          <h3 className="text-4xl font-extrabold text-white sm:text-5xl">About Me</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.5fr] gap-8 lg:gap-10 items-stretch">
          <Reveal className="space-y-6" delay={80}>
            <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.45)] hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500/50 via-indigo-500/40 to-purple-500/50 blur-xl" />
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 overflow-hidden rounded-[30px] border border-indigo-500/30 bg-slate-900 shadow-[0_20px_50px_rgba(79,70,229,0.28)]">
                    <img src={profilePhoto} alt="R Sukesh Portrait" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white">R SUKESH</h4>
                <p className="mt-2 text-sm font-medium text-cyan-300">AI & Data Science Undergraduate</p>

                <div className="mt-6 w-full space-y-3 border-t border-slate-800 pt-4 text-left text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-indigo-400" />
                    <span>Coimbatore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 text-indigo-400" />
                    <span className="leading-relaxed">B.Tech AI & Data Science (2023–Present) · VSB College of Engineering Technical Campus · CGPA: 8.42</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-0.5 h-4 w-4 text-indigo-400" />
                    <span>Published researcher and patent holder while still an undergrad</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-indigo-500/20 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 p-6 shadow-[0_25px_70px_rgba(79,70,229,0.18)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22rem] text-cyan-300">Personal Motto</span>
                <Heart className="h-4 w-4 text-rose-400 animate-pulse fill-rose-400" />
              </div>
              <p className="mt-4 text-lg italic leading-relaxed text-slate-200">
                “Every challenge is an opportunity to learn, every project is a step forward, and every innovation begins with curiosity.”
              </p>
            </div>
          </Reveal>

          <Reveal className="rounded-[30px] border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.32)] lg:p-10" delay={120}>
            <div className="mb-6 flex items-center gap-3">
              <h4 className="text-2xl font-bold text-white">My Journey</h4>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-transparent" />
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-300">
              <p>
                My venture into technology sparked from a profound curiosity regarding machine behavior and decision-making systems. As I dived into programming, I found my niche in <span className="font-semibold text-cyan-300">Artificial Intelligence and Data Science</span>—domains with the capability to transform traditional paradigms and empower human decisions through data.
              </p>
              <p>
                Starting as a learner eager to expand my boundaries, I consolidated my expertise in Python, Java, and SQL while mastering data analysis pipelines, machine learning algorithms, and deep neural architectures. I treat every technical challenge as an opportunity to build robust logic and craft clean, scalable web interfaces.
              </p>
              <p>
                A primary milestone has been research and development. I am proud to have secured a granted patent for <span className="font-semibold text-indigo-300">Aegis AI</span>, an advanced AI-based cyber resilience framework. I have also authored research papers and book chapters focused on deep learning applications in healthcare, intelligent graph networks, and eco-sustainability monitoring.
              </p>
              <p>
                Today, I strive to merge technical implementation with academic depth. I am actively exploring agentic workflows, production-grade model serving, and computer vision while seeking internship opportunities where I can apply ML pipelines, frontend craft, and full-stack solutions to real-world problems.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-800 pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-2xl font-black text-white">2027</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">Expected Graduation</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">8.42</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">Current CGPA</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;