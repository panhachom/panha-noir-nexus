import { TrendingUp, Shield, Zap, Clock } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Transaction Success Rate',
    description: 'Across all integrated payment gateways',
  },
  {
    icon: Shield,
    value: '5+',
    label: 'Payment Gateways',
    description: 'MPGS, ABA, WingPay, and custom bank APIs',
  },
  {
    icon: Zap,
    value: '60%',
    label: 'Reduced Processing Time',
    description: 'Through optimized transaction flows',
  },
  {
    icon: Clock,
    value: '40%',
    label: 'Conversion Increase',
    description: 'With frictionless checkout experiences',
  },
];

const achievements = [
  'Successfully integrated Google Wallet passes for digital ticketing',
  'Built automated QR ticketing system processing 25,000+ tickets',
  'Developed mini app payment SDK for major banks',
  'Implemented PCI-compliant payment processing infrastructure',
  'Created user review system generating 5,000+ verified reviews',
  'Reduced checkout abandonment through anonymous booking feature',
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-foreground text-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-background/60 tracking-wider uppercase">
            Impact
          </span>
          <h2 className="text-headline mt-4">
            Measurable results
          </h2>
          <p className="text-body text-background/70 mt-4 max-w-2xl mx-auto">
            Delivering tangible improvements in payment processing, 
            user experience, and system performance.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 border border-background/20 rounded-2xl hover:border-background/40 transition-colors"
            >
              <metric.icon size={24} strokeWidth={1.5} className="text-background/60 mb-4" />
              <div className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="font-medium mb-1">{metric.label}</div>
              <div className="text-sm text-background/60">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-mono text-sm text-background/60 tracking-wider uppercase mb-6 text-center">
            Key Achievements
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-background/5 rounded-xl"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-background text-foreground text-xs font-mono font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm text-background/80">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
