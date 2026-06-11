import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "clip" | "lines";
  as?: keyof React.JSX.IntrinsicElements;
  style?: CSSProperties;
}

export function Reveal({ children, className = "", delay = 0, variant = "fade", as: As = "div", style }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setInView(true), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const cls = variant === "clip" ? "reveal-clip" : variant === "lines" ? "line-reveal" : "reveal";
  const Tag = As as any;
  return (
    <Tag ref={ref as any} className={`${cls} ${inView ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
