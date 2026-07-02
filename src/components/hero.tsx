import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 125]);

  const ease = [0.16, 1, 0.3, 1] as const;
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg pb-[60px]">
      {/* Watermark */}
      <motion.div
        style={{ y: reduced ? 0 : y }}
        className="pointer-events-none absolute right-[-2vw] top-1/2 hidden -translate-y-1/2 select-none sm:block"
        aria-hidden
      >
        <span
          className="block font-display font-extrabold uppercase"
          style={{
            transform: "rotate(90deg)",
            fontSize: "clamp(100px, 18vw, 200px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(242,240,235,0.04)",
            letterSpacing: "-0.03em",
          }}
        >
          CALVINO
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(24px,5vw,80px)]">
        <motion.p {...rise(0.2)} className="mb-8 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">
          Designer Gráfico · Maputo, Moçambique
        </motion.p>

        <h1 className="font-display font-extrabold leading-[0.92] tracking-[-0.03em]" style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
          <motion.span {...rise(0.4)} className="block text-ink">
            CALVINO
          </motion.span>
          <motion.span {...rise(0.55)} className="block text-accent">
            COSSA.
          </motion.span>
        </h1>

        <motion.div
          {...rise(0.8)}
          className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-line pt-8 md:flex-row md:items-end"
        >
          <p className="max-w-md font-body text-[0.95rem] font-light leading-[1.7] text-dim">
            Criatividade com domínio técnico. Design que comunica, converte e deixa marca — de identidades visuais a peças digitais de impacto.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
              className="rounded-[4px] bg-accent px-6 py-3 font-display text-sm font-bold text-bg transition-opacity hover:opacity-85"
            >
              Ver trabalhos →
            </a>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="rounded-[4px] border border-line2 px-6 py-3 font-display text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...rise(1.1)}
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-dim">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-line2">
          <motion.span
            className="absolute inset-x-0 top-0 block h-4 bg-accent"
            animate={reduced ? undefined : { y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}