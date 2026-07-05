import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Asterisk, Maximize2, X } from "lucide-react";

const img1 = { url: "/assets/galeria/0000000045f8.png" };
const img2 = { url: "/assets/galeria/0000000067cc.png" };
const img3 = { url: "/assets/galeria/00000000db60.png" };
const img4 = { url: "/assets/galeria/0000000041c8.png" };
const img5 = { url: "/assets/galeria/00000000dff0.png" };
const img6 = { url: "/assets/galeria/0000000098e4.png" };
const img7 = { url: "/assets/galeria/000000003960.png" };
const img8 = { url: "/assets/galeria/000000005f78.png" };
const img9 = { url: "/assets/galeria/00000000877c.png" };

type Cat = "identidade" | "social" | "impressos" | "ui" | "apresentacoes";

type Item = {
  src: string;
  title: string;
  cats: Cat[];
  desc: string;
  priority: number;
  aspect: number; // height/width for masonry sizing
};

const CAT_LABEL: Record<Cat, string> = {
  identidade: "Identidade Visual",
  social: "Mídias Sociais",
  impressos: "Impressos",
  ui: "UI Design",
  apresentacoes: "Apresentações",
};

const items: Item[] = [
  { src: img6.url, title: "Social Media Kit — Calvino Store", cats: ["social", "identidade"], desc: "Kit de posts para redes sociais com foco em phones, acessórios e gaming.", priority: 10, aspect: 1.5 },
  { src: img3.url, title: "Apple Lineup — Combo Roxo", cats: ["social"], desc: "Série de 4 posts promocionais para linha Apple com identidade cromática consistente.", priority: 9, aspect: 1 },
  { src: img1.url, title: "O Combo Perfeito Existe", cats: ["social"], desc: "Post promocional iPhone + Apple Watch + AirPods, tema verde premium.", priority: 9, aspect: 1.25 },
  { src: img7.url, title: "A.Pods Pro 2 — Som Puro", cats: ["social"], desc: "Design tipográfico impactante para lançamento de AirPods Pro 2.", priority: 8, aspect: 1.25 },
  { src: img5.url, title: "JBL 220 TWS — Space Imports", cats: ["social", "identidade"], desc: "Post promocional para fone bluetooth JBL, paleta laranja/preto.", priority: 8, aspect: 1.25 },
  { src: img4.url, title: "AirDots Pro — Som Que Te Move", cats: ["social"], desc: "Design premium com tipografia gigante e neon azul para AirDots Pro.", priority: 8, aspect: 1.25 },
  { src: img2.url, title: "iPhone 16 — Tecnologia. Desempenho.", cats: ["social"], desc: "Post individual para lançamento do iPhone 16 com destaque de preço.", priority: 7, aspect: 1.25 },
  { src: img9.url, title: "Felix Burguer — Pediu? Chegou!", cats: ["social", "impressos"], desc: "Post e flyer para hamburgueria com composição fotográfica vibrante.", priority: 7, aspect: 1.25 },
  { src: img8.url, title: "Comida Deliciosa — Calvino Sabores", cats: ["impressos"], desc: "Flyer promocional de delivery com selo de desconto e composição editorial.", priority: 6, aspect: 1.5 },
];

const FILTERS: { key: "todos" | Cat; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "identidade", label: "Identidade Visual" },
  { key: "social", label: "Mídias Sociais" },
  { key: "impressos", label: "Impressos" },
  { key: "ui", label: "UI Design" },
  { key: "apresentacoes", label: "Apresentações" },
];

export function Galeria() {
  const [filter, setFilter] = useState<"todos" | Cat>("todos");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = useMemo(() => {
    const list = filter === "todos" ? items : items.filter((i) => i.cats.includes(filter));
    return [...list].sort((a, b) => b.priority - a.priority);
  }, [filter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galeria" className="bg-bg py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
              Portfólio completo <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            </p>
            <h2 className="mt-4 font-display uppercase leading-[0.92] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}>
              <span className="text-cream">Galeria de</span> <span className="text-accent">trabalhos.</span>
            </h2>
          </div>
          <p className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream/60">
            <span className="text-accent">{filtered.length}</span> projetos em destaque
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const on = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-4 py-2 font-body text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition-all ${
                  on
                    ? "border-accent bg-accent text-cream"
                    : "border-cream/15 text-cream/70 hover:border-cream/40 hover:text-cream"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Masonry */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.button
                key={it.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightbox(it)}
                className="group mb-5 block w-full overflow-hidden rounded-2xl border border-cream/8 bg-surface text-left break-inside-avoid shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all hover:border-accent/50 hover:shadow-[0_20px_40px_-15px_rgba(232,35,29,0.35)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex translate-y-4 flex-col justify-end gap-2 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cream">
                      {CAT_LABEL[it.cats[0]]}
                    </span>
                    <div className="flex items-end justify-between gap-3">
                      <p className="font-display text-[1.05rem] uppercase leading-tight text-cream">{it.title}</p>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-cream">
                        <Maximize2 className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center gap-4 rounded-full border border-cream/15 bg-surface px-7 py-4 font-body text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-cream transition-all hover:border-accent hover:bg-accent/10"
          >
            Gostou do que viu?
            <Asterisk className="h-4 w-4 text-accent" strokeWidth={2.5} />
            <span>Vamos conversar</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-cream transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-cream/10 bg-surface md:flex-row"
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-bg/80 text-cream backdrop-blur hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex-1 overflow-auto bg-black/60">
                <img src={lightbox.src} alt={lightbox.title} className="mx-auto max-h-[92vh] w-auto object-contain" />
              </div>
              <div className="w-full shrink-0 border-t border-cream/10 p-6 md:w-[320px] md:border-l md:border-t-0">
                <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cream">
                  {CAT_LABEL[lightbox.cats[0]]}
                </span>
                <h3 className="mt-4 font-display text-[1.35rem] uppercase leading-tight text-cream">{lightbox.title}</h3>
                <p className="mt-3 font-body text-[0.9rem] leading-[1.6] text-dim">{lightbox.desc}</p>
                {lightbox.cats.length > 1 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {lightbox.cats.slice(1).map((c) => (
                      <span key={c} className="rounded-full border border-cream/15 px-2.5 py-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cream/70">
                        {CAT_LABEL[c]}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}