import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Virtual Internship",
      company: "ServiceNow University",
      year: "2026",
      description: "ITSM workflows, ServiceNow platform fundamentals, enterprise process automation"
    },
    {
      role: "Web Developer",
      company: "Corizo",
      year: "2025",
      description: "Built responsive websites and dynamic applications using HTML, CSS, JavaScript, and modern frameworks"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 text-slate-100 font-sans relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 rounded-full">
            CAREER
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-soft hover:shadow-medium hover:border-cyan-500/30 transition-smooth">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl hidden md:block">
                  <Briefcase className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-950 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-800 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {exp.year}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
