import { Reveal } from "./reveal";
import { ArrowUpRight, Asterisk, Instagram, Mail, MessageCircle } from "lucide-react";

const links = [
  { label: "Email", value: "calvinocossa6@gmail.com", href: "mailto:calvinocossa6@gmail.com", icon: Mail },
  { label: "WhatsApp", value: "+258 84 851 9216", href: "https://wa.me/258848519216", icon: MessageCircle },
  { label: "Instagram", value: "@calvinocossa", href: "https://instagram.com/calvinocossa", icon: Instagram },
];

export function Contacto() {
  return (
    <section id="contacto" className="bg-bg py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto grid max-w-[1400px] gap-4 px-[clamp(20px,4vw,56px)] lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[28px] border border-cream/8 bg-surface p-[clamp(24px,3.5vw,44px)]">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
              Vamos trabalhar juntos <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display uppercase leading-[0.92] tracking-[-0.02em] text-cream" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
              Tem um projeto <br/> em mente<span className="text-accent">?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-body text-[0.95rem] leading-[1.65] text-dim">
              Estou disponível para novos projetos e desafios criativos. Vamos conversar sobre como posso ajudar a sua marca a crescer.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <ul className="grid gap-2 sm:grid-cols-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-cream/8 bg-bg/40 px-4 py-3.5 transition-all hover:border-accent/50 hover:bg-accent/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                      <l.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-dim">{l.label}</p>
                      <p className="mt-0.5 truncate font-body text-[0.88rem] text-cream">{l.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-accent p-[clamp(24px,3.5vw,40px)] text-cream">
          <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cream/10 blur-3xl" />
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-bg/40 px-3 py-1.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cream">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
              </span>
              Disponível
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-6 font-display uppercase leading-[0.95] tracking-tight text-cream" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Aberto para <br/> novos projetos
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xs font-body text-[0.88rem] leading-[1.55] text-cream/85">
              Respondendo sempre em menos de 24 horas.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="mailto:calvinocossa6@gmail.com"
              className="group mt-8 inline-flex items-center justify-between gap-6 rounded-full bg-bg px-6 py-3.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream transition-transform hover:scale-[1.02]"
            >
              Enviar mensagem
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
