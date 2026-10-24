import {
  AlertCircle,
  Bus,
  Check,
  CreditCard,
  LayoutDashboard,
  Leaf,
  Lightbulb,
  RefreshCw,
  Smartphone,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import {
  workHighlights,
  type WorkHighlightIcon,
  type WorkHighlightItem,
} from '@/data/workHighlights';

const icons: Record<WorkHighlightIcon, LucideIcon> = {
  bus: Bus,
  sync: RefreshCw,
  payments: CreditCard,
  mobile: Smartphone,
  dashboard: LayoutDashboard,
  wallet: Wallet,
  ml: Leaf,
};

const TechList = ({ tech }: { tech: string[] }) => (
  <ul className="flex flex-wrap gap-2 mt-2" aria-label="Technologies">
    {tech.map((name) => (
      <li
        key={name}
        className="px-2.5 py-1 text-xs font-mono bg-foreground/5 text-foreground/80 rounded border border-border/50"
      >
        {name}
      </li>
    ))}
  </ul>
);

const Item = ({ name, detail, problem, approach }: WorkHighlightItem) => (
  <li className="py-4 first:pt-0 last:pb-0">
    <h5 className="flex items-center gap-2 text-sm font-medium">
      <Check size={14} strokeWidth={2} className="text-brand shrink-0" aria-hidden="true" />
      {name}
    </h5>
    <p className="text-sm text-muted-foreground leading-relaxed mt-1 ml-[22px] max-w-prose">
      {detail}
    </p>
    {problem && approach && (
      <dl className="mt-3 ml-[22px] pl-4 border-l border-border space-y-3 text-sm max-w-prose">
        <div>
          <dt className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground uppercase tracking-widest">
            <AlertCircle size={12} className="text-brand" aria-hidden="true" />
            Problem
          </dt>
          <dd className="text-muted-foreground leading-relaxed mt-1">{problem}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground uppercase tracking-widest">
            <Lightbulb size={12} className="text-brand" aria-hidden="true" />
            Approach
          </dt>
          <dd className="text-muted-foreground leading-relaxed mt-1">{approach}</dd>
        </div>
      </dl>
    )}
  </li>
);

const WorkHighlights = () => (
  <ol>
    {workHighlights.map((highlight, index) => {
      const Icon = icons[highlight.icon];

      return (
        <li key={highlight.id} className="border-b border-border first:border-t-0">
          <ScrollReveal
            delay={100}
            className="motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
          >
            <article
              aria-labelledby={`${highlight.id}-title`}
              className="grid md:grid-cols-12 gap-x-10 gap-y-6 py-10"
            >
              <div className="group md:col-span-5">
                <div className="flex items-center gap-3">
                  <div className="glass-icon p-2.5">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4
                  id={`${highlight.id}-title`}
                  className="text-xl font-semibold tracking-tight mt-4"
                >
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground mt-3 max-w-prose">
                  {highlight.summary}
                </p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-5">
                  Built with
                </p>
                <TechList tech={highlight.tech} />
              </div>
              <div className="md:col-span-7">
                <p className="font-mono text-xs text-brand uppercase tracking-widest mb-4">
                  Features
                </p>
                <ul className="divide-y divide-border/60">
                  {highlight.items.map((item) => (
                    <Item key={item.name} {...item} />
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        </li>
      );
    })}
  </ol>
);

export default WorkHighlights;
