import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, HelpCircle, Layers } from "lucide-react";

export default function Questionario() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Configurações", href: "/documentacao/configuracoes" },
            { label: "Questionário" },
          ]} />

          <h1 className="text-3xl font-extrabold mb-2">Questionário</h1>
          <p className="text-muted-foreground mb-6">Configure os questionários que serão utilizados nas vistorias, incluindo fotos, perguntas e grupos de perguntas.</p>

          <h2 className="text-xl font-bold mb-4">Módulos do Questionário</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <Camera className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Fotos de Questionário</h3>
                <p className="text-sm text-muted-foreground">Defina templates de fotos obrigatórias para cada tipo de vistoria. Configure quais ângulos e detalhes devem ser fotografados.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Perguntas e Fotos do Questionário</h3>
                <p className="text-sm text-muted-foreground">Configure as perguntas que o vistoriador deve responder durante a vistoria. Associe fotos a perguntas específicas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <Layers className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Grupos de Perguntas</h3>
                <p className="text-sm text-muted-foreground">Organize as perguntas em grupos lógicos (ex: Parte externa, Parte interna, Motor) para facilitar o preenchimento.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link to="/documentacao/campos-fixos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Campos Fixos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
