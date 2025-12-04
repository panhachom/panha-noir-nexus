import { GraduationCap, School } from 'lucide-react';

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
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-headline mt-4">
            Academic journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-foreground rounded-full -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className={`p-6 bg-card border border-border rounded-2xl hover:border-muted-foreground/50 transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''} md:max-w-md`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 bg-foreground/5 rounded-lg">
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-title mb-1">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
