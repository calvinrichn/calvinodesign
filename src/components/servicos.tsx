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
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">O que faço</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Serviços
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl font-body text-[0.95rem] font-light leading-[1.7] text-dim">
            Um conjunto focado de disciplinas — do conceito à peça final — para construir e comunicar a sua marca com consistência.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-[2px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="group relative overflow-hidden bg-surface p-10 transition-colors duration-300 hover:bg-surface2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.15em] text-accent">{s.n}</span>
                <span className="text-ink/70">{s.icon}</span>
              </div>
              <h3 className="mt-8 font-display text-[1.15rem] font-bold tracking-[-0.01em] text-ink">{s.title}</h3>
              <p className="mt-3 font-body text-[0.9rem] font-light leading-[1.65] text-dim">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-[3px] border border-line bg-bg px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-dim">
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}