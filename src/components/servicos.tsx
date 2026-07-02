import { Reveal } from "./reveal";

type Service = {
  n: string;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
};

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const services: Service[] = [
  {
    n: "01",
    title: "Identidade Visual & Branding",
    desc: "Criação de logótipos, paletas de cores, tipografia e guias de estilo que definem e distinguem a sua marca no mercado.",
    tags: ["Logo", "Brand Book", "Naming"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" {...stroke}>
        <circle cx="20" cy="20" r="5" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return <line key={i} x1={20 + Math.cos(a) * 10} y1={20 + Math.sin(a) * 10} x2={20 + Math.cos(a) * 16} y2={20 + Math.sin(a) * 16} />;
        })}
      </svg>
    ),
  },
  {
    n: "02",
    title: "Materiais Publicitários",
    desc: "Design de cartazes, flyers, banners digitais e impressos para campanhas com alto impacto visual e mensagem clara.",
    tags: ["Print", "Digital", "Outdoor"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" {...stroke}>
        <rect x="5" y="5" width="14" height="14" />
        <rect x="21" y="5" width="14" height="9" />
        <rect x="21" y="16" width="14" height="19" />
        <rect x="5" y="21" width="14" height="14" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Design para Redes Sociais",
    desc: "Peças visuais para Instagram, Facebook e LinkedIn com foco em engagement, consistência de marca e conversão.",
    tags: ["Instagram", "Facebook", "Templates"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" {...stroke}>
        <rect x="5" y="7" width="30" height="20" rx="1" />
        <line x1="15" y1="33" x2="25" y2="33" />
        <line x1="20" y1="27" x2="20" y2="33" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Design com IA Generativa",
    desc: "Integração de ferramentas como Midjourney, Adobe Firefly e Leonardo AI no processo criativo para resultados mais rápidos e inovadores.",
    tags: ["Midjourney", "Firefly", "DALL·E"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" {...stroke}>
        <polygon points="20,5 35,13 20,21 5,13" />
        <polyline points="5,20 20,28 35,20" />
        <polyline points="5,27 20,35 35,27" />
      </svg>
    ),
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <div className="flex items-baseline justify-between">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/60">[ serviços ]</p>
          </Reveal>
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">/04</span>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <h2
            className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-cream"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
          >
            SERVIÇOS QUE <span className="text-accent">CONSTROEM</span> MARCAS
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="group relative overflow-hidden rounded-[28px] bg-cream p-8 text-bg transition-colors duration-300 hover:bg-accent hover:text-cream">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] opacity-60">[ {s.n} ]</p>
                  <h3 className="mt-4 font-display uppercase leading-[0.95] tracking-[-0.01em]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{s.title}</h3>
                </div>
                <span className="opacity-70">{s.icon}</span>
              </div>
              <p className="mt-6 max-w-md font-body text-[0.92rem] leading-[1.6] opacity-80">{s.desc}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-current px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] opacity-75">
                    {t}
                  </span>
                ))}
              </div>
              <span className="pointer-events-none absolute right-6 bottom-6 grid h-10 w-10 place-items-center rounded-full border border-current text-lg opacity-60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">↗</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}