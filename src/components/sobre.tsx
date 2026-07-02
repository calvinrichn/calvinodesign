import { Reveal } from "./reveal";

const rows = [
  ["Localização", "Maputo, Moçambique"],
  ["Modalidade", "Freelance · Remoto"],
  ["Email", "calvinocossa6@gmail.com"],
  ["Disponibilidade", "Aberto a novos projectos"],
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <div className="flex items-baseline justify-between">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/60">[ sobre ]</p>
          </Reveal>
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">/01</span>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <h2
            className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-cream"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
          >
            DIRECÇÃO CRIATIVA <span className="text-accent">PARA A NOVA</span> GERAÇÃO DE MARCAS
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-accent">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display uppercase text-cream/20" style={{ fontSize: "clamp(6rem, 16vw, 12rem)" }}>CC</span>
              </div>
              <span className="absolute left-5 top-5 rounded-full bg-cream px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-bg">
                [ perfil ]
              </span>
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-bg px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-cream">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Disponível
              </span>
            </div>
          </Reveal>

          <div>
            <div className="space-y-5 font-body text-[1rem] leading-[1.65] text-cream/75">
              <Reveal delay={0.1} as="p">
                Sou Calvino Cossa — designer gráfico baseado em Maputo. Trabalho com marcas locais e internacionais em identidade visual, publicidade e conteúdo digital com impacto real.
              </Reveal>
              <Reveal delay={0.15} as="p">
                Combino processo autodidata e domínio técnico das ferramentas da indústria com IA generativa (Midjourney, Firefly, Leonardo) para acelerar resultados sem perder personalidade.
              </Reveal>
              <Reveal delay={0.2} as="p">
                Detalhe, prazos e satisfação do cliente — nesta ordem.
              </Reveal>
            </div>

            <Reveal delay={0.25} className="mt-10">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] bg-line2/60">
                {rows.map(([k, v]) => (
                  <div key={k} className="bg-bg p-5">
                    <dt className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-cream/50">[ {k} ]</dt>
                    <dd className={`mt-2 font-display uppercase text-lg leading-tight ${k === "Disponibilidade" ? "text-accent" : "text-cream"}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="mailto:calvinocossa6@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-bg transition-opacity hover:opacity-85"
              >
                Enviar email <span className="text-accent">↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}