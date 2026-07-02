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
      <div className="mx-auto grid max-w-[1280px] items-start gap-[clamp(40px,6vw,96px)] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-surface2">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-dim">
                Foto · Perfil
              </span>
            </div>
            <span className="absolute inset-0 border border-line" />
          </div>
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg">
            <span className="h-1.5 w-1.5 rounded-full bg-bg" />
            Disponível para projectos
          </span>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">Sobre mim</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-4 font-display font-bold leading-none tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Design que fala<br />pela marca.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 font-body text-[0.95rem] font-light leading-[1.7] text-dim">
            <Reveal delay={0.1} as="p">
              Sou um Designer Gráfico apaixonado pela criação de identidades visuais, peças publicitárias e conteúdo digital de impacto. Baseado em Maputo, trabalho com marcas locais e internacionais combinando criatividade com domínio técnico das principais ferramentas da indústria.
            </Reveal>
            <Reveal delay={0.15} as="p">
              Com formação autodidata e actualização constante, integro o melhor das ferramentas de IA generativa no fluxo de trabalho criativo — acelerando resultados sem sacrificar qualidade ou personalidade.
            </Reveal>
            <Reveal delay={0.2} as="p">
              Orientado para os detalhes, prazos e, acima de tudo, a satisfação do cliente.
            </Reveal>
          </div>

          <Reveal delay={0.25} className="mt-10">
            <dl className="border-t border-line">
              {rows.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 border-b border-line py-3">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">{k}</dt>
                  <dd className={`font-body text-sm ${k === "Disponibilidade" ? "text-accent" : "text-ink"}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="mailto:calvinocossa6@gmail.com"
              className="mt-8 inline-flex rounded-[4px] bg-accent px-6 py-3 font-display text-sm font-bold text-bg transition-opacity hover:opacity-85"
            >
              Enviar email →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}