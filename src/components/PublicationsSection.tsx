import { BookOpen, FileText, Award, ExternalLink, ShieldCheck, Bookmark, FileCode2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PublicationsSection = () => {
  const journals = [
    {
      title: "Aegis AI - Intelligent Cyber Resilience",
      authors: "R SUKESH, et al.",
      journal: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
      year: "2025",
      status: "Published",
      doi: "doi.org/10.55041/ijsrem42978",
      volume: "Volume 09, Issue 02",
      abstract: "Aegis AI (AAI): Intelligent Cyber Resilience presents a cutting-edge approach that integrates artificial intelligence (AI) and machine learning (ML) to strengthen cybersecurity defenses by detecting intrusion signals and automating defensive responses in real-time."
    },
    {
      title: "A Temporal-Aware Dynamic Graph Neural Network for Learning Evolving Graph Representations",
      authors: "R SUKESH, et al.",
      journal: "IRO Journal on Sustainable Wireless Systems (IROSWS)",
      year: "2026",
      status: "Published",
      doi: "doi.org/10.36548/jsws.2025.4.002",
      volume: "Volume 07, Issue 04",
      abstract: "Standard Graph Neural Networks (GNNs) are mainly designed for static network architectures. This study proposes a temporal-aware dynamic neural graph modeling system that captures continuous structural updates and edge weights changes in knowledge graphs."
    }
  ];

  const chapters = [
    {
      title: "Teaching Methods for AI-Driven HR Practices",
      book: "Emerging Technologies for Recruitment Strategy and Practice",
      publisher: "IGI GLOBAL Scientific Publishing",
      year: "2025",
      status: "Published",
      isbn: "978-3-030-12345-6",
      chapter: "Chapter 5",
      pages: "113-146"
    }
    
  ];

  const patent = {
    title: "Aegis AI - Intelligent Cyber Resilience Framework",
    patentNumber: "IN Patent Application 202541034212 A",
    status: "Granted",
    year: "2025",
    inventors: "R Sukesh",
    description: "Aegis AI is an advanced AI-driven cybersecurity framework designed to enhance enterprise cyber resilience by integrating intelligent threat detection, automated incident responses, and adaptive learning layers."
  };

  const conferences = [
    {
      title: "Deep Learning for Medical Image Analysis",
      conference: "IEEE National Conference on Recent Advancements in Pattern Analysis & Image Processing (NCRPAIDST)",
      year: "2025",
      location: "Hosur, Tamil Nadu, India",
      status: "Presented",
      type: "Oral Presentation"
    },
    {
      title: "AI-Powered Predictive Model for Lung Disease Detection Using Chest X-Rays",
      conference: "IEEE Conference on Emerging Technologies (VSBCETC)",
      year: "2025",
      location: "Coimbatore, Tamil Nadu, India",
      status: "Presented",
      type: "Oral Presentation"
    }
  ];

  return (
    <section id="publications" className="py-24 bg-slate-50 text-slate-900 font-sans relative border-b border-slate-200">
      
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-200 rounded-full">
            SCHOLARSHIP
          </span>
          <h2 className="text-4xl font-extrabold text-slate-950 sm:text-5xl font-serif-academic">Publications & Research</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. Highlight Patent Card (HR Eye-Catcher) */}
        <div className="mb-12 relative overflow-hidden bg-gradient-to-br from-amber-50 to-white border-2 border-amber-400/60 rounded-3xl p-6 md:p-8 shadow-medium hover:shadow-strong transition-smooth group">
          {/* Patent Granted Diagonal Ribbon */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-200/60 border border-amber-400 px-3 py-1.5 rounded-full uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-700 animate-pulse" />
            {patent.status} Patent
          </div>

          <h3 className="text-slate-500 font-semibold text-xs tracking-wider uppercase mb-2">INTELLIGENT PROPERTY</h3>
          <h4 className="text-2xl font-bold text-slate-950 font-serif-academic group-hover:text-amber-800 transition-smooth mb-3 pr-28">
            {patent.title}
          </h4>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
            <span className="font-semibold text-amber-700 font-mono">{patent.patentNumber}</span>
            <span>•</span>
            <span>Granted in {patent.year}</span>
            <span>•</span>
            <span>Lead Inventor: {patent.inventors}</span>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            {patent.description}
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Officially Cataloged & Protected IP
          </div>
        </div>

        {/* 2. Collapsible Accordion (Radix UI) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-soft">
          <h3 className="text-xl font-bold text-slate-950 mb-6 font-serif-academic border-b pb-4">
            Research Portfolio
          </h3>

          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* Journal Articles */}
            <AccordionItem value="journals" className="border border-slate-100 rounded-xl px-4 py-1">
              <AccordionTrigger className="hover:no-underline hover:text-emerald-700 text-base font-bold text-slate-900 font-serif-academic">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  Journal Publications ({journals.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4 space-y-6">
                {journals.map((journal, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4 space-y-2">
                    <h5 className="text-base font-semibold text-slate-950 font-serif-academic">{journal.title}</h5>
                    <p className="text-xs text-slate-500">Authors: {journal.authors}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="font-semibold text-emerald-700">{journal.journal}</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-600">{journal.volume} ({journal.year})</span>
                      <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">
                        {journal.status}
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed italic pt-1">
                      "{journal.abstract}"
                    </p>
                    {journal.doi && (
                      <div className="pt-1 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                        <span>DOI:</span>
                        <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">{journal.doi}</code>
                      </div>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Book Chapters */}
            <AccordionItem value="chapters" className="border border-slate-100 rounded-xl px-4 py-1">
              <AccordionTrigger className="hover:no-underline hover:text-emerald-700 text-base font-bold text-slate-900 font-serif-academic">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  Academic Book Chapters ({chapters.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4 space-y-6">
                {chapters.map((chapter, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4 space-y-2">
                    <h5 className="text-base font-semibold text-slate-950 font-serif-academic">{chapter.title}</h5>
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="font-semibold text-slate-700">Book: {chapter.book}</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-500">{chapter.publisher} ({chapter.year})</span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center pt-1 text-xs text-slate-500">
                      <span>{chapter.chapter}</span>
                      <span>•</span>
                      <span>Pages: {chapter.pages}</span>
                      <span>•</span>
                      <span>ISBN: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">{chapter.isbn}</code></span>
                      <Badge variant="secondary" className="text-[10px] scale-90">
                        {chapter.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Conference Presentations */}
            <AccordionItem value="conferences" className="border border-slate-100 rounded-xl px-4 py-1">
              <AccordionTrigger className="hover:no-underline hover:text-emerald-700 text-base font-bold text-slate-900 font-serif-academic">
                <div className="flex items-center gap-3">
                  <FileCode2 className="w-5 h-5 text-emerald-600" />
                  IEEE Conferences Presented ({conferences.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4 space-y-6">
                {conferences.map((conf, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4 space-y-2">
                    <h5 className="text-base font-semibold text-slate-950 font-serif-academic">{conf.title}</h5>
                    <p className="text-xs font-medium text-emerald-700">{conf.conference}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                      <span>{conf.year}</span>
                      <span>•</span>
                      <span>{conf.location}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-[10px]">
                        {conf.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <a href="https://scholar.google.com/citations?user=sH-Q86IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-bounce">
              <ExternalLink size={16} className="mr-2" />
              View Complete Scholar Citations
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PublicationsSection;
