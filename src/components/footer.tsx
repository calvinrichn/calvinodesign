import { Asterisk } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-cream/8 bg-bg">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-[clamp(20px,4vw,56px)] py-7 md:flex-row">
        <span className="inline-flex items-center gap-2 font-display uppercase text-xl text-cream">
          CC<span className="text-accent">.</span>
          <span className="ml-2 font-body text-[0.7rem] font-semibold tracking-[0.22em] text-dim">CALVINO COSSA</span>
          <Asterisk className="h-3 w-3 text-accent" strokeWidth={2.5} />
        </span>
        <span className="font-body text-[0.68rem] uppercase tracking-[0.22em] text-dim">
          © 2025 Calvino Cossa. Todos os direitos reservados.
        </span>
        <span className="font-body text-[0.68rem] uppercase tracking-[0.22em] text-dim">
          Maputo, Moçambique
        </span>
      </div>
    </footer>
  );
}