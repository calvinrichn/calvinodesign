import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  const ease = [0.16, 1, 0.3, 1] as const;
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-bg pt-28 pb-16">
      {/* Marquee watermark */}
      <motion.div
        style={{ y: reduced ? 0 : y }}
        aria-hidden
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-4 select-none"
      >
        {["CALVINO COSSA DESIGN", "BRANDING · ADS · SOCIAL", "MAPUTO — MOÇAMBIQUE"].map((t, i) => (
          <span
            key={i}
            className="block whitespace-nowrap font-display uppercase leading-[0.9]"
            style={{
              fontSize: "clamp(80px, 14vw, 220px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(241,237,228,0.06)",
              letterSpacing: "-0.01em",
              transform: i % 2 ? "translateX(-4vw)" : "translateX(2vw)",
            }}
          >
            {t} · {t}
          </span>
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(24px,5vw,80px)]">
        <motion.p {...rise(0.2)} className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/60">
          [ designer gráfico — desde 2020 ]
        </motion.p>

        <h1
          className="font-display uppercase leading-[0.86] tracking-[-0.01em] text-cream"
          style={{ fontSize: "clamp(3.2rem, 11vw, 10rem)" }}
        >
          <motion.span {...rise(0.35)} className="block">
            DIRECÇÃO CRIATIVA
          </motion.span>
          <motion.span {...rise(0.5)} className="block">
            PARA <span className="text-accent">MARCAS</span>
          </motion.span>
          <motion.span {...rise(0.65)} className="block">
            QUE <span className="italic font-body font-light lowercase tracking-normal">deixam</span> MARCA.
          </motion.span>
        </h1>

        <motion.div
          {...rise(0.9)}
          className="mt-14 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"
        >
          <p className="max-w-md font-body text-[0.95rem] leading-[1.65] text-cream/70">
            Estúdio independente de Calvino Cossa, baseado em Maputo. Identidade visual, publicidade e conteúdo digital construídos com intenção — do conceito à peça final.
          </p>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative grid h-32 w-32 shrink-0 place-items-center rounded-full bg-cream text-bg transition-transform hover:scale-105"
          >
            <span className="text-center font-display uppercase leading-[0.95] text-[0.85rem] tracking-wide">
              Start a<br/>Project
            </span>
            <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-accent text-cream">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}