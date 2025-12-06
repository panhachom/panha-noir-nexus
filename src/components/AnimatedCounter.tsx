import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = end * easeOutQuart;
      
      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, decimals, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
