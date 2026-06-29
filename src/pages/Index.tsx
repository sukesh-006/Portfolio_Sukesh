import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import QuickStatsSection from '@/components/QuickStatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PublicationsSection from '@/components/PublicationsSection';
import CoursesSection from '@/components/CoursesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const logVisit = async () => {
      try {
        await supabase.from('site_visits').insert({
          path: window.location.pathname || '/',
          user_agent: navigator.userAgent || null,
          referrer: document.referrer || null,
        });
      } catch (err) {
        console.warn('Traffic tracking skipped:', err);
      }
    };
    logVisit();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <QuickStatsSection />
      <ProjectsSection />
      <PublicationsSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
