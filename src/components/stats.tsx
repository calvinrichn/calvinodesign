import { Gem, Grid3x3, Star, Target, Users } from "lucide-react";

const stats = [
  { icon: Star, value: "2025+", label: "Em atividade desde" },
  { icon: Grid3x3, value: "50+", label: "Projetos realizados" },
  { icon: Users, value: "30+", label: "Clientes satisfeitos" },
  { icon: Gem, value: "10+", label: "Marcas fortalecidas" },
  { icon: Target, value: "100%", label: "Dedicação em cada projeto" },
];

export function Stats() {
  return (
    <section className="bg-bg py-[clamp(24px,4vw,48px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-[24px] border border-cream/8 bg-surface p-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6 lg:p-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                <s.icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="font-display uppercase leading-none tracking-tight text-cream" style={{ fontSize: "clamp(1.35rem, 2vw, 1.75rem)" }}>
                  {s.value}
                </div>
                <p className="mt-1.5 font-body text-[0.65rem] uppercase leading-tight tracking-[0.18em] text-dim">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}