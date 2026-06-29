import { Brain, Database, Code, BarChart3, Users, MessageSquare, ShieldAlert, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
    <div className="flex flex-col items-center p-4 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-soft group hover:border-cyan-500/30 transition-smooth">
      <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-slate-800 fill-none"
            strokeWidth="6"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="fill-none transition-smooth"
            strokeWidth="6"
            stroke={color}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
          <div className="text-slate-400 group-hover:text-white transition-smooth">{icon}</div>
          <span className="text-xs font-bold mt-1 text-slate-100">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-smooth">{label}</span>
    </div>
  );
};

const SkillsSection = () => {
  const primaryRadialSkills = [
    { label: "Machine Learning", percentage: 90, color: "#06b6d4", icon: <Brain className="w-5 h-5" /> },
    { label: "Data Analytics", percentage: 85, color: "#6366f1", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Full-Stack Web Dev", percentage: 80, color: "#a855f7", icon: <Code className="w-5 h-5" /> },
    { label: "Cybersecurity (AI)", percentage: 85, color: "#ec4899", icon: <ShieldAlert className="w-5 h-5" /> },
  ];

  const technicalProgressSkills = [
    { name: "Python & TensorFlow / PyTorch", progress: 90 },
    { name: "SQL & Relational Databases", progress: 85 },
    { name: "Java & Object Oriented Design", progress: 75 },
    { name: "Git, Version Control & MLOps", progress: 80 },
  ];

  const softSkills = [
    {
      title: "Technical Communication",
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
      description: "Proven record in authoring research papers, book chapters, and presenting complex AI paradigms at academic conferences."
    },
    {
      title: "Team Collaboration & Hackathons",
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      description: "Active contributor in multi-disciplinary project teams, merging machine learning codebases with responsive frontend dashboards."
    },
    {
      title: "Problem Solving & Research Leadership",
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      description: "Self-driven patent innovator. Designing custom Aegis AI cybersecurity blueprints and solving resource-constrained learning tasks."
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-b border-slate-800 text-slate-100 font-sans relative">
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
      
      {/* Decorative neon ambient blur */}
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">EXPERTISE</h2>
          <h3 className="text-4xl font-extrabold text-white sm:text-5xl">Skills & Competencies</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Section Split: Left is Technical Skills, Right is Career Vision & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (8/12 on large screen): Technical Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-strong">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                Technical Mastery
                <span className="w-8 h-[2px] bg-cyan-400 rounded-full"></span>
              </h4>
              
              {/* Radial Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {primaryRadialSkills.map((skill, index) => (
                  <RadialChart
                    key={index}
                    percentage={skill.percentage}
                    label={skill.label}
                    color={skill.color}
                    icon={skill.icon}
                  />
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                {technicalProgressSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2 bg-slate-800" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5/12 on large screen): HR Core & Vision */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Career Goals / Vision Card */}
            <Card className="bg-gradient-to-br from-indigo-950/60 to-slate-950/60 backdrop-blur-md border border-indigo-500/20 rounded-3xl shadow-strong overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />
              <CardContent className="p-6 md:p-8 relative z-10">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-400" />
                  Career Vision
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  "To engineer scalable Artificial Intelligence systems and high-throughput data processing models that enhance cyber resilience, secure computing environments, and empower decisions."
                </p>
                <div className="flex flex-col gap-2 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Focus on secure machine learning applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Aspiring full-stack engineer and researcher</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills Section */}
            <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-strong">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                HR Core (Soft Skills)
                <span className="w-8 h-[2px] bg-cyan-400 rounded-full"></span>
              </h4>

              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-cyan-500/30 transition-smooth">
                      {skill.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-smooth mb-1">
                        {skill.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
