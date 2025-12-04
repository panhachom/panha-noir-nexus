import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@panhachom.dev' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-display mt-4 mb-6">
            Let's build<br />something great
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-12">
            Interested in working together? I'm always open to discussing 
            new projects, payment integrations, or fintech solutions.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:hello@panhachom.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-lg font-medium rounded-full hover:opacity-90 transition-opacity group"
          >
            Get in Touch
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
