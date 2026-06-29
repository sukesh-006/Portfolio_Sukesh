import { Award, GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 relative overflow-hidden font-sans">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">WHO I AM</h2>
          <h3 className="text-4xl font-extrabold text-white sm:text-5xl">About Me</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Portrait & Highlight Quote Card (Split component 1) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Visual Portrait Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-strong flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-indigo-500/30 mb-6 relative z-10 shadow-medium">
                <img
                  src={profilePhoto}
                  alt="R Sukesh Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>

              <h4 className="text-2xl font-bold text-white mb-1">R SUKESH</h4>
              <p className="text-cyan-400 text-sm font-medium mb-4">AI & Data Science Specialist</p>

              {/* Mini Info List */}
              <div className="w-full space-y-3 text-left border-t border-slate-800/80 pt-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="text-indigo-400 w-4 h-4 flex-shrink-0" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-indigo-400 w-4 h-4 flex-shrink-0" />
                  <span>B.Tech AI & Data Science (CGPA: 8.5)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-indigo-400 w-4 h-4 flex-shrink-0" />
                  <span>Patent Holder & Published Researcher</span>
                </div>
              </div>
            </div>

            {/* Highlight Quote Card */}
            <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/20 rounded-3xl p-6 shadow-strong relative overflow-hidden group hover:border-cyan-500/30 transition-smooth">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
              <span className="text-6xl text-indigo-500/20 font-serif absolute top-2 left-4 pointer-events-none">“</span>
              <div className="relative z-10">
                <p className="text-lg italic text-slate-200 leading-relaxed font-medium mb-4">
                  "Every challenge is an opportunity to learn, every project is a step forward, and every innovation begins with curiosity."
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">— Personal Motto</span>
                  <Heart className="w-4 h-4 text-rose-400 animate-pulse fill-rose-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Text (Split component 2) */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 lg:p-10 shadow-strong">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              My Journey
              <span className="w-8 h-[2px] bg-cyan-400 rounded-full"></span>
            </h4>

            <div className="space-y-6 text-slate-300 text-base leading-relaxed">
              <p>
                My venture into technology sparked from a profound curiosity regarding machine behavior and decision-making systems. 
                As I dived into programming, I found my niche in **Artificial Intelligence and Data Science**—domains with the capability to transform traditional paradigms and empower human decisions through data.
              </p>
              <p>
                Starting as a learner eager to expand my boundaries, I consolidated my expertise in <span className="text-cyan-300 font-semibold">Python, Java, and SQL</span> while mastering data analysis pipeline structures, machine learning algorithms, and deep neural architectures. 
                I treat every technical challenge as an opportunity to build robust logic and build clean, scalable web interfaces.
              </p>
              <p>
                A primary milestone of my developer journey has been research and development. 
                I am proud to have secured a **granted patent for Aegis AI**, an advanced AI-based cyber resilience framework. 
                Additionally, I have authored research papers in indexed journals and book chapters, focusing on deep learning applications in healthcare, intelligent graph networks, and eco-sustainability monitoring.
              </p>
              <p>
                Today, I strive to merge technical implementation with academic depth. 
                I am actively seeking software development and data science internship opportunities where I can apply ML pipelines, frontend craft, and full-stack solutions to industry-scale problems.
              </p>
            </div>

            {/* Quick Milestones Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800/80">
              <div>
                <span className="block text-2xl font-bold text-white">2027</span>
                <span className="text-xs uppercase text-slate-400 tracking-wider">Expected Graduation</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">8.5 / 10.0</span>
                <span className="text-xs uppercase text-slate-400 tracking-wider">Current CGPA Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;