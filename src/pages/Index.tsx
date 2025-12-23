import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gakul Basnet | Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Full-Stack Developer specializing in React, TypeScript, and Node.js. View my portfolio, skills, and experience." 
        />
        <meta name="keywords" content="Gakul Basnet, developer, portfolio, full-stack, react, typescript, web development" />
        <link rel="canonical" href="https://gakulbasnet.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gakul Basnet | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer specializing in React, TypeScript, and Node.js." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gakul Basnet | Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer specializing in React, TypeScript, and Node.js." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
