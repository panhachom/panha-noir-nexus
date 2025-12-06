import { Bus, Ticket, Calendar, Shield, CreditCard, Wallet, Smartphone, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const involvedProjects = [
  {
    id: 1,
    icon: Bus,
    name: 'BookMeBus',
    description: 'Cambodia\'s leading bus ticketing platform connecting travelers with major bus operators nationwide.',
    role: 'Full Stack Developer',
    technologies: ['Ruby on Rails', 'Flutter', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: Ticket,
    name: 'BookMe+',
    description: 'Multi-service booking platform for events, attractions, and experiences across Cambodia.',
    role: 'Full Stack Developer',
    technologies: ['Ruby on Rails', 'Flutter', 'Sidekiq'],
  },
  {
    id: 3,
    icon: Calendar,
    name: 'EventOrganizer Portal',
    description: 'Admin dashboard for event organizers to manage tickets, attendees, and analytics.',
    role: 'Frontend Developer',
    technologies: ['LitElement', 'REST APIs', 'Web Components'],
  },
  {
    id: 4,
    icon: Shield,
    name: 'GreenGuard App',
    description: 'Environmental monitoring and reporting mobile application for sustainability tracking.',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Dart', 'REST APIs'],
  },
];

const featuredWork = [
  {
    id: 1,
    icon: CreditCard,
    title: 'ABA Pre-authorization',
    summary: 'Hold and capture payment flow for bookings.',
    problem: 'Needed to reserve funds without immediate capture for flexible booking cancellations.',
    solution: 'Implemented pre-auth with ABA API, allowing holds up to 7 days before capture or void.',
    result: 'Reduced chargebacks by 35% and improved customer refund experience.',
    technologies: ['ABA API', 'Ruby on Rails', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Vattanac Bank Gateway',
    summary: 'Secure payment processing with Vattanac Bank.',
    problem: 'Required integration with local bank for card payments and iPay.',
    solution: 'Built custom gateway connector with 3DS authentication support.',
    result: 'Enabled local card payments with 99.9% success rate.',
    technologies: ['Vattanac API', 'Ruby on Rails', '3DS'],
  },
  {
    id: 3,
    icon: CreditCard,
    title: 'TrueMoney Gateway',
    summary: 'E-wallet payment option for TrueMoney users.',
    problem: 'Users wanted to pay using TrueMoney wallet balance.',
    solution: 'Integrated TrueMoney payment API with QR and deeplink flows.',
    result: 'Added new payment option used by 15% of customers.',
    technologies: ['TrueMoney API', 'Ruby on Rails', 'QR Generation'],
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Vattanac Bank Mini App',
    summary: 'Booking services inside Vattanac mobile banking app.',
    problem: 'Bank wanted to offer lifestyle services within their super app.',
    solution: 'Built Flutter mini app with seamless bank authentication and payment.',
    result: 'Launched to 500K+ bank users with native-like experience.',
    technologies: ['Flutter', 'Mini App SDK', 'Bank APIs'],
  },
  {
    id: 5,
    icon: Smartphone,
    title: 'TrueMoney Mini App',
    summary: 'Ticket booking within TrueMoney wallet app.',
    problem: 'TrueMoney wanted to expand services beyond payments.',
    solution: 'Developed mini app with wallet-integrated checkout flow.',
    result: 'Enabled 1-tap bookings for TrueMoney users.',
    technologies: ['Flutter', 'TrueMoney SDK', 'REST APIs'],
  },
  {
    id: 6,
    icon: Smartphone,
    title: 'SmartNas Mini App',
    summary: 'Travel booking services in SmartNas super app.',
    problem: 'SmartNas needed travel vertical for their platform.',
    solution: 'Created white-label booking experience with custom branding.',
    result: 'Expanded booking reach to new user segment.',
    technologies: ['Flutter', 'Mini App SDK', 'REST APIs'],
  },
  {
    id: 7,
    icon: Wallet,
    title: 'Google Wallet Integration',
    summary: 'Digital passes delivered directly to users\' wallets.',
    problem: 'Users had to manage physical tickets and paper confirmations.',
    solution: 'Integrated Google Wallet API to generate and deliver passes automatically.',
    result: 'Streamlined user experience with instant digital ticket access.',
    technologies: ['Google Wallet API', 'Ruby on Rails', 'JWT'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 md:py-36 bg-muted/20">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-20">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
              Work & Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Projects I've contributed to and key features I've built.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Involved Section */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs text-muted-foreground">01</span>
              <h3 className="text-xl font-semibold">Projects Involved</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>
          
          {/* Minimal grid layout */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {involvedProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <div className="group py-6 border-b border-border/50 hover:border-foreground/20 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-foreground/5 rounded-lg group-hover:bg-foreground group-hover:text-background transition-all duration-300 mt-0.5">
                      <project.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold mb-1 group-hover:text-muted-foreground transition-colors">
                            {project.name}
                          </h4>
                          <span className="text-xs font-mono text-muted-foreground">
                            {project.role}
                          </span>
                        </div>
                        <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-muted-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Featured Work Section */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs text-muted-foreground">02</span>
              <h3 className="text-xl font-semibold">Featured Work</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>
          
          {/* Clean list layout */}
          <div className="space-y-6">
            {featuredWork.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 75}>
                <div className="group relative py-8 px-6 md:px-8 bg-background border border-border/50 rounded-xl hover:border-border hover:shadow-soft transition-all duration-300">
                  {/* Number */}
                  <span className="absolute top-6 right-6 font-mono text-xs text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                    {/* Title & Summary */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-foreground/5 rounded-lg group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                          <project.icon size={18} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.summary}</p>
                        </div>
                      </div>
                    </div>

                    {/* Problem → Solution → Result */}
                    <div className="lg:col-span-6 grid sm:grid-cols-3 gap-6 text-sm">
                      <div>
                        <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                          Problem
                        </span>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                          Solution
                        </span>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                          Result
                        </span>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="lg:col-span-2 flex flex-wrap lg:flex-col gap-2 lg:gap-1 lg:text-right">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-muted-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
