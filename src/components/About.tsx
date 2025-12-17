import ScrollReveal from './ScrollReveal';

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
              Crafting seamless<br className="hidden sm:block" /> payment experiences
            </h2>
          </ScrollReveal>
          
          {/* Bio - Clean paragraphs without cards */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7">
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm Panha Chom, a Software Developer with deep expertise in 
                  payment integration and fintech solutions. My work focuses on 
                  bridging the gap between complex banking APIs and seamless user 
                  experiences.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 Over the years, I've integrated multiple payment gateways including ABA Payway, Vattanac Bank, True Money, SMART, 
                 and custom bank APIs. I specialize in building secure backend systems that handle thousands of transactions 
                 while ensuring high reliability and continuous availability.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond payments, I develop mobile and web applications using Flutter 
                  and Ruby on Rails, with a focus on mini app integrations for banks 
                  and innovative features like Google Wallet passes.
                </p>
              </ScrollReveal>
            </div>

            {/* Key points - Simple list */}
            <div className="md:col-span-5">
              <ScrollReveal delay={300} direction="right">
                <div className="space-y-6 md:pl-8 md:border-l border-border">
                  <div className="group">
                    <h3 className="font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      Secure Systems
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Building robust payment infrastructure with enterprise-grade security.
                    </p>
                  </div>
                  <div className="h-px bg-border/50" />
                  <div className="group">
                    <h3 className="font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      Performance First
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Optimizing transaction flows for speed and reliability.
                    </p>
                  </div>
                  <div className="h-px bg-border/50" />
                  <div className="group">
                    <h3 className="font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      Clean Code
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable, scalable solutions that last.
                    </p>
                  </div>

                  <div className="h-px bg-border/50" />
                  <div className="group">
                    <h3 className="font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      User-Centric Design
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Delivering seamless, intuitive experiences that prioritize real-world usability.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
