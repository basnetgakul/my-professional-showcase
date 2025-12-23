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
        <title>Gakul Basnet | Certified Ethical Hacker & Cybersecurity Professional</title>
        <meta 
          name="description" 
          content="Certified Ethical Hacker (CEH v13) specializing in Blue Team operations, SOC fundamentals, threat detection, and incident response. Based in Nepal." 
        />
        <meta name="keywords" content="Gakul Basnet, CEH, Certified Ethical Hacker, cybersecurity, SOC analyst, Blue Team, threat detection, Nepal" />
        <link rel="canonical" href="https://gakulbasnet.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gakul Basnet | Certified Ethical Hacker" />
        <meta property="og:description" content="Cybersecurity professional specializing in Blue Team operations and threat detection." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gakul Basnet | Certified Ethical Hacker" />
        <meta name="twitter:description" content="Cybersecurity professional specializing in Blue Team operations and threat detection." />
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
