import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Wifi, Palette } from "lucide-react";

export default function BoasVindas() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Boas-vindas" }]} />

          <h1 className="text-3xl font-extrabold mb-4">Boas-vindas ao VEXSOFT</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Transforme suas vistorias com o VEXSOFT — sua solução definitiva para checklists digitais.
          </p>

          <div className="prose prose-sm max-w-none">
            <div className="bg-sidebar-accent border border-border rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-3 mt-0">O que é o VEXSOFT?</h2>
              <p className="text-muted-foreground mb-0">
                VEXSOFT é o seu aliado definitivo na otimização de vistorias! Realize todo o processo de forma totalmente digital, tornando sua rotina mais simples e eficiente. Com mais de <strong>5 milhões de checklists</strong> realizados em todo o Brasil, o VEXSOFT é a escolha preferida para quem busca vistorias rápidas e modernas.
              </p>
            </div>

            <p>
              Com o VEX, você pode capturar fotos de avarias, fazer anotações e registrar detalhes essenciais de maneira ágil e intuitiva, tudo na palma da sua mão.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">Público-alvo</h2>
            <p>Ideal para:</p>
            <ul className="space-y-2 list-none pl-0">
              {["Locadoras de veículos", "Empresas de frotas", "Transportadoras", "Concessionárias", "Oficinas mecânicas", "Centro automotivos"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">Vantagens e serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-8">
              <div className="p-4 rounded-xl border border-border bg-card">
                <Users className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm mb-1">Envio em tempo recorde</h3>
                <p className="text-xs text-muted-foreground">Suas vistorias podem ser enviadas em tempo real para seus clientes, garantindo praticidade e eficiência.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <Palette className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm mb-1">Personalização total</h3>
                <p className="text-xs text-muted-foreground">Customize questionários, informações obrigatórias, termos de aceite e relatórios com a identidade da sua empresa.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <Wifi className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm mb-1">Funciona offline</h3>
                <p className="text-xs text-muted-foreground">Realize vistorias mesmo sem internet. Quando a conexão voltar, as vistorias serão enviadas automaticamente.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm mb-1">+800 empresas ativas</h3>
                <p className="text-xs text-muted-foreground">Atendemos as maiores locadoras de veículos do Brasil com segurança e transparência nas locações.</p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Link to="/documentacao/primeiros-passos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
                Primeiros passos <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/documentacao/historia" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors">
                Conheça nossa história
              </Link>
            </div>
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
