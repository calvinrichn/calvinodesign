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
      <div className="mx-auto max-w-[1280px] px-[clamp(24px,5vw,80px)] py-[clamp(64px,10vw,120px)]">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">Ferramentas & skills</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Competências
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.08} className="rounded-[4px] bg-surface p-9">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">
                {col.title}
              </p>
              <ul className="mt-6">
                {col.skills.map((s) => (
                  <li key={s} className="flex items-center justify-between border-b border-line py-2.5">
                    <span className="font-body text-[0.88rem] text-ink">{s}</span>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6 rounded-[4px] bg-surface p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">Idiomas</p>
            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
              {languages.map((l) => (
                <div key={l.name} className="md:text-center">
                  <div className="font-display text-lg font-semibold text-ink">{l.name}</div>
                  <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">{l.level}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}