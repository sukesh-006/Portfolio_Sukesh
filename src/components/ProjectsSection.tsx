import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EKIP_Project',
      description: 'A full-stack application pairing a Python backend with a TypeScript frontend, optimized for web deployment, containerization, and automated CI/CD pipelines.',
      technologies: ['Python', 'TypeScript', 'React', 'FastAPI', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/sukesh-006/EKIP_Project',
      liveUrl: '#',
      date: '2026',
      status: 'Completed',
      tone: 'cyan',
      visual: (
        <svg className="h-full w-full rounded-[22px] border border-slate-800 bg-slate-900 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 90 L 40 90 L 55 20 L 70 100 L 85 90 L 115 90 L 130 40 L 145 105 L 160 90 L 190 90" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <path d="M 10 90 L 40 90 L 55 20 L 70 100 L 85 90 L 115 90 L 130 40 L 145 105 L 160 90 L 190 90 L 190 120 L 10 120 Z" fill="url(#grad)" opacity="0.1" />
          <defs><linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
          <circle cx="55" cy="20" r="4" fill="#f43f5e" />
          <text x="65" y="22" fill="#f43f5e" fontSize="7" fontWeight="bold">Outbreak Spike Detected</text>
          <circle cx="130" cy="40" r="3" fill="#06b6d4" />
        </svg>
      ),
    },
    {
      title: 'AI Personal Finance Advisor',
      description: 'A full-stack financial dashboard with predictive trend analysis, AI recommendations, and a smart budgeting workflow built for everyday decision-making.',
      technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL'],
      githubUrl: 'https://github.com/sukesh-006/AI_Finance-Maintainer',
      liveUrl: 'https://ai-finance-maintainer.vercel.app/',
      date: '2026',
      status: 'Completed',
      tone: 'indigo',
      visual: (
        <svg className="h-full w-full rounded-[22px] border border-slate-800 bg-slate-900 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="40" height="20" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" /><text x="20" y="27" fill="#10b981" fontSize="6" fontWeight="bold">+ Income</text>
          <rect x="65" y="15" width="40" height="20" rx="4" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" strokeWidth="1" /><text x="70" y="27" fill="#f43f5e" fontSize="6" fontWeight="bold">- Expenses</text>
          <rect x="115" y="15" width="60" height="20" rx="4" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1" /><circle cx="125" cy="25" r="4" fill="#6366f1" /><text x="135" y="27" fill="#6366f1" fontSize="6" fontWeight="bold">AI Insights</text>
          <path d="M 15 90 L 40 70 L 70 85 L 100 40 L 130 60 L 175 25" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 15 90 L 40 70 L 70 85 L 100 40 L 130 60 L 175 25 L 175 105 L 15 105 Z" fill="url(#financeGrad)" opacity="0.1" /><defs><linearGradient id="financeGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
          <circle cx="175" cy="25" r="3" fill="#06b6d4" /><text x="150" y="20" fill="#cbd5e1" fontSize="6" fontWeight="bold">Savings Goal</text>
        </svg>
      ),
    },
    {
      title: 'AI-Powered Customer Sentiment Analysis',
      description: 'A transformer-driven NLP workflow using BERT to classify customer feedback and surface actionable sentiment patterns in a Streamlit dashboard.',
      technologies: ['Python', 'BERT', 'TensorFlow', 'Pandas', 'Streamlit'],
      githubUrl: 'https://github.com/sukesh-006/AI-Costumer-Sentiment-Analysis',
      liveUrl: 'https://aicussenti.netlify.app/',
      date: '2025',
      status: 'Completed',
      tone: 'purple',
      visual: (
        <svg className="h-full w-full rounded-[22px] border border-slate-800 bg-slate-900 p-4" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="180" height="25" rx="5" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1" /><text x="20" y="26" fill="#06b6d4" fontSize="8" fontWeight="bold" fontFamily="monospace">BERT Embeddings Classifier</text>
          <line x1="100" y1="35" x2="60" y2="65" stroke="rgba(129,140,248,0.5)" strokeWidth="1.5" strokeDasharray="3" />
          <line x1="100" y1="35" x2="140" y2="65" stroke="rgba(129,140,248,0.5)" strokeWidth="1.5" strokeDasharray="3" />
          <circle cx="60" cy="75" r="15" fill="rgba(244,63,94,0.1)" stroke="#f43f5e" strokeWidth="1.5" /><text x="50" y="78" fill="#f43f5e" fontSize="8" fontWeight="bold">Negative</text>
          <circle cx="140" cy="75" r="15" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5" /><text x="130" y="78" fill="#10b981" fontSize="8" fontWeight="bold">Positive</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-24 text-slate-100 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24rem] text-cyan-300">Portfolio</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Featured Projects</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        </Reveal>

        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max gap-6 pb-2">
            {projects.map((project, index) => (
              <Reveal key={index} className="w-[320px] shrink-0 md:w-[420px]" delay={index * 100}>
                <article className={`rounded-[28px] border ${project.tone === 'cyan' ? 'border-cyan-500/20 bg-slate-900/90' : project.tone === 'indigo' ? 'border-indigo-500/20 bg-slate-900/80' : 'border-purple-500/20 bg-slate-900/90'} p-4 shadow-[0_25px_70px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30`}>
                  <div className="mb-4 h-48 overflow-hidden rounded-[22px] border border-slate-800">{project.visual}</div>

                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </span>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-300">{project.status}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-slate-700 bg-slate-950/60 px-2 py-1 text-[10px] text-slate-300">{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className={project.githubUrl === '#' ? 'pointer-events-none opacity-50' : ''}>
                      <Button size="sm" variant="outline" className="border-slate-700 bg-slate-950/60 text-slate-200 hover:text-white">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className={project.liveUrl === '#' ? 'pointer-events-none opacity-50' : ''}>
                      <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_12px_26px_rgba(14,165,233,0.25)] hover:from-cyan-400 hover:to-indigo-500">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/sukesh-006" target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="border-slate-700 bg-slate-900/80 text-slate-100 hover:border-cyan-500/30 hover:text-white">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;