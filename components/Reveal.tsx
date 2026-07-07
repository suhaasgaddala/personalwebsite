"use client";

import { type CSSProperties, type HTMLAttributes, useEffect, useRef, useState } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      className={`reveal${isVisible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`}
      ref={ref}
      style={{ "--reveal-delay": `${delay}s`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
