import { Reveal } from "./reveal";
import { ArrowRight, Asterisk, Download, Heart, Lightbulb, Star, Target } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const items = [
  { icon: Target, title: "Foco", desc: "Design estratégico com propósito e criatividade." },
  { icon: Star, title: "Experiência", desc: "3+ Anos criando soluções visuais que funcionam." },
  { icon: Lightbulb, title: "Abordagem", desc: "Escuta, pesquisa e design centrado no usuário." },
  { icon: Heart, title: "Disponibilidade", desc: "Projetos novos e colaborações são sempre bem-vindos." },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-bg py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,4vw,56px)]">
        <div className="relative overflow-hidden rounded-[32px] border border-cream/8 bg-surface p-[clamp(24px,4vw,56px)]">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
              Sobre mim <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr] lg:items-start">
            {/* Left column: heading + copy + CV */}
            <div>
              <Reveal delay={0.05}>
                <h2 className="font-display uppercase leading-[0.92] tracking-[-0.02em]" style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)" }}>
                  <span className="block text-cream">Eu crio</span>
                  <span className="block text-accent">soluções digitais</span>
                  <span className="block text-cream">que geram resultados.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-md font-body text-[0.95rem] leading-[1.7] text-dim">
                  Sou Calvino Cossa, Designer Gráfico &amp; UI Designer com mais de 3 anos de experiência ajudando marcas a se destacarem através de design estratégico, funcional e visualmente impactante.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-cream/15 bg-bg/40 px-5 py-4 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-cream/15 text-cream">
                    <Download className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-left">
                    <span className="block font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream">Baixar CV</span>
                    <span className="mt-0.5 block font-body text-[0.75rem] text-dim">Currículo Completo (PDF)</span>
                  </span>
                </a>
              </Reveal>
            </div>

            {/* Middle column: 4 items */}
            <div>
              <ul className="space-y-6">
                {items.map((it, i) => (
                  <Reveal key={it.title} delay={0.1 + i * 0.06} as="li">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/60 bg-accent/10 text-accent">
                        <it.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream">{it.title}</p>
                        <p className="mt-1 font-body text-[0.9rem] leading-[1.55] text-dim">{it.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.35}>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="group mt-8 inline-flex items-center gap-3 font-body text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream"
                >
                  Mais sobre mim
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-cream transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            </div>

            {/* Right column: portrait */}
            <Reveal delay={0.15} className="relative">
              <div className="relative overflow-hidden rounded-[24px]">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10"
                  style={{
                    background: "radial-gradient(55% 55% at 55% 45%, rgba(232,35,29,0.35) 0%, transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />
                <img src={aboutPortrait} alt="Calvino Cossa" loading="lazy" width={912} height={1104} className="h-full w-full object-cover" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-accent text-cream">
                  <Asterisk className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}