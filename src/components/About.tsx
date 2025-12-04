import { Code2, Shield, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Secure Systems',
    description: 'Building robust payment infrastructure with enterprise-grade security.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing transaction flows for speed and reliability.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable solutions that last.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Main Content */}
          <div>
            <span className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
              About
            </span>
            <h2 className="text-headline mt-4 mb-6">
              Crafting seamless payment experiences
            </h2>
            
            {/* Mobile-friendly short version */}
            <p className="text-body text-muted-foreground mb-6 lg:hidden">
              I'm Panha Chom, a Software Developer focused on building secure, 
              scalable payment solutions. I bridge the gap between complex banking 
              APIs and user-friendly applications.
            </p>

            {/* Full version for desktop */}
            <div className="hidden lg:block space-y-4 text-body text-muted-foreground">
              <p>
                I'm Panha Chom, a Software Developer with deep expertise in 
                payment integration and fintech solutions. My work focuses on 
                bridging the gap between complex banking APIs and seamless user 
                experiences.
              </p>
              <p>
                Over the years, I've integrated multiple payment gateways including 
                MPGS, ABA Payway, WingPay, and custom bank APIs. I specialize in 
                building secure backend systems that handle thousands of transactions 
                while maintaining 99.9% uptime.
              </p>
              <p>
                Beyond payments, I develop mobile and web applications using Flutter 
                and Ruby on Rails, with a focus on mini app integrations for banks 
                and innovative features like Google Wallet passes.
              </p>
            </div>

            {/* Terminal-style signature */}
            <div className="mt-8 p-4 bg-foreground/5 border border-border rounded-lg font-mono text-sm">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>
              <code className="text-foreground">
                <span className="text-muted-foreground">const</span> developer = {'{'}
                <br />
                <span className="ml-4">name: </span>
                <span className="text-muted-foreground">'Panha Chom'</span>,
                <br />
                <span className="ml-4">role: </span>
                <span className="text-muted-foreground">'Software Developer'</span>,
                <br />
                <span className="ml-4">focus: </span>
                <span className="text-muted-foreground">'Fintech & Payments'</span>
                <br />
                {'}'};
              </code>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-6 border border-border rounded-2xl hover:border-muted-foreground/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-foreground/5 rounded-xl group-hover:bg-foreground/10 transition-colors">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
