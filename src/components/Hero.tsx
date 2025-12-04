import { ArrowDown, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Badge */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-foreground/5 border border-border rounded-full mb-8">
              <Terminal size={14} className="text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
            <span className="block text-display font-bold tracking-tight mb-4">
              Building the
            </span>
            <span className="block text-display font-bold tracking-tight mb-4">
              infrastructure of
            </span>
            <span className="block text-display font-bold tracking-tight text-muted-foreground">
              digital payments
            </span>
          </h1>

          {/* Subtitle */}
          <div className="animate-fade-up opacity-0 mt-8 md:mt-12" style={{ animationDelay: '400ms' }}>
            <p className="text-body text-muted-foreground max-w-xl">
              Software Developer specializing in{' '}
              <span className="text-foreground font-medium">payment gateway integrations</span>,{' '}
              <span className="text-foreground font-medium">secure backend systems</span>, and{' '}
              <span className="text-foreground font-medium">mobile-first solutions</span>.
            </p>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-up opacity-0 mt-12 md:mt-16" style={{ animationDelay: '500ms' }}>
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold tracking-tight">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Payment Gateways</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold tracking-tight">50k+</div>
                <div className="text-sm text-muted-foreground mt-1">Transactions Processed</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold tracking-tight">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">System Uptime</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 mt-12 flex flex-wrap gap-4" style={{ animationDelay: '600ms' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-full hover:bg-muted transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-up opacity-0 mt-20 md:mt-24" style={{ animationDelay: '800ms' }}>
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
