import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Sobre } from "@/components/sobre";
import { Servicos } from "@/components/servicos";
import { Portfolio } from "@/components/portfolio";
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
        <Stats />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Competencias />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
