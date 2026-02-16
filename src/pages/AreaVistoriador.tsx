import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";

export default function AreaVistoriador() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Área do Vistoriador" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Área do Vistoriador</h1>
          <p className="text-muted-foreground mb-6">Painel administrativo que permite ao vistoriador consultar somente suas vistorias, independente do tempo em que foram realizadas.</p>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8">
            <p className="text-sm text-muted-foreground mb-3">
              Este site foi construído para ajudar o vistoriador nas consultas das vistorias, pois o <strong>Aplicativo Android só permite visualizar as vistorias dos últimos 7 dias</strong>.
            </p>
            <a href="https://area-vistoriador.vexsoft.com.br" target="_blank" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
              Acessar Área do Vistoriador <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <h2 className="text-xl font-bold mb-4">Ferramentas disponíveis para o vistoriador</h2>
          <p className="text-muted-foreground mb-4">É importante informar ao vistoriador que ele possui <strong>2 sistemas</strong> que juntos ajudam a gerenciar e realizar suas vistorias:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-border bg-card">
              <Smartphone className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-sm mb-2">Aplicativo Móvel</h3>
              <p className="text-xs text-muted-foreground">Para <strong>realizar</strong> as vistorias em campo. Visualiza as vistorias dos últimos 7 dias.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <Monitor className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-sm mb-2">Área do Vistoriador (Web)</h3>
              <p className="text-xs text-muted-foreground">Para <strong>consultar</strong> todas as vistorias realizadas, sem limitação de tempo.</p>
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
