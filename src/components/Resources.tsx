import { Book, Code, Youtube, Mic, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const resources = [
  {
    id: 1,
    icon: Book,
    title: 'Clean Code by Robert C. Martin',
    description: 'A foundational book on writing readable, maintainable, and scalable software. It has profoundly influenced my approach to code quality.',
    link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    category: 'Book',
  },
  {
    id: 2,
    icon: Code,
    title: 'Refactoring.Guru',
    description: 'An excellent online resource for learning about design patterns and refactoring techniques with clear examples and explanations.',
    link: 'https://refactoring.guru/',
    category: 'Website',
  },
  {
    id: 3,
    icon: Youtube,
    title: 'Fireship.io',
    description: 'High-intensity code tutorials and tech news that are both entertaining and incredibly informative. Great for staying current.',
    link: 'https://www.youtube.com/c/Fireship',
    category: 'YouTube',
  },
  {
    id: 4,
    icon: Mic,
    title: 'Syntax.fm Podcast',
    description: 'A fun and engaging podcast by Wes Bos and Scott Tolinski that covers a wide range of web development topics.',
    link: 'https://syntax.fm/',
    category: 'Podcast',
  },
  {
    id: 5,
    icon: Code,
    title: 'Awwwards',
    description: 'A great source of inspiration for UI/UX design, showcasing some of the most creative and innovative websites on the internet.',
    link: 'https://www.awwwards.com/',
    category: 'Inspiration',
  },
  {
    id: 6,
    icon: Book,
    title: 'Designing Data-Intensive Applications',
    description: 'A deep dive into the architecture of modern data systems, essential for anyone building complex backend services.',
    link: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    category: 'Book',
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-28 md:py-36">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-20 text-center mx-auto">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
              Knowledge & Inspiration
            </h2>
            <p className="text-muted-foreground text-lg">
              A curated collection of books, articles, and tools that have shaped my development journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ScrollReveal key={resource.id} delay={index * 100}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <div className="h-full p-8 bg-muted/20 border border-border/50 rounded-xl hover:border-border hover:shadow-soft transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-foreground/5 rounded-lg">
                      <resource.icon size={22} strokeWidth={1.5} className="text-muted-foreground" />
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="px-3 py-1 text-xs font-mono bg-foreground/5 text-foreground/80 rounded-full border border-border/50">
                      {resource.category}
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
