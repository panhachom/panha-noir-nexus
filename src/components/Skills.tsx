import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Payment & Fintech',
    skills: ['MPGS', 'ABA Payway', 'WingPay', 'Bank APIs', 'PCI Compliance', 'Transaction Processing'],
  },
  {
    title: 'Backend',
    skills: ['Ruby on Rails', 'REST APIs', 'PostgreSQL', 'Redis', 'Sidekiq', 'Authentication'],
  },
  {
    title: 'Mobile & Frontend',
    skills: ['Flutter', 'Dart', 'LitElement', 'Web Components', 'Responsive Design', 'PWA'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left - Header */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
                Technical Skills
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A comprehensive toolkit for building secure, scalable payment solutions 
                and modern applications.
              </p>
            </ScrollReveal>
          </div>

          {/* Right - Skills Grid */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <ScrollReveal key={category.title} delay={index * 100} direction="right">
                  <div className="group">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <div className="flex-1 h-px bg-border/50 group-hover:bg-border transition-colors" />
                    </div>

                    {/* Skills - Inline tags */}
                    <div className="flex flex-wrap gap-3 pl-8">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-4 py-2 text-sm bg-muted/50 hover:bg-muted rounded-full transition-colors duration-200 cursor-default"
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
