import { GraduationCap, School, BookOpen, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const education = [
  {
    id: 1,
    icon: GraduationCap,
    degree: 'Bachelor of Computer Science',
    institution: 'Royal University of Phnom Penh',
    period: '2018 - 2022',
    description: 'Focused on software engineering, algorithms, and database systems.',
  },
  {
    id: 2,
    icon: School,
    degree: 'High School Diploma',
    institution: 'Hun Sen Kampong Cham High School',
    period: '2015 - 2018',
    description: 'Science track with focus on mathematics and physics.',
  },
  {
    id: 3,
    icon: BookOpen,
    degree: 'Secondary Education',
    institution: 'Kampong Cham Secondary School',
    period: '2012 - 2015',
    description: 'Foundation in sciences and mathematics with academic excellence.',
  },
  {
    id: 4,
    icon: Award,
    degree: 'Primary Education',
    institution: 'Kampong Cham Primary School',
    period: '2006 - 2012',
    description: 'Early education with strong fundamentals in core subjects.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-28 md:py-36 bg-muted/20">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Education
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
                Academic Journey
              </h2>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground">
              2006 — 2022
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline - Horizontal for desktop, vertical for mobile */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent md:-translate-x-px" />

          {/* Timeline Items */}
          <div className="space-y-0">
            {education.map((item, index) => (
              <ScrollReveal 
                key={item.id} 
                delay={index * 150}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 py-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-foreground rounded-full -translate-x-1/2 mt-1 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`flex-1 ml-14 md:ml-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                    <div className={`${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-md group`}>
                      {/* Period Badge */}
                      <span className="inline-block font-mono text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full mb-4">
                        {item.period}
                      </span>
                      
                      {/* Icon & Title */}
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-2 bg-foreground/5 rounded-lg group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                          <item.icon size={18} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground/70">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
