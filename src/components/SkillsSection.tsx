import { Brain, Code, BarChart3, Users, MessageSquare, ShieldAlert, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Reveal from '@/components/Reveal';

interface RadialChartProps {
  percentage: number;
  label: string;
  color: string;
  icon: React.ReactNode;
}

const RadialChart = ({ percentage, label, color, icon }: RadialChartProps) => {
  const radius = 35;
  const strokeDasharray = 2 * Math.PI * radius;
  const strokeDashoffset = strokeDasharray - (percentage / 100) * strokeDasharray;

  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
      <div className="relative mb-3 flex h-24 w-24 items-center justify-center">
        <svg className="h-full w-full -rotate-90">
          <circle cx="48" cy="48" r={radius} className="fill-none stroke-slate-800" strokeWidth="6" />
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="fill-none transition-all duration-500"
            strokeWidth="6"
            stroke={color}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
          <div className="text-slate-400">{icon}</div>
          <span className="mt-1 text-xs font-bold text-slate-100">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm font-semibold text-slate-300">{label}</span>
    </div>
  );
};

const SkillsSection = () => {
  const primaryRadialSkills = [
    { label: 'Machine Learning', percentage: 90, color: '#06b6d4', icon: <Brain className="h-5 w-5" /> },
    { label: 'Data Analytics', percentage: 85, color: '#6366f1', icon: <BarChart3 className="h-5 w-5" /> },
    { label: 'Full-Stack Web Dev', percentage: 80, color: '#a855f7', icon: <Code className="h-5 w-5" /> },
    { label: 'Cybersecurity (AI)', percentage: 85, color: '#ec4899', icon: <ShieldAlert className="h-5 w-5" /> },
  ];

  const technicalProgressSkills = [
    { name: 'Python & TensorFlow / PyTorch', progress: 90 },
    { name: 'SQL & Relational Databases', progress: 85 },
    { name: 'Java & Object Oriented Design', progress: 75 },
    { name: 'Git, Version Control & MLOps', progress: 80 },
  ];

  const softSkills = [
    {
      title: 'Technical Communication',
      icon: <MessageSquare className="h-6 w-6 text-cyan-400" />,
      description: 'Proven record in authoring research papers, book chapters, and presenting complex AI paradigms at academic conferences.',
    },
    {
      title: 'Team Collaboration & Hackathons',
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      description: 'Active contributor in multidisciplinary project teams, merging machine learning codebases with responsive frontend dashboards.',
    },
    {
      title: 'Problem Solving & Research Leadership',
      icon: <Sparkles className="h-6 w-6 text-purple-400" />,
      description: 'Self-driven patent innovator designing custom Aegis AI cybersecurity blueprints and solving resource-constrained learning tasks.',
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-24 text-slate-100 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.28rem] text-cyan-400">EXPERTISE</h2>
          <h3 className="text-4xl font-extrabold text-white sm:text-5xl">Skills & Competencies</h3>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="rounded-[30px] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <h4 className="text-xl font-bold text-white">Technical Mastery</h4>
                <span className="h-px flex-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-transparent" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {primaryRadialSkills.map((skill, index) => (
                  <Reveal key={index} delay={index * 80} className="h-full">
                    <RadialChart
                      percentage={skill.percentage}
                      label={skill.label}
                      color={skill.color}
                      icon={skill.icon}
                    />
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 space-y-5">
                {technicalProgressSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="font-bold text-cyan-400">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2 bg-slate-800" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="space-y-8">
              <Card className="relative overflow-hidden rounded-[28px] border border-indigo-500/20 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 shadow-[0_30px_70px_rgba(79,70,229,0.18)]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />
                <CardContent className="relative z-10 p-6 md:p-8">
                  <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                    <Target className="h-5 w-5 text-indigo-400" />
                    Career Vision
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-slate-300">
                    “To engineer scalable Artificial Intelligence systems and high-throughput data processing models that enhance cyber resilience, secure computing environments, and empower decisions.”
                  </p>
                  <div className="space-y-2 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" />Secure machine learning systems</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" />Research-led product engineering</div>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.2)] md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <h4 className="text-xl font-bold text-white">People Skills</h4>
                  <span className="h-px flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent" />
                </div>

                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-3 transition-colors duration-300 hover:border-cyan-500/20">
                      <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5">{skill.icon}</div>
                      <div>
                        <h5 className="mb-1 text-sm font-semibold text-slate-200">{skill.title}</h5>
                        <p className="text-xs leading-relaxed text-slate-400">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
