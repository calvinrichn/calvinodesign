import { Reveal } from "./reveal";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tag: string;
  year: string;
  gradient: string;
  glyph: string;
};

const projects: Project[] = [
  {
    title: "ShopVendas",
    desc: "Plataforma de marketplace completa para compras e vendas online.",
    tag: "UI Design",
    year: "2025",
    gradient: "linear-gradient(135deg, #2a0709 0%, #7a1013 50%, #0a0a0a 100%)",
    glyph: "SV",
  },
  {
    title: "Igreja IMJA",
    desc: "Identidade visual completa e materiais de comunicação para a igreja.",
    tag: "Branding",
    year: "2025",
    gradient: "linear-gradient(160deg, #1a1a1a 0%, #3a1414 60%, #0a0a0a 100%)",
    glyph: "IMJA",
  },
  {
    title: "StreamPro",
    desc: "Aplicativo de transmissão ao vivo com interface moderna e experiência intuitiva.",
    tag: "UI/UX Design",
    year: "2025",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #4a0f12 100%)",
    glyph: "STREAM",
  },
  {
    title: "Krossa Design",
    desc: "Identidade visual e materiais gráficos para marca de produtos premium.",
    tag: "Branding",
    year: "2024",
    gradient: "linear-gradient(200deg, #2a1a0a 0%, #5a2a15 50%, #0a0a0a 100%)",
    glyph: "KRS",
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="bg-bg py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
                Projetos <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display uppercase leading-[0.92] tracking-[-0.02em] text-cream" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
                Trabalhos em destaque
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Reveal delay={0.1}>
              <p className="max-w-xs font-body text-[0.9rem] leading-[1.55] text-dim md:text-right">
                Alguns projetos que desenvolvi e que representam minha jornada e habilidades.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }} className="group inline-flex items-center gap-3 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream">
                Ver todos projetos
                <span className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 transition-all group-hover:border-accent group-hover:bg-accent">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="group relative overflow-hidden rounded-[24px] border border-cream/8 bg-surface transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-8px_rgba(232,35,29,0.4)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ background: p.gradient }}>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display uppercase text-cream/25 tracking-tighter" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                    {p.glyph}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display uppercase text-[1.05rem] leading-tight tracking-tight text-cream">{p.title}</h3>
                <p className="mt-2 font-body text-[0.82rem] leading-[1.5] text-dim">{p.desc}</p>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">{p.tag}</span>
                    <span className="ml-3 font-body text-[0.62rem] font-medium uppercase tracking-[0.22em] text-dim">{p.year}</span>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream transition-all group-hover:border-accent group-hover:bg-accent group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}