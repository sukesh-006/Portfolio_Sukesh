import { BookOpen, FileText, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PublicationsSection = () => {
  const journals = [
    {
      title: "Aegis AI - Intelligent Cyber Resilience",
      authors: "R SUKESH,",
      journal: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
      year: "2025",
      status: "Published",
      doi: "doi.org/10.55041/ijsrem42978",
      volume: "09",
      abstract: "Aegis AI (AAI): Intelligent Cyber Resilience presents a cutting-edge approach that integrates artificial intelligence (AI) and machine learning (ML) to strengthen cybersecurity defenses."
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

  const patents = [
    {
      title: "Aegis AI - Intelligent Cyber Resilience Framework",
      patentNumber: "IN Patent Application 202541034212 A",
      status: "Granted",
      year: "2025",
      inventors: "R Sukesh",
      description: "Aegis AI is an advanced AI-driven cybersecurity framework designed to enhance cyber resilience by integrating intelligent threat detection, automated incident response, and adaptive learning."
    }
    
  ];

  const conferences = [
    {
      title: "Deep Learning for Medical Image Analysis",
      conference: "Institute of Electrical and Electronics Engineers (IEEE) in NCRPAIDST ",
      year: "2025",
      location: "Hosur, Tamil Nadu, India",
      status: "Accepted",
      type: "Oral Presentation"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Publications & Research</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My contributions to academic research through journal publications, book chapters, 
            patents, and conference presentations in AI and data science.
          </p>
        </div>

        <Tabs defaultValue="journals" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="journals" className="flex items-center gap-2">
              <FileText size={16} />
              Journals
            </TabsTrigger>
            <TabsTrigger value="chapters" className="flex items-center gap-2">
              <BookOpen size={16} />
              Chapters
            </TabsTrigger>
            <TabsTrigger value="patents" className="flex items-center gap-2">
              <Award size={16} />
              Patents
            </TabsTrigger>
            <TabsTrigger value="conferences" className="flex items-center gap-2">
              <ExternalLink size={16} />
              Conferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journals" className="space-y-6">
            {journals.map((journal, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{journal.title}</CardTitle>
                    <Badge variant={journal.status === 'Published' ? 'default' : 'secondary'}>
                      {journal.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{journal.authors}</p>
                  <div className="flex items-center gap-4">
                    <p className="font-medium text-primary">{journal.journal}</p>
                    <p className="text-muted-foreground">{journal.year}</p>
                    
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{journal.abstract}</p>
                  {journal.doi && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DOI:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">{journal.doi}</code>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="chapters" className="space-y-6">
            {chapters.map((chapter, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{chapter.title}</CardTitle>
                  <div className="space-y-2">
                    <p className="font-medium text-primary">{chapter.book}</p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{chapter.publisher}</span>
                      <span>{chapter.year}</span>
                      <span>{chapter.chapter}</span>
                      <span>Pages: {chapter.pages}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">ISBN:</span>
                    <code className="text-sm bg-muted px-2 py-1 rounded">{chapter.isbn}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="patents" className="space-y-6">
            {patents.map((patent, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{patent.title}</CardTitle>
                    <Badge variant={patent.status === 'Filed' ? 'default' : 'secondary'}>
                      {patent.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-primary">{patent.patentNumber}</p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{patent.year}</span>
                      <span>Inventors: {patent.inventors}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{patent.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="conferences" className="space-y-6">
            {conferences.map((conference, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{conference.title}</CardTitle>
                    <Badge variant={conference.status === 'Presented' ? 'default' : 'secondary'}>
                      {conference.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-primary">{conference.conference}</p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{conference.year}</span>
                      <span>{conference.location}</span>
                      <Badge variant="outline">{conference.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="transition-bounce hover:scale-105">
            View Complete Publication List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;