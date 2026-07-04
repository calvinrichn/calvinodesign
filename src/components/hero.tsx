import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Asterisk, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import heroPortrait from "@/assets/calvino.png.asset.json";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <section id="hero" className="relative overflow-hidden bg-bg pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Vertical ghost text — left */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 origin-center hidden md:flex items-center gap-3 font-body text-[0.65rem] font-medium uppercase tracking-[0.4em] text-cream/40"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <Asterisk className="h-3 w-3 text-accent" strokeWidth={2.5} /> Disponível para trabalhos freelance
      </span>
      {/* Vertical ghost text — right */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 origin-center hidden md:flex items-center gap-3 font-body text-[0.65rem] font-medium uppercase tracking-[0.4em] text-cream/40"
        style={{ writingMode: "vertical-rl" }}
      >
        <Asterisk className="h-3 w-3 text-accent" strokeWidth={2.5} /> Criando experiências que marcam
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-14 px-[clamp(20px,4vw,56px)] lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* LEFT */}
        <div className="relative">
          <motion.p {...rise(0.15)} className="mb-6 inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
            <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            Designer Gráfico &amp; UI Designer
          </motion.p>

          <h1 className="font-display leading-[0.86] tracking-[-0.02em]" style={{ fontSize: "clamp(3.4rem, 10vw, 8.5rem)" }}>
            <motion.span {...rise(0.3)} className="block text-cream">CALVINO</motion.span>
            <motion.span {...rise(0.42)} className="block text-accent">COSSA<span className="text-accent">.</span></motion.span>
          </h1>

          <motion.p {...rise(0.55)} className="mt-6 font-display uppercase leading-[1.05] tracking-tight text-cream" style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}>
            Design que comunica. <span className="text-accent">Experiências que conectam.</span>
          </motion.p>

          <motion.p {...rise(0.65)} className="mt-6 max-w-lg font-body text-[0.98rem] leading-[1.7] text-dim">
            Transformo ideias em identidades visuais marcantes e interfaces intuitivas que geram resultados reais e fortalecem marcas.
          </motion.p>

          <motion.div {...rise(0.78)} className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("#projetos")}
              className="group inline-flex items-center gap-3 rounded-full border border-accent bg-accent/10 px-6 py-3.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream transition-all hover:bg-accent hover:scale-[1.02]"
            >
              Ver projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#sobre")}
              className="group inline-flex items-center gap-3 rounded-full border border-cream/25 px-6 py-3.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream transition-all hover:border-cream hover:bg-cream/5"
            >
              Sobre mim <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div {...rise(0.9)} className="mt-10 flex items-center gap-5">
            <span className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-cream/60">Siga-me</span>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: BehanceIcon, href: "https://behance.net", label: "Behance" },
                { icon: MessageCircle, href: "https://wa.me/258841234567", label: "WhatsApp" },
                { icon: Mail, href: "mailto:calvinocossa6@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          {/* Ghost "CALVINO" behind */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display uppercase leading-none text-cream/5"
            style={{ writingMode: "vertical-rl", fontSize: "clamp(6rem, 14vw, 12rem)", letterSpacing: "-0.02em" }}
          >
            CALVINO
          </span>

          {/* Red glow halo */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(60% 55% at 55% 45%, rgba(232,35,29,0.55) 0%, rgba(232,35,29,0.18) 40%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <div className="relative overflow-hidden rounded-[28px]">
            <img
              src={heroPortrait.url}
              alt="Calvino Cossa"
              width={1024}
              height={1280}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Floating location card */}
          <div className="absolute -bottom-6 left-4 md:-bottom-8 md:left-8 flex items-center gap-3 rounded-2xl border border-cream/10 bg-surface/95 px-4 py-3 backdrop-blur-md">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent">
              <MapPin className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <div>
              <p className="font-display text-[0.9rem] uppercase leading-none text-cream">Maputo, Moçambique</p>
              <p className="mt-1 font-body text-[0.65rem] uppercase tracking-[0.2em] text-dim">Freelance · Remoto &amp; Presencial</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BehanceIcon({ className = "", strokeWidth = 1.8 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5h6a3 3 0 0 1 0 6H2z" />
      <path d="M2 11h7a3 3 0 0 1 0 6H2z" />
      <path d="M14 7h6" />
      <path d="M13 14h9a4 4 0 0 0-8 0v1a3 3 0 0 0 6 0" />
    </svg>
  );
}