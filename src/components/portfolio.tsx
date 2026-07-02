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
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">Trabalhos seleccionados</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                Portfólio
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-[3px] border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors ${
                  active === f
                    ? "border-accent bg-accent text-bg"
                    : "border-line2 text-dim hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-[2px] bg-line md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-surface2 ${
                  item.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display font-extrabold"
                      style={{
                        fontSize: "clamp(6rem, 14vw, 14rem)",
                        color: "rgba(242,240,235,0.06)",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/85 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 font-body text-sm text-dim">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-surface px-5 py-4">
                  <span className="font-display text-sm font-bold text-ink">{item.title}</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-dim">
                    {item.category} · {item.year}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}