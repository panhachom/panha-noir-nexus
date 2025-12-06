import { ArrowDown, Terminal } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Badge */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-border/50 rounded-full mb-8">
              <Terminal size={14} className="text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground tracking-wide">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
            <span className="block text-display font-bold tracking-tight mb-2">
              Building the
            </span>
            <span className="block text-display font-bold tracking-tight mb-2">
              infrastructure of
            </span>
            <span className="block text-display font-bold tracking-tight text-muted-foreground">
              digital payments
            </span>
          </h1>

          {/* Subtitle */}
          <div className="animate-fade-up opacity-0 mt-10" style={{ animationDelay: '400ms' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Software Developer specializing in{' '}
              <span className="text-foreground">payment gateway integrations</span>,{' '}
              <span className="text-foreground">secure backend systems</span>, and{' '}
              <span className="text-foreground">mobile-first solutions</span>.
            </p>
          </div>

          {/* Stats - Minimal horizontal layout */}
          <div className="animate-fade-up opacity-0 mt-16" style={{ animationDelay: '500ms' }}>
            <div className="flex flex-wrap items-center gap-12 md:gap-20">
              <div className="group">
                <div className="font-mono text-4xl md:text-5xl font-bold tracking-tight">
                  <AnimatedCounter end={5} suffix="+" duration={1500} />
                </div>
                <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                  Payment Gateways
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="group">
                <div className="font-mono text-4xl md:text-5xl font-bold tracking-tight">
                  <AnimatedCounter end={50} suffix="k+" duration={1800} />
                </div>
                <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                  Transactions
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div className="group">
                <div className="font-mono text-4xl md:text-5xl font-bold tracking-tight">
                  <AnimatedCounter end={99.9} suffix="%" decimals={1} duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                  Uptime
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 mt-14 flex flex-wrap gap-4" style={{ animationDelay: '600ms' }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-all duration-300"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border font-medium rounded-full hover:bg-muted/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-up opacity-0 mt-24" style={{ animationDelay: '800ms' }}>
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
