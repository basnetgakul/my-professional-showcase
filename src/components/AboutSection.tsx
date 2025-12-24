import { MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 text-center">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Aspiring SOC Analyst & Security Professional
          </h2>
          
          <div className="glass-card p-8 md:p-12">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Passionate and analytical cybersecurity fresher with a strong academic 
                background in computer science and cybersecurity. I possess hands-on 
                exposure to network security, SOC fundamentals, ethical hacking concepts, 
                and security monitoring tools.
              </p>
              <p>
                Highly motivated to understand modern threat detection, incident response 
                workflows, and Blue Team operations. I am eager to contribute to a 
                cybersecurity team while continuously developing skills toward becoming 
                a competent SOC Analyst and Security Professional.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary pt-4">
                <MapPin size={20} />
                <span className="font-medium text-xl">Based in Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
