export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-[clamp(24px,5vw,80px)] py-7 md:flex-row">
        <span className="font-display uppercase text-xl text-cream">
          CALVINO<span className="text-accent">/</span>COSSA
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cream/50">
          © 2025 — Todos os direitos reservados
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cream/50">
          <span className="text-accent">◉</span> Maputo, MZ
        </span>
      </div>
    </footer>
  );
}