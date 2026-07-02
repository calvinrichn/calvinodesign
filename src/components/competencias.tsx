import { Reveal } from "./reveal";

const columns = [
  {
    title: "Software de Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva (avançado)", "Adobe InDesign"],
  },
  {
    title: "IA para Design",
    skills: ["Adobe Firefly", "Midjourney", "DALL·E", "Canva AI (Magic Studio)", "Leonardo AI"],
  },
  {
    title: "Competências Criativas",
    skills: [
      "Identidade Visual & Branding",
      "Design para Redes Sociais",
      "Materiais Publicitários",
      "Edição de Imagem & Retoque",
      "Tipografia & Composição Visual",
    ],
  },
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Changana", level: "Nativo" },
  { name: "Inglês", level: "Intermédio" },
];

export function Competencias() {
  return (
    <section id="competencias" className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <div className="flex items-baseline justify-between">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/60">[ ferramentas ]</p>
          </Reveal>
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">/12</span>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.01em] text-cream" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}>
            STACK <span className="text-accent">CRIATIVA</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.08} className="rounded-[24px] bg-cream p-8 text-bg">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] opacity-60">[ {col.title} ]</p>
              <ul className="mt-6 space-y-1">
                {col.skills.map((s) => (
                  <li key={s} className="flex items-center justify-between border-b border-bg/10 py-3">
                    <span className="font-display uppercase text-[0.95rem] tracking-tight">{s}</span>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-5 rounded-[24px] bg-accent p-8 text-cream">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] opacity-80">[ idiomas ]</p>
            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
              {languages.map((l) => (
                <div key={l.name} className="md:text-center">
                  <div className="font-display uppercase text-2xl leading-none">{l.name}</div>
                  <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] opacity-80">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}