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
      <div className="mx-auto grid max-w-[1280px] gap-16 px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)] md:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">Vamos trabalhar juntos</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-4 font-display font-bold tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.05 }}
            >
              Tem um projecto<br />em mente<span className="text-accent">?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body text-[0.95rem] font-light leading-[1.7] text-dim">
              Estou disponível para novos projectos — identidade visual, peças publicitárias ou qualquer desafio criativo. Respondo sempre em menos de 24h.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <ul className="border-t border-line">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-line py-5 transition-colors hover:text-accent"
                  >
                    <div className="flex items-center gap-6">
                      <span className="w-20 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim group-hover:text-accent">
                        {l.label}
                      </span>
                      <span className="font-body text-base text-ink group-hover:text-accent">{l.value}</span>
                    </div>
                    <span className="font-display text-lg text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponível para novos projectos
            </span>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-7">
            {info.map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">{k}</div>
                <div className="mt-1 font-body text-base text-ink">{v}</div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="https://wa.me/258840000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-[4px] px-6 py-3 font-display text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.94 11.94 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.41zM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.97.99-3.61-.24-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.45 4.44-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}