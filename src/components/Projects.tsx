import { ArrowUpRight, Layers, CreditCard, QrCode, Smartphone, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Layers,
    title: 'Anonymous Booking System',
    summary: 'Frictionless booking without mandatory account creation.',
    role: 'Full Stack Developer',
    impact: 'Increased conversion rate by 40%',
    problem: 'Users were abandoning bookings due to forced account creation.',
    solution: 'Implemented anonymous booking with optional account linking post-purchase.',
    result: 'Reduced checkout friction and increased booking completion rates significantly.',
    technologies: ['Ruby on Rails', 'Flutter', 'PostgreSQL', 'Sidekiq'],
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Google Wallet Pass Integration',
    summary: 'Digital passes delivered directly to users\' wallets.',
    role: 'Backend & Integration Lead',
    impact: 'Enabled 10,000+ digital passes issued',
    problem: 'Users had to manage physical tickets and paper confirmations.',
    solution: 'Integrated Google Wallet API to generate and deliver passes automatically.',
    result: 'Streamlined user experience with instant digital ticket access.',
    technologies: ['Google Wallet API', 'Ruby on Rails', 'JWT', 'REST APIs'],
  },
  {
    id: 3,
    icon: QrCode,
    title: 'Guest QR Ticketing System',
    summary: 'Automated ticketing with QR code generation and admin tools.',
    role: 'Full Stack Developer',
    impact: 'Processed 25,000+ QR tickets',
    problem: 'Manual ticket verification was slow and error-prone.',
    solution: 'Built automated QR generation with real-time validation and admin import tools.',
    result: 'Reduced check-in time by 60% and eliminated duplicate entries.',
    technologies: ['Rails', 'QR Generation', 'Background Jobs', 'Admin Dashboard'],
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Mini App Payment Integration',
    summary: 'Seamless payments within banking mini apps.',
    role: 'Payment Integration Specialist',
    impact: 'Integrated 3 major bank payment gateways',
    problem: 'Payment flows were fragmented across different bank apps.',
    solution: 'Created unified payment SDK for mini app platforms.',
    result: 'Unified payment experience with 99.9% transaction success rate.',
    technologies: ['Flutter', 'MPGS', 'ABA Payway', 'WingPay', 'Bank APIs'],
  },
  {
    id: 5,
    icon: Star,
    title: 'User Review System',
    summary: 'Comprehensive review system for product bookings.',
    role: 'Backend Developer',
    impact: 'Generated 5,000+ verified reviews',
    problem: 'No way for users to share feedback on bookings.',
    solution: 'Built review system with verification, moderation, and analytics.',
    result: 'Increased user trust and engagement with verified review badges.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Elasticsearch', 'Redis'],
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
              Featured work
            </h2>
          </div>
          <p className="text-body text-muted-foreground max-w-md">
            A selection of projects showcasing payment integrations, automation, 
            and user-focused solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
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
                      <h3 className="text-title group-hover:underline decoration-2 underline-offset-4">
                        {project.title}
                      </h3>
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

                {/* Right Column - Tech & Impact */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <ArrowUpRight size={16} className="text-muted-foreground" />
                    <span>{project.impact}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
