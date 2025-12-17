import { Bus, Ticket, Calendar, Shield, CreditCard, Wallet, Smartphone, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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

const featuredWork = [
  {
    id: 1,
    icon: CreditCard,
    title: 'ABA Bank Pre-authorization',
    summary: 'Implemented a hold-and-capture payment flow for advance bookings.',
    problem: 'The platform needed a way to reserve funds on a customer\'s card without immediate capture to accommodate flexible cancellation policies.',
    solution: 'Leveraged the ABA Bank API to implement a pre-authorization mechanism. This allowed for placing a temporary hold on funds for up to seven days, with the flexibility to either capture the payment or void the transaction.',
    result: 'Significantly reduced chargeback incidents and streamlined the refund process, improving customer satisfaction.',
    technologies: ['ABA API', 'Ruby on Rails', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Vattanac Bank Payment Gateway',
    summary: 'Engineered a secure payment gateway for Vattanac Bank.',
    problem: 'The business required a direct integration with a local bank to process card payments and support the bank\'s proprietary "iPay" system.',
    solution: 'Developed a custom gateway connector that integrated Vattanac Bank\'s API, complete with 3D Secure authentication for enhanced security.',
    result: 'Successfully enabled local card payments, achieving a near-perfect transaction success rate and expanding payment options for customers.',
    technologies: ['Vattanac API', 'Ruby on Rails', '3DS'],
  },
  {
    id: 3,
    icon: CreditCard,
    title: 'TrueMoney E-wallet Gateway',
    summary: 'Integrated the TrueMoney e-wallet to provide a new payment method.',
    problem: 'A growing segment of users preferred to pay using their TrueMoney wallet balance instead of traditional cards.',
    solution: 'Integrated the TrueMoney payment API, enabling seamless transactions through both QR code generation and mobile deeplinking.',
    result: 'The new payment option was quickly adopted by a significant portion of customers, diversifying payment methods and improving conversion rates.',
    technologies: ['TrueMoney API', 'Ruby on Rails', 'QR Generation'],
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Vattanac Bank App: BookMe+ Integration',
    summary: 'Integrated the BookMe+ platform into the Vattanac mobile banking app.',
    problem: 'The bank aimed to transform its application into a "super app" by offering integrated lifestyle and travel services.',
    solution: 'Delivered the BookMe+ booking portal as a web-based mini-app, loaded via an initial URL, which provided seamless authentication and payment processing through the bank\'s internal APIs.',
    result: 'The service was successfully rolled out to a vast user base, offering a native-like experience within their trusted banking app.',
    technologies: ['Flutter', 'Webview', 'Bank APIs'],
  },
  {
    id: 5,
    icon: Smartphone,
    title: 'TrueMoney Wallet: BookMeBus Integration',
    summary: 'Embedded the BookMeBus ticket booking platform inside the TrueMoney wallet app.',
    problem: 'TrueMoney sought to expand its service offerings beyond payments to increase user engagement and retention.',
    solution: 'Developed a mini-app that loaded the BookMeBus web-based booking experience via a URL, featuring a deeply integrated checkout flow that utilized the user\'s wallet balance.',
    result: 'Enabled a frictionless, one-tap booking process for all TrueMoney users, simplifying the customer journey.',
    technologies: ['Flutter', 'Webview', 'REST APIs'],
  },
  {
    id: 6,
    icon: Smartphone,
    title: 'SmartNas App: BookMeBus Integration',
    summary: 'Introduced BookMeBus travel booking services to the SmartNas super app.',
    problem: 'The SmartNas platform needed to add a travel vertical to broaden its ecosystem and provide more value to users.',
    solution: 'Delivered a white-labeled BookMeBus web-based booking experience with custom branding, which was integrated into the super app via a URL.',
    result: 'Expanded the reach of the booking platform to a new and diverse user segment, driving growth and brand visibility.',
    technologies: ['Flutter', 'Webview', 'REST APIs'],
  },
  {
    id: 7,
    icon: Wallet,
    title: 'Google Wallet Integration',
    summary: 'Automated the delivery of digital passes to Google Wallet.',
    problem: 'Customers were burdened with managing physical tickets or paper confirmations, leading to a disjointed user experience.',
    solution: 'Integrated the Google Wallet API to automatically generate and deliver secure digital passes upon booking confirmation.',
    result: 'Streamlined the post-booking experience by providing users with instant and convenient access to their tickets on their mobile devices.',
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
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group py-6 border-b border-border/50 hover:border-foreground/20 transition-colors duration-300 cursor-pointer"
                >
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

        {/* Featured Work Section */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs text-muted-foreground">02</span>
              <h3 className="text-xl font-semibold">My Work</h3>
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
                    <div className="lg:col-span-2 flex flex-wrap lg:flex-col gap-2">
                      {project.technologies.map((tech, idx) => (
                        <div key={tech} className="flex items-center gap-2 lg:justify-end">
                          <span className="px-2.5 py-1 text-xs font-mono bg-foreground/5 text-foreground/80 rounded border border-border/50 hover:border-foreground/30 hover:bg-foreground/10 transition-colors duration-200">
                            {tech}
                          </span>
                          {idx < project.technologies.length - 1 && (
                            <span className="text-muted-foreground/20 lg:hidden">|</span>
                          )}
                        </div>
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
