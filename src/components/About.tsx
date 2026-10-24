import { ArrowRight, CreditCard, Server, ShieldCheck, Smartphone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const strengths = [
  {
    icon: Server,
    title: 'Backend engineering',
    description: 'APIs, data models and background processing.',
  },
  {
    icon: CreditCard,
    title: 'Payments & fintech',
    description: 'Secure, well-tested integrations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & web',
    description: 'Cross-platform apps with a focus on usability.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'Maintainable code, automated tests, clear communication.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="section-container">
        <div className="max-w-4xl">
          <ScrollReveal>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              About
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-6 mb-10 leading-tight">
              Engineering with<br className="hidden sm:block" /> reliability in mind
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7">
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm Panha Chom, a software developer who enjoys turning complex
                  requirements into simple, dependable products. My core strength
                  is backend engineering.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I specialize in payment and fintech integrations, and I also
                  build web and mobile apps end to end. I care about security,
                  clean code and a smooth user experience.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <a
                  href="#work-highlights"
                  className="group inline-flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors"
                >
                  See the work
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </ScrollReveal>
            </div>

            {/* Key strengths */}
            <div className="md:col-span-5">
              <ScrollReveal delay={300} direction="right">
                <ul className="space-y-6 md:pl-8 md:border-l border-border">
                  {strengths.map(({ icon: Icon, title, description }) => (
                    <li key={title} className="group flex items-start gap-4">
                      <div className="glass-icon p-2.5 mt-0.5">
                        <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
