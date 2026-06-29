import { GraduationCap, BookOpen, Award, Calendar, Bookmark } from 'lucide-react';

const EducationSection = () => {
  const timelineEvents = [
    {
      year: "2025 - Present",
      title: "Advanced Research & Patent Grant",
      institution: "V.S.B College of Engineering Technical Campus",
      description: "Secured a granted Indian patent for the Aegis AI cybersecurity framework. Published two papers in international scientific journals (IJSREM, IROSWS) and presented deep learning work at IEEE conferences.",
      icon: <Award className="w-5 h-5 text-amber-600" />,
    },
    {
      year: "2024",
      title: "Core AI & Data Structures Specialty",
      institution: "V.S.B College of Engineering Technical Campus",
      description: "Focused heavily on Data Structures, Algorithms, Machine Learning models, and Database Management Systems. Developed automated NLP systems and predictive health trackers.",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
    },
    {
      year: "2023 - 2027 (Expected)",
      title: "B.Tech in Artificial Intelligence & Data Science",
      institution: "V.S.B College of Engineering Technical Campus",
      description: "Entering final semesters of undergraduate studies. Current cumulative CGPA stands at 8.5/10.0. Undergoing advanced curriculum in Big Data Analytics and Information Security.",
      icon: <GraduationCap className="w-5 h-5 text-cyan-600" />,
    }
  ];

  const coreCourses = [
    "Machine Learning & Deep Learning",
    "Data Structures & Algorithms",
    "Database Management (DBMS)",
    "Natural Language Processing",
    "Computer Vision & Robotics",
    "Big Data Analytics",
    "Linear Algebra & Statistics",
    "Information Security",
  ];

  return (
    <section id="education" className="py-24 bg-academic-grid text-slate-800 font-sans relative border-b border-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-100/80 border border-indigo-200 rounded-full">
            ACADEMICS
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl font-serif-academic">Education & Timeline</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Alignment (Vertical Center-branching or Left-anchored) */}
        <div className="relative border-l-2 border-indigo-200 max-w-3xl mx-auto pl-8 space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative group">
              {/* Point Indicator */}
              <div className="absolute -left-[2.7rem] top-1.5 w-7 h-7 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:border-indigo-600 transition-smooth">
                {event.icon}
              </div>

              {/* Card Container */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-smooth hover:border-indigo-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.year}
                  </span>
                  <span className="text-xs font-medium text-slate-500 italic">{event.institution}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-smooth mb-2 font-serif-academic">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coursework Cards Grid */}
        <div className="mt-20 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2 font-serif-academic">
            <Bookmark className="text-indigo-600 w-6 h-6" />
            Core Focus Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-center shadow-soft hover:border-indigo-300 hover:-translate-y-0.5 transition-smooth"
              >
                <span className="text-xs font-semibold text-slate-700 leading-tight block">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
