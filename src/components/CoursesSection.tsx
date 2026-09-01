import { Award, CheckCircle, ExternalLink, Sparkles, BookMarked } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';

const CoursesSection = () => {
  const achievements = [
    { title: '1st Prize, Web Development Symposium', event: 'VYUGA 2K26', year: '2026' },
    { title: 'BIO-VERIFAI — Real-Time rPPG-Based Liveness Detection', event: 'ICACT Conference', year: '2026' },
    { title: 'AI-Powered Predictive Model for Lung Disease Detection using Chest X-Rays', event: 'IEEE Conference', year: '2025' },
    { title: '2nd Prize, AI in Cybersecurity & Threat Detection', event: 'NCRPAIDST', year: '2025' },
    { title: 'AI-Based Rockfall Prediction & Alert System for Open-Pit Mines', event: 'Smart India Hackathon, VSBCETC', year: '2025' },
  ];

  const certifications = [
    {
      title: 'Introduction to Artificial Intelligence',
      provider: 'Simplilearn SkillUp',
      completion: '15th Oct 2024',
      grade: 'ID: 7458088',
      skills: ['Artificial Intelligence'],
      logo: (
        <svg className="h-8 w-8 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z" />
        </svg>
      ),
    },
    {
      title: 'ChatGPT for Everyone',
      provider: 'GUVI / HCL – Google for Education Partner',
      completion: '29th July 2025',
      grade: 'ID: 358r4h179S66pU7u76',
      skills: ['ChatGPT', 'Generative AI'],
      logo: (
        <svg className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: 'ServiceNow Virtual Internship Program',
      provider: 'ServiceNow University + AICTE + SmartBridge',
      completion: '14th April 2026',
      grade: 'ID: SNU2013610',
      skills: ['Agentic AI', 'ServiceNow Administration', 'Flows'],
      logo: (
        <svg className="h-8 w-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      ),
    },
    {
      title: 'Micro-Certification – Welcome to ServiceNow',
      provider: 'ServiceNow',
      completion: '14th March 2026',
      grade: 'Verified',
      skills: ['ServiceNow Essentials'],
      logo: (
        <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.102 15.466 1 12.24 1c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.34 0 10.55-4.437 10.55-10.714 0-.726-.075-1.285-.165-1.7H12.24z" />
        </svg>
      ),
    },
    {
      title: 'PowerBI Workshop',
      provider: 'OfficeMaster',
      completion: '13th July 2025',
      grade: 'Verified',
      skills: ['Power BI', 'AI-powered Dashboards'],
      logo: (
        <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
    },
  ];

  const ongoingCourses = [{ title: 'Projects & Research using Hugging Face Models', provider: 'Independent Research', progress: 40, expectedCompletion: 'August 2027', skills: ['Hugging Face', 'LLMs', 'AI Research'] }];

  return (
    <section id="courses" className="relative overflow-hidden bg-slate-950 py-24 text-slate-100 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.09),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.09),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-20 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24rem] text-cyan-300">Achievements & Certifications</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Professional Credentials</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        </Reveal>

        <Reveal className="mb-20" delay={80}>
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Credential Wall</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card key={index} className="group h-full rounded-[24px] border border-slate-800 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
                <CardContent className="flex h-full flex-col justify-between space-y-5 p-6">
                  <div>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2.5">{cert.logo}</div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-bold text-cyan-300">
                        <CheckCircle className="h-3 w-3" />
                        Verified
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300">{cert.title}</h4>
                    <p className="mt-2 text-xs font-medium text-slate-400">{cert.provider}</p>
                  </div>

                  <div>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-slate-700 bg-slate-950/40 px-2 py-0 text-[10px] text-slate-300">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                      <span>Completed: <strong className="text-slate-300">{cert.completion}</strong></span>
                      <span className="rounded bg-slate-950 px-2 py-1 text-cyan-300">{cert.grade}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-20" delay={120}>
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-amber-400" />
            <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <Card key={index} className="rounded-[24px] border border-slate-800 bg-slate-900/70 shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/25">
                <CardContent className="p-6">
                  <h4 className="mb-3 text-lg font-bold text-white">{achievement.title}</h4>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                    <span>{achievement.event}</span>
                    <Badge variant="outline" className="border-slate-700 bg-slate-950/40 text-slate-200">{achievement.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 md:p-8" delay={160}>
          <div className="mb-4 flex items-center gap-3">
            <BookMarked className="h-6 w-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Ongoing Learning</h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h4 className="text-lg font-bold text-white">{ongoingCourses[0].title}</h4>
              <p className="mt-1 text-sm text-slate-400">{ongoingCourses[0].provider}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                <span>Progress</span>
                <span className="font-bold text-cyan-300">{ongoingCourses[0].progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" style={{ width: `${ongoingCourses[0].progress}%` }} />
              </div>
              <div className="mt-2 text-[11px] text-slate-400">Expected completion: {ongoingCourses[0].expectedCompletion}</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {ongoingCourses[0].skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="border-slate-700 bg-slate-950/40 px-2 py-1 text-[10px] text-slate-300">{skill}</Badge>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <a href="https://github.com/sukesh-006" target="_blank" rel="noreferrer">
            <button className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-500/30 hover:text-white">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;