import { ArrowDown, Github, Linkedin, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
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
              <Terminal size={14} className="text-brand" />
              <span className="font-mono text-xs text-muted-foreground tracking-wide">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-fade-up opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            <span className="
              block font-bold tracking-tight mb-2
              text-3xl sm:text-4xl md:text-5xl lg:text-display
            ">
              Backend engineer building
            </span>

            <span className="
              block font-bold tracking-tight mb-2
              text-3xl sm:text-4xl md:text-5xl lg:text-display
            ">
              secure, reliable systems
            </span>

            <span className="
              block font-bold tracking-tight text-muted-foreground
              text-2xl sm:text-3xl md:text-4xl lg:text-display
            ">
              for payments and fintech
            </span>
          </h1>

          {/* Subtitle */}
          <div className="animate-fade-up opacity-0 mt-10" style={{ animationDelay: '400ms' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I'm Panha Chom. I design and ship the{' '}
              <span className="text-foreground">backend behind products people pay through</span>
              {' '}— secure, well-tested and built to last.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 mt-14 flex flex-wrap items-center gap-4" style={{ animationDelay: '600ms' }}>
            <a
              href="#work-highlights"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-all duration-300"
            >
              View Work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border font-medium rounded-full hover:bg-muted/50 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/panhachom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group p-3.5 border border-border rounded-full hover:bg-muted/50 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={18} className="text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/panhachom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group p-3.5 border border-border rounded-full hover:bg-muted/50 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={18} className="text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
