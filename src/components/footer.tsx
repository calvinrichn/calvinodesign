export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-[clamp(24px,5vw,80px)] py-7 md:flex-row">
        <span className="font-display text-lg font-extrabold text-ink">
          CALVINO<span className="text-accent">.</span>
        </span>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">
          © 2025 Calvino Cossa. Todos os direitos reservados.
        </span>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">
          <span className="text-accent">◉</span> Maputo, Moçambique
        </span>
      </div>
    </footer>
  );
}