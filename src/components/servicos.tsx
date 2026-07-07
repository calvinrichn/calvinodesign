import { Reveal } from "./reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Box,
  FileText,
  Hexagon,
  LayoutGrid,
  Smartphone,
} from "lucide-react";

const services = [
  {
    n: "01",
    icon: Hexagon,
    title: "Identidade Visual",
    desc: "Criação de logótipos, paletas de cores, tipografia e elementos que constroem marcas fortes e memoráveis.",
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "Design de Mídias Sociais",
    desc: "Artes criativas e estratégicas para posts, stories e campanhas que atraem, engajam e convertem.",
  },
  {
    n: "03",
    icon: FileText,
    title: "Design para Impressos",
    desc: "Cartazes, flyers, banners, cartões e materiais gráficos que comunicam com clareza e impacto.",
  },
  {
    n: "04",
    icon: Smartphone,
    title: "UI Design (Interfaces)",
    desc: "Interfaces modernas, intuitivas e funcionais que proporcionam a melhor experiência para o usuário.",
  },
  {
    n: "05",
    icon: Box,
    title: "Apresentações Profissionais",
    desc: "Apresentações impactantes que transmitem credibilidade e valorizam suas ideias e projetos.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-bg py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,4vw,56px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
                Serviços <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display uppercase leading-[0.92] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
                <span className="block text-cream">Soluções de design</span>
                <span className="block text-cream">que fortalecem <span className="text-accent">marcas.</span></span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#galeria" onClick={(e) => { e.preventDefault(); document.querySelector("#galeria")?.scrollIntoView({ behavior: "smooth" }); }} className="group inline-flex items-center gap-3 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream">
              Ver todos
              <span className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 transition-all group-hover:border-accent group-hover:bg-accent">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.05}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-cream/8 bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-8px_rgba(232,35,29,0.4)]"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-dim">{s.n}</span>
                </div>
                <h3 className="mt-8 font-display uppercase text-[1.05rem] leading-[1.1] tracking-tight text-cream">{s.title}</h3>
                <p className="mt-3 font-body text-[0.85rem] leading-[1.55] text-dim">{s.desc}</p>
              </div>
              <span className="mt-8 grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream transition-all group-hover:border-accent group-hover:bg-accent group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}