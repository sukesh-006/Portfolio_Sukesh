import { Github, ExternalLink, Calendar, Code, Sparkles, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      
      title: "EKIP_Project",
      description: "EKIP_Project is a full‑stack application that pairs a Python-based backend (APIs, business logic, and data processing) with a TypeScript frontend (client UI and interactions). The repo emphasizes server- and client-side development, making it suitable for web deployments, containerization, and automated CI/CD.",
      technologies: ["Python","TypeScript","React (TypeScript)","FastAPI / Django (Python web framework)","Docker","PostgreSQL / SQLite","GitHub Actions"],
      githubUrl: "https://github.com/sukesh-006/EKIP_Project",
      liveUrl: "#",
      date: "2026",
      status: "Completed",
      visual: (
        <svg className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Heart rate / Outbreak spikes graph */}
          <path d="M 10 90 L 40 90 L 55 20 L 70 100 L 85 90 L 115 90 L 130 40 L 145 105 L 160 90 L 190 90" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <path d="M 10 90 L 40 90 L 55 20 L 70 100 L 85 90 L 115 90 L 130 40 L 145 105 L 160 90 L 190 90 L 190 120 L 10 120 Z" fill="url(#grad)" opacity="0.1" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle cx="55" cy="20" r="4" fill="#f43f5e" />
          <text x="65" y="22" fill="#f43f5e" fontSize="7" fontWeight="bold">Outbreak Spike Detected</text>
          
          <circle cx="130" cy="40" r="3" fill="#06b6d4" />
        </svg>
      )
    },
    {
      title: "AI Personal Finance Advisor",
      description: "A full-stack web application for tracking income, expenses, savings goals, and budgets. Features AI-powered financial recommendations, predictive trend analysis, and a smart chatbot.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/sukesh-006/AI_Finance-Maintainer",
      liveUrl: "https://ai-finance-maintainer.vercel.app/",
      date: "2026",
      status: "Completed",
      visual: (
        <svg className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Finance dashboard mockup */}
          <rect x="15" y="15" width="40" height="20" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1" />
          <text x="20" y="27" fill="#10b981" fontSize="6" fontWeight="bold">+ Income</text>

          <rect x="65" y="15" width="40" height="20" rx="4" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="1" />
          <text x="70" y="27" fill="#f43f5e" fontSize="6" fontWeight="bold">- Expenses</text>

          <rect x="115" y="15" width="60" height="20" rx="4" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" strokeWidth="1" />
          <circle cx="125" cy="25" r="4" fill="#6366f1" />
          <text x="135" y="27" fill="#6366f1" fontSize="6" fontWeight="bold">AI Insights</text>

          {/* Trend Chart */}
          <path d="M 15 90 L 40 70 L 70 85 L 100 40 L 130 60 L 175 25" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 15 90 L 40 70 L 70 85 L 100 40 L 130 60 L 175 25 L 175 105 L 15 105 Z" fill="url(#financeGrad)" opacity="0.1" />
          <defs>
            <linearGradient id="financeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          <circle cx="175" cy="25" r="3" fill="#06b6d4" />
          <text x="150" y="20" fill="#cbd5e1" fontSize="6" fontWeight="bold">Savings Goal</text>
        </svg>
      )
    },
    {
      title: "AI-Powered Customer Sentiment Analysis",
      description: "Developed a deep learning model to analyze customer reviews and feedback using NLP. Achieved 92% classification accuracy using fine-tuned BERT and transformer pipelines. Deployed via a modern Streamlit interactive application.",
      technologies: ["Python", "BERT", "TensorFlow", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/sukesh-006/AI-Costumer-Sentiment-Analysis",
      liveUrl: "https://aicussenti.netlify.app/",
      date: "2025",
      status: "Completed",
      visual: (
        <svg className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Sentiment nodes */}
          <rect x="10" y="10" width="180" height="25" rx="5" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1" />
          <text x="20" y="26" fill="#06b6d4" fontSize="8" fontWeight="bold" fontFamily="monospace">BERT Embeddings Classifier</text>
          
          <line x1="100" y1="35" x2="60" y2="65" stroke="rgba(129, 140, 248, 0.5)" strokeWidth="1.5" strokeDasharray="3" />
          <line x1="100" y1="35" x2="140" y2="65" stroke="rgba(129, 140, 248, 0.5)" strokeWidth="1.5" strokeDasharray="3" />
          
          <circle cx="60" cy="75" r="15" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="50" y="78" fill="#f43f5e" fontSize="8" fontWeight="bold">Negative</text>
          
          <circle cx="140" cy="75" r="15" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1.5" />
          <text x="130" y="78" fill="#10b981" fontSize="8" fontWeight="bold">Positive</text>

          {/* Connected dots in background */}
          <circle cx="20" cy="100" r="2" fill="#818cf8" opacity="0.3" />
          <circle cx="180" cy="100" r="2" fill="#818cf8" opacity="0.3" />
        </svg>
      )
    },
    {
      title: "Citizen Scholar Eligibility Checker",
      description: "Created an intelligent web tool designed to help students discover and access government scholarship programs and welfare schemes tailored to their specific profiles, matching socio-economic parameters in real-time.",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "SQL"],
      githubUrl: "#",
      liveUrl: "https://scholar-eligibitly.vercel.app/",
      date: "2026",
      status: "Completed",
      visual: (
        <svg className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Eligibility checklist mockup */}
          <rect x="15" y="15" width="170" height="90" rx="8" fill="#0f172a" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5" />
          
          <rect x="25" y="30" width="8" height="8" rx="2" fill="none" stroke="#6366f1" strokeWidth="1.5" />
          <path d="M27 34 L29 36 L33 32" stroke="#6366f1" strokeWidth="1.5" fill="none" />
          <text x="40" y="37" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">Academic Profile Validated</text>

          <rect x="25" y="50" width="8" height="8" rx="2" fill="none" stroke="#6366f1" strokeWidth="1.5" />
          <path d="M27 54 L29 56 L33 52" stroke="#6366f1" strokeWidth="1.5" fill="none" />
          <text x="40" y="57" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">Income Bracket Approved</text>

          <rect x="25" y="70" width="8" height="8" rx="2" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <text x="40" y="77" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">Querying Database...</text>
          
          {/* Success badge */}
          <rect x="125" y="85" width="50" height="12" rx="3" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1" />
          <text x="131" y="94" fill="#10b981" fontSize="6" fontWeight="bold">9 Eligible Schemes</text>
        </svg>
      )
    },
    {
      title: "Real-time Object Detection for Autonomous Vehicles",
      description: "Created a real-time object tracking and classifier layout optimized for edge deployments, leveraging OpenCV and YOLO architectures to reach 95% accuracy running on resource-constrained boards.",
      technologies: ["PyTorch", "OpenCV", "CUDA", "TensorRT", "ROS"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2025",
      status: "Completed",
      visual: (
        <svg className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Object detection bounding boxes */}
          <rect x="20" y="30" width="70" height="60" rx="4" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="20" y="20" width="30" height="10" fill="#06b6d4" />
          <text x="24" y="28" fill="#ffffff" fontSize="6" fontWeight="bold">Vehicle: 98%</text>

          <rect x="120" y="45" width="40" height="55" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <rect x="120" y="35" width="35" height="10" fill="#a855f7" />
          <text x="124" y="43" fill="#ffffff" fontSize="6" fontWeight="bold">Pedestrian: 95%</text>
          
          <line x1="20" y1="90" x2="180" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="90" cy="40" r="2" fill="#f43f5e" />
          <text x="96" y="42" fill="#f43f5e" fontSize="6">Traffic Light (Red)</text>
        </svg>
      )
    },
    {
      title: "Automated Code Review Assistant",
      description: "Developing an AI-driven coding assistant that parses Abstract Syntax Trees (AST) of programs, targeting and resolving vulnerabilities and logical defects prior to product deployment.",
      technologies: ["AST", "Machine Learning", "Python", "Git", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2026",
      status: "In Progress",
      visual: (
        <svg className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          {/* Syntax tree blocks */}
          <rect x="75" y="15" width="50" height="15" rx="3" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="1" />
          <text x="86" y="25" fill="#6366f1" fontSize="7" fontWeight="bold" fontFamily="monospace">Root Node</text>

          <line x1="100" y1="30" x2="60" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="100" y1="30" x2="140" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          <rect x="35" y="55" width="50" height="15" rx="3" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1" />
          <text x="44" y="65" fill="#10b981" fontSize="7" fontFamily="monospace">FuncDecl (OK)</text>

          <rect x="115" y="55" width="50" height="15" rx="3" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="1" />
          <text x="123" y="65" fill="#f43f5e" fontSize="7" fontFamily="monospace">Leak (Fix)</text>
          
          <path d="M 140 70 L 140 90 L 100 90" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3" />
          <circle cx="100" cy="90" r="3" fill="#f43f5e" />
          <text x="40" y="102" fill="#cbd5e1" fontSize="7">Vulnerability flagged at Line 42</text>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-grid text-slate-100 font-sans relative overflow-hidden">
      {/* Visual background rings */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Zigzag Layout Container */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Representation Column */}
                <div className="w-full lg:w-1/2 flex justify-center transform hover:scale-[1.02] transition-smooth duration-500">
                  <div className="w-full max-w-md aspect-[5/3] relative">
                    <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-cyan-500 to-indigo-600 opacity-30 blur-md" />
                    <div className="relative w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center p-1">
                      {project.visual}
                    </div>
                  </div>
                </div>

                {/* Text Description Column */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs text-indigo-300 font-semibold uppercase tracking-wider bg-indigo-950/40 border border-indigo-800/40 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                    <Badge
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight hover:text-cyan-400 transition-smooth">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-800 text-slate-400 bg-slate-950/30 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.githubUrl === "#" ? "pointer-events-none opacity-50" : ""}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white transition-bounce"
                        disabled={project.githubUrl === "#"}
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.liveUrl === "#" ? "pointer-events-none opacity-50" : ""}
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold transition-bounce shadow-[0_4px_15px_rgba(6,182,212,0.2)]"
                        disabled={project.liveUrl === "#"}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Separator */}
        <div className="mt-24 text-center border-t border-slate-900 pt-12">
          <a href="https://github.com/sukesh-006" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-slate-800 bg-slate-950/60 hover:bg-slate-900 text-slate-300 transition-bounce">
              <Github size={18} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;