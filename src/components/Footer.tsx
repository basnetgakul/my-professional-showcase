import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p className="flex items-center gap-1">
            © {currentYear} John Doe. Built with{' '}
            <Heart size={14} className="text-primary fill-primary" /> and code.
          </p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
