import { Reveal } from "./reveal";
import { Asterisk } from "lucide-react";

const columns = [
  { title: "Software de Design", skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva (avançado)"] },
  { title: "IA para Design", skills: ["Adobe Firefly", "Midjourney", "DALL·E", "Canva AI (Magic Studio)", "Leonardo AI"] },
  { title: "Competências Criativas", skills: ["Identidade Visual & Branding", "UI/UX Design", "Design para Redes Sociais", "Materiais Publicitários", "Tipografia & Composição"] },
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Changana", level: "Nativo" },
  { name: "Inglês", level: "Intermédio" },
];

export function Competencias() {
  return (
    <section id="skills" className="bg-bg py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,4vw,56px)]">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70">
            Skills <Asterisk className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display uppercase leading-[0.92] tracking-[-0.02em] text-cream" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
            Ferramentas &amp; <span className="text-accent">competências.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.06} className="rounded-[24px] border border-cream/8 bg-surface p-6 transition-colors hover:border-accent/40">
              <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">{col.title}</p>
              <ul className="mt-5 space-y-1">
                {col.skills.map((s) => (
                  <li key={s} className="flex items-center justify-between border-b border-cream/8 py-3 last:border-b-0">
                    <span className="font-body text-[0.9rem] text-cream">{s}</span>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-4 rounded-[24px] border border-cream/8 bg-surface p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">Idiomas</p>
            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
              {languages.map((l) => (
                <div key={l.name} className="md:text-center">
                  <div className="font-display uppercase text-xl leading-none text-cream">{l.name}</div>
                  <div className="mt-2 font-body text-[0.65rem] uppercase tracking-[0.22em] text-dim">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}