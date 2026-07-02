import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./reveal";

type Item = {
  id: number;
  title: string;
  category: string;
  description: string;
  featured: boolean;
  year: string;
};

const items: Item[] = [
  { id: 1, title: "Identidade Visual — Restaurante Local", category: "Branding", description: "Criação de identidade completa para restaurante em Maputo", featured: true, year: "2025" },
  { id: 2, title: "Social Media Kit — Moda", category: "Redes Sociais", description: "Kit de posts e stories para marca de moda", featured: false, year: "2025" },
  { id: 3, title: "Flyer Evento Cultural", category: "Print", description: "Flyer para evento cultural em Moçambique", featured: false, year: "2025" },
  { id: 4, title: "Identidade — Clínica Médica", category: "Branding", description: "Logo e aplicações para clínica de saúde", featured: false, year: "2025" },
  { id: 5, title: "Banner Campanha Imobiliária", category: "Digital", description: "Banners digitais para campanha imobiliária", featured: false, year: "2025" },
  { id: 6, title: "Template Pack — Beleza", category: "Redes Sociais", description: "Templates para negócio de beleza", featured: false, year: "2025" },
];

const filters = ["Todos", "Branding", "Redes Sociais", "Print", "Digital"];

export function Portfolio() {
  const [active, setActive] = useState("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <div className="flex items-baseline justify-between">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/60">[ trabalhos seleccionados ]</p>
          </Reveal>
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">/06</span>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-cream" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}>
            A ARTE DE <span className="text-accent">MATERIALIZAR</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors ${
                active === f
                  ? "border-cream bg-cream text-bg"
                  : "border-cream/20 text-cream/60 hover:text-cream hover:border-cream/50"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[24px] bg-cream text-bg ${
                  item.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display uppercase"
                      style={{
                        fontSize: "clamp(6rem, 14vw, 14rem)",
                        color: "rgba(28,5,7,0.25)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-bg">
                    [ {item.category} ]
                  </span>
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-bg text-cream opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-display uppercase text-lg leading-[1] tracking-tight">{item.title}</h3>
                    <p className="mt-1 font-body text-xs opacity-60">{item.description}</p>
                  </div>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.15em] opacity-60">{item.year}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}