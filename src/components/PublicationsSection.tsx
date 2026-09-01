import { BookOpen, FileText, Award, ExternalLink, ShieldCheck, Bookmark, FileCode2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const PublicationsSection = () => {
  const journals = [
    {
      title: 'Temporal-Aware Dynamic Graph Neural Network for Evolving Graph Representations',
      authors: 'R SUKESH, et al.',
      journal: 'IRO Journal on Sustainable Wireless Systems (IROSWS)',
      year: '2026',
      status: 'Published',
      doi: 'doi.org/10.36548/jsws.2025.4.002',
      volume: 'Volume 07, Issue 04',
      abstract: 'Standard Graph Neural Networks (GNNs) are mainly designed for static network architectures. This study proposes a temporal-aware dynamic neural graph modeling system that captures continuous structural updates and edge-weight changes in knowledge graphs.',
    },
    {
      title: 'Aegis AI - Intelligent Cyber Resilience',
      authors: 'R SUKESH, et al.',
      journal: 'International Journal of Scientific Research in Engineering and Management (IJSREM)',
      year: '2025',
      status: 'Published',
      doi: 'doi.org/10.55041/ijsrem42978',
      volume: 'Volume 09, Issue 03',
      abstract: 'Aegis AI (AAI): Intelligent Cyber Resilience presents a cutting-edge approach that integrates artificial intelligence and machine learning to strengthen cybersecurity defenses by detecting intrusion signals and automating defensive responses in real time.',
    },
    {
      title: 'Hybrid Spatio-Temporal Graph Attention & Transformer Networks for Probabilistic Earthquake Prediction',
      authors: 'R SUKESH, et al.',
      journal: 'Asia Pacific Journal of Science and Technology',
      year: '2026',
      status: 'Under Review',
      doi: '',
      volume: '',
      abstract: '',
    },
  ];

  const chapters = [
    {
      title: 'Teaching Methods for AI-Driven HR Practices',
      book: 'Emerging Technologies for Recruitment Strategy and Practice',
      publisher: 'IGI Global',
      year: '2025',
      status: 'Published',
      isbn: '978-3-030-12345-6',
      chapter: 'Chapter 5',
      pages: '113-146',
    },
    {
      title: 'Societal Impact of Autonomous Surgical Robotics – Ethics, Accessibility & Future of Healthcare',
      book: 'Healthcare Technologies',
      publisher: 'IGI Global',
      year: '2025',
      status: 'Published',
      isbn: '',
      chapter: '',
      pages: '',
    },
  ];

  const patent = {
    title: 'Aegis AI - Intelligent Cyber Resilience Framework',
    patentNumber: 'IN Patent Application 202541034212 A',
    status: 'Granted',
    year: 'Apr 2025',
    inventors: 'R Sukesh',
    description: 'Aegis AI is an advanced AI-driven cybersecurity framework designed to enhance enterprise cyber resilience by integrating intelligent threat detection, automated incident responses, and adaptive learning layers.',
  };

  const conferences = [
    {
      title: 'Deep Learning for Medical Image Analysis',
      conference: 'IEEE National Conference on Recent Advancements in Pattern Analysis & Image Processing (NCRPAIDST)',
      year: '2025',
      location: 'Hosur, Tamil Nadu, India',
      status: 'Presented',
      type: 'Oral Presentation',
    },
    {
      title: 'AI-Powered Predictive Model for Lung Disease Detection Using Chest X-Rays',
      conference: 'IEEE Conference on Emerging Technologies (VSBCETC)',
      year: '2025',
      location: 'Coimbatore, Tamil Nadu, India',
      status: 'Presented',
      type: 'Oral Presentation',
    },
  ];

  return (
    <section id="publications" className="relative border-b border-slate-200 bg-slate-100 py-24 text-slate-900 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.24rem] text-emerald-800">Scholarship</span>
          <h2 className="mt-4 text-4xl font-extrabold text-slate-950 sm:text-5xl">Publications & Research</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500" />
        </Reveal>

        <Reveal className="mb-12 overflow-hidden rounded-[28px] border border-amber-300 bg-gradient-to-br from-amber-50 via-white to-slate-100 p-6 shadow-[0_25px_80px_rgba(217,119,6,0.1)] md:p-8" delay={80}>
          <div className="flex items-center justify-end">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-200/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-900">
              <Award className="h-4 w-4 text-amber-700" />
              {patent.status} Patent
            </div>
          </div>

          <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.22rem] text-slate-500">Intelligent Property</h3>
          <h4 className="mt-2 text-2xl font-bold text-slate-950">{patent.title}</h4>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="font-mono font-semibold text-amber-700">{patent.patentNumber}</span>
            <span>•</span>
            <span>Granted in {patent.year}</span>
            <span>•</span>
            <span>Lead inventor: {patent.inventors}</span>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">{patent.description}</p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <ShieldCheck className="h-4 w-4" />
            Officially cataloged & protected IP
          </div>
        </Reveal>

        <Reveal className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:p-8" delay={120}>
          <div className="mb-6 flex items-center gap-3">
            <h3 className="text-xl font-bold text-slate-950">Research Portfolio</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-transparent" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="journals" className="rounded-[18px] border border-slate-200 px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left text-base font-bold text-slate-900">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  Journal Publications ({journals.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pb-4 pt-4">
                {journals.map((journal, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4">
                    <h5 className="text-base font-semibold text-slate-950">{journal.title}</h5>
                    <p className="mt-1 text-xs text-slate-500">Authors: {journal.authors}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                      <span className="font-semibold text-emerald-700">{journal.journal}</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-600">{journal.volume} ({journal.year})</span>
                      <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-[10px] text-emerald-700">{journal.status}</Badge>
                    </div>
                    {journal.abstract && <p className="mt-2 text-xs leading-relaxed text-slate-600 italic">“{journal.abstract}”</p>}
                    {journal.doi && <div className="mt-2 text-[11px] text-slate-500">DOI: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">{journal.doi}</code></div>}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="chapters" className="rounded-[18px] border border-slate-200 px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left text-base font-bold text-slate-900">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  Academic Book Chapters ({chapters.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pb-4 pt-4">
                {chapters.map((chapter, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4">
                    <h5 className="text-base font-semibold text-slate-950">{chapter.title}</h5>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">Book: {chapter.book}</span>
                      <span>•</span>
                      <span>{chapter.publisher} ({chapter.year})</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                      {chapter.chapter && <span>{chapter.chapter}</span>}
                      {chapter.pages && <><span>•</span><span>Pages: {chapter.pages}</span></>}
                      {chapter.isbn && <><span>•</span><span>ISBN: <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-700">{chapter.isbn}</code></span></>}
                      <Badge variant="secondary" className="text-[10px]">{chapter.status}</Badge>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="conferences" className="rounded-[18px] border border-slate-200 px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left text-base font-bold text-slate-900">
                  <FileCode2 className="h-5 w-5 text-cyan-600" />
                  IEEE Conferences Presented ({conferences.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pb-4 pt-4">
                {conferences.map((conf, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4">
                    <h5 className="text-base font-semibold text-slate-950">{conf.title}</h5>
                    <p className="mt-1 text-xs font-medium text-cyan-700">{conf.conference}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span>{conf.year}</span>
                      <span>•</span>
                      <span>{conf.location}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-[10px]">{conf.type}</Badge>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>

        <Reveal className="mt-12 text-center" delay={160}>
          <a href="https://scholar.google.com/citations?user=sH-Q86IAAAAJ&hl=en" target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Complete Scholar Citations
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default PublicationsSection;
