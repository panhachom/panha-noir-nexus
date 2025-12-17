import { Linkedin, Mail, Github, Send, Instagram, Facebook , ArrowUpRight} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/panhachom/' },
  { icon: Mail, label: 'Email', href: 'mailto:panhachom@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/panhachom' },

  { icon: Send, label: 'Telegram', href: 'https://t.me/panhachom' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/chompanha/?hl=en' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/panha.chom.7' },
];


const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Contact
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 mb-8">
              Let's build<br />something great
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
              Interested in working together? I'm always open to discussing 
              new projects, payment integrations, or fintech solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="mailto:panhachom@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-lg font-medium rounded-full hover:opacity-90 transition-all duration-300"
            >
              Get in Touch
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-14">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 border border-border rounded-full hover:bg-muted hover:border-muted-foreground/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
