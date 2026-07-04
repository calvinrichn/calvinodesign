import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Sobre } from "@/components/sobre";
import { Servicos } from "@/components/servicos";
import { Projetos } from "@/components/portfolio";
import { Galeria } from "@/components/galeria";
import { Competencias } from "@/components/competencias";
import { Contacto } from "@/components/contacto";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bg font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Galeria />
        <Stats />
        <Competencias />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
