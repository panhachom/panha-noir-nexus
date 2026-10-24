import { Bus, Ticket, Calendar, Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import WorkHighlights from './WorkHighlights';

const involvedProjects = [
  {
    id: 1,
    icon: Bus,
    name: 'BookMeBus',
    description: 'Cambodia\'s leading bus ticketing platform connecting travelers with major bus operators nationwide.',
    role: 'Full Stack Developer',
    technologies: ['Ruby on Rails', 'MYSQL', 'Sidekiq', 'RSpec', 'Redis', 'Devise', 'JWT' ],
    link: 'https://bookmebus.com',
  },
  {
    id: 2,
    icon: Ticket,
    name: 'BookMe+',
    description: 'Multi-service booking platform for events, attractions, and experiences across Cambodia.',
    role: 'Full Stack Developer',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'APIs', 'RSpec', 'Redis', 'Flutter', 'Dart','Material Design'],
    link: 'https://www.bookme.plus',
  },
  {
    id: 3,
    icon: Calendar,
    name: 'EventOrganizer Portal',
    description: 'Admin dashboard for event organizers to manage tickets, attendees, and analytics.',
    role: 'Fullstack Developer',
    technologies: [
      'Ruby on Rails',
      'Bootstrap',
      'LitElement',
      'Stimulus JS',
      'Tailwind CSS',
      'DaisyUI'
    ],
    link: 'https://business.bookme.plus/sign_in',
  },

  {
    id: 4,
    icon: Calendar,
    name: 'VTENH',
    description: 'Implemented flash sale and wishlist features to improve user engagement and conversion.',
    role: 'Frontend Developer',
    technologies: [
      'Ruby on Rails',
      'Bootstrap',
      'JQuery',
    
    ],
    link: 'https://www.vtenh.com',
  },
  {
    id: 5,
    icon: Shield,
    name: 'GreenGuard App',
    description: 'Mobile application for detecting diseases on rice leaves with Machine Learning.',
    role: 'Full Stack Developer',
    technologies: ['Flutter', 'Dart', 'Python', 'Laravel', 'Flask API', 'PyTorch'],
    link: 'https://drive.google.com/file/d/1g0WK_hm5qO78-CqDeR12FKwg3uSMzMNj/view',
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
              Key systems I've built, and the products they power.
            </p>
          </div>
        </ScrollReveal>

        {/* Work Highlights Section */}
        <div id="work-highlights" className="mb-24 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs text-muted-foreground">01</span>
              <h3 className="text-xl font-semibold">Selected Work</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          <div className="-mt-4 mb-10 max-w-2xl">
            <p className="text-muted-foreground">
              Key systems, the problems behind them, and the stack used.
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-3">
              Role: Full Stack Developer · BookMe+ and BookMeBus
            </p>
          </div>

          <WorkHighlights />
        </div>

        {/* Projects Involved Section */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs text-muted-foreground">02</span>
              <h3 className="text-xl font-semibold">Projects Involved</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>
          
          {/* Minimal grid layout */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {involvedProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group py-6 border-b border-border/50 hover:border-foreground/20 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="glass-icon p-2.5 mt-0.5">
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
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4">
                        {project.technologies.map((tech, idx) => (
                          <div key={tech} className="flex items-center gap-3">
                            <span className="px-2.5 py-1 text-xs font-mono bg-foreground/5 text-foreground/80 rounded border border-border/50 hover:border-foreground/30 hover:bg-foreground/10 transition-colors duration-200">
                              {tech}
                            </span>
                            {idx < project.technologies.length - 1 && (
                              <span className="text-muted-foreground/30">•</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
