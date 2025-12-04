import { ArrowUpRight, Bus, Ticket, Calendar, Shield, CreditCard, Wallet, Smartphone } from 'lucide-react';

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
    title: 'ABA Pre-authorization Feature',
    summary: 'Hold and capture payment flow for bookings.',
    problem: 'Needed to reserve funds without immediate capture for flexible booking cancellations.',
    solution: 'Implemented pre-auth with ABA API, allowing holds up to 7 days before capture or void.',
    result: 'Reduced chargebacks by 35% and improved customer refund experience.',
    technologies: ['ABA API', 'Ruby on Rails', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Vattanac Bank Gateway Integration',
    summary: 'Secure payment processing with Vattanac Bank.',
    problem: 'Required integration with local bank for card payments and iPay.',
    solution: 'Built custom gateway connector with 3DS authentication support.',
    result: 'Enabled local card payments with 99.9% success rate.',
    technologies: ['Vattanac API', 'Ruby on Rails', '3DS'],
  },
  {
    id: 3,
    icon: CreditCard,
    title: 'TrueMoney Gateway Integration',
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
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
              Projects
            </span>
            <h2 className="text-headline mt-4">
              Work & Experience
            </h2>
          </div>
          <p className="text-body text-muted-foreground max-w-md">
            Projects I've contributed to and key features I've built.
          </p>
        </div>

        {/* Projects Involved Section */}
        <div className="mb-20">
          <h3 className="text-title mb-8 flex items-center gap-3">
            <span className="font-mono text-sm text-muted-foreground">01</span>
            Projects Involved
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {involvedProjects.map((project) => (
              <article
                key={project.id}
                className="group p-6 bg-background border border-border rounded-2xl hover:border-muted-foreground/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-foreground/5 rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
                    <project.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold group-hover:underline decoration-2 underline-offset-4">
                      {project.name}
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Featured Work Section */}
        <div>
          <h3 className="text-title mb-8 flex items-center gap-3">
            <span className="font-mono text-sm text-muted-foreground">02</span>
            Featured Work
          </h3>
          <div className="grid gap-6">
            {featuredWork.map((project, index) => (
              <article
                key={project.id}
                className="group relative p-6 lg:p-8 bg-background border border-border rounded-2xl hover:border-muted-foreground/50 transition-all duration-300"
              >
                {/* Project Number */}
                <span className="absolute top-6 right-6 lg:top-8 lg:right-8 font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Left Column - Icon & Title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-foreground/5 rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
                        <project.icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-title group-hover:underline decoration-2 underline-offset-4">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Problem/Solution/Result */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                          Problem
                        </span>
                        <p className="mt-1 text-muted-foreground line-clamp-2 lg:line-clamp-none">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                          Solution
                        </span>
                        <p className="mt-1 text-muted-foreground line-clamp-2 lg:line-clamp-none">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                          Result
                        </span>
                        <p className="mt-1 text-muted-foreground line-clamp-2 lg:line-clamp-none">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Tech */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
