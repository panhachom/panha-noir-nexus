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
  {
    title: 'DevOps & Tools',
    skills: ['AWS', 'Heroku', 'Docker', 'CI/CD', 'Postman', 'Git'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-headline mt-4">
            Technical skills
          </h2>
          <p className="text-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building secure, scalable payment solutions 
            and modern applications.
          </p>
        </div>

        {/* Skills Grid - Mobile: Single column, Desktop: 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 lg:p-8 bg-background border border-border rounded-2xl hover:shadow-card-hover transition-all duration-300"
            >
              {/* Category Number & Title */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="text-title">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-sm font-medium rounded-full border border-transparent hover:border-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Marquee - Tech Stack */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mx-8">
                {['Flutter', 'Ruby on Rails', 'AWS', 'Docker', 'PostgreSQL', 'REST APIs', 'Payment Gateways', 'LitElement'].map((tech) => (
                  <span
                    key={tech}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground/20 tracking-tight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
