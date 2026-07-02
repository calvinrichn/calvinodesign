import { Reveal } from "./reveal";

const links = [
  { label: "Email", value: "calvinocossa6@gmail.com", href: "mailto:calvinocossa6@gmail.com" },
  { label: "WhatsApp", value: "+258 84 000 0000", href: "https://wa.me/258840000000" },
  { label: "Instagram", value: "@calvinocossa", href: "https://instagram.com/calvinocossa" },
  { label: "Behance", value: "@calvinocossa", href: "https://behance.net/calvinocossa" },
];

const info = [
  ["Localização", "Maputo, Moçambique"],
  ["Modalidade", "Freelance · Remoto & Presencial"],
  ["Tempo de resposta", "Menos de 24 horas"],
];

export function Contacto() {
  return (
    <section id="contacto" className="bg-surface">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)] md:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/60">[ contacto — /05 ]</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-cream" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>
              TEM UM <span className="text-accent">PROJECTO</span> EM MENTE?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body text-[1rem] leading-[1.65] text-cream/70">
              Estou disponível para novos projectos — identidade visual, peças publicitárias ou qualquer desafio criativo. Respondo sempre em menos de 24h.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <ul className="overflow-hidden rounded-[24px] bg-cream text-bg">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-bg/10 px-6 py-5 transition-colors last:border-b-0 hover:bg-accent hover:text-cream"
                  >
                    <div className="flex items-center gap-6">
                      <span className="w-24 font-mono text-[0.62rem] uppercase tracking-[0.15em] opacity-60">[ {l.label} ]</span>
                      <span className="font-display uppercase text-lg tracking-tight">{l.value}</span>
                    </div>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="rounded-[28px] bg-accent p-8 text-cream">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-bg px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cream">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
              </span>
              Disponível
            </span>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6">
            {info.map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.15em] opacity-70">[ {k} ]</div>
                <div className="mt-2 font-display uppercase text-xl leading-tight">{v}</div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="https://wa.me/258840000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-bg px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cream transition-opacity hover:opacity-85"
            >
              WhatsApp <span>↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
