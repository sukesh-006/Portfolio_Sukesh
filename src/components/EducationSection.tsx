import { GraduationCap, BookOpen, Award, Calendar, Bookmark } from 'lucide-react';
import Reveal from '@/components/Reveal';

const EducationSection = () => {
  const timelineEvents = [
    {
      year: '2025 - Present',
      title: 'Advanced Research & Patent Grant',
      institution: 'V.S.B College of Engineering Technical Campus',
      description: 'Secured a granted Indian patent for the Aegis AI cybersecurity framework. Published papers in international journals and presented deep learning work at IEEE conferences.',
      icon: <Award className="h-5 w-5 text-amber-500" />,
    },
    {
      year: '2024',
      title: 'Core AI & Data Structures Specialty',
      institution: 'V.S.B College of Engineering Technical Campus',
      description: 'Focused heavily on data structures, algorithms, machine learning models, and database management systems. Developed automated NLP systems and predictive health trackers.',
      icon: <BookOpen className="h-5 w-5 text-indigo-400" />,
    },
    {
      year: '2023 - 2027 (Expected)',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'V.S.B College of Engineering Technical Campus',
      description: 'Entering final semesters of undergraduate study. Current cumulative CGPA stands at 8.5/10 while undergoing specialized curriculum in Big Data Analytics and Information Security.',
      icon: <GraduationCap className="h-5 w-5 text-cyan-400" />,
    },
  ];

  const coreCourses = [
    'Machine Learning & Deep Learning',
    'Data Structures & Algorithms',
    'Database Management (DBMS)',
    'Natural Language Processing',
    'Computer Vision & Robotics',
    'Big Data Analytics',
    'Linear Algebra & Statistics',
    'Information Security',
  ];

  return (
    <section id="education" className="relative border-b border-slate-700 bg-slate-900 py-24 text-slate-100 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24rem] text-indigo-300">Academics</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Education & Timeline</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-indigo-400/40 to-purple-500/30 md:block" />

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <Reveal key={index} className={`${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:translate-y-8'} md:w-[calc(50%-1rem)]`} delay={index * 120}>
                <div className={`relative rounded-[24px] border border-slate-800 bg-slate-950/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.22)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="absolute -left-3 top-6 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 md:flex">
                    {event.icon}
                  </div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.year}
                    </span>
                    <span className="text-xs italic text-slate-400">{event.institution}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{event.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{event.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-20 max-w-5xl rounded-[30px] border border-slate-800 bg-slate-950/75 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.2)]" delay={160}>
          <h3 className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold text-white">
            <Bookmark className="h-6 w-6 text-indigo-400" />
            Core Focus Areas
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coreCourses.map((course, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-center text-xs font-semibold leading-relaxed text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
                {course}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationSection;
