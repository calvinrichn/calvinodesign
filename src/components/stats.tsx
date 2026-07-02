import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const items = [
  { value: 2025, suffix: "", label: "Em actividade desde", raw: "2025" },
  { value: 10, suffix: "+", label: "Projectos realizados", raw: "10+" },
  { value: 5, suffix: "+", label: "Ferramentas de IA", raw: "5+" },
  { value: 3, suffix: "", label: "Idiomas", raw: "3" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-[clamp(24px,5vw,80px)] pb-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-line2/60 md:grid-cols-4">
          {items.map((s) => (
            <div key={s.label} className="bg-surface p-8">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-cream/50">[ {s.label} ]</p>
              <div className="mt-4 font-display uppercase leading-none text-cream" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}