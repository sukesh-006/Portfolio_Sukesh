import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

const Reveal = ({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = window.setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
          return () => window.clearTimeout(timer);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Component
      ref={ref}
      className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </Component>
  );
};

export default Reveal;
