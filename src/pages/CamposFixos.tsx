import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function CamposFixos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Configurações", href: "/documentacao/configuracoes" },
            { label: "Campos Fixos" },
          ]} />

          <h1 className="text-3xl font-extrabold mb-2">Campos Fixos</h1>
          <p className="text-muted-foreground mb-6">Configure quais informações serão exibidas no início da vistoria, logo após a seleção da operação e do questionário.</p>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8 text-center">
            <p className="text-sm text-muted-foreground">📸 Captura de tela — Tela de Campos Fixos</p>
          </div>

          <h2 className="text-xl font-bold mb-4">🔧 O que pode ser configurado?</h2>
          <p className="text-muted-foreground mb-4">Cada campo apresenta duas opções:</p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-4 py-3 font-semibold">Configuração</th>
                  <th className="text-left px-4 py-3 font-semibold">Função</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-medium">Campo Ativo</td>
                  <td className="px-4 py-3 text-muted-foreground">Define se o campo será exibido ou ocultado na vistoria.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-medium">Campo Obrigatório</td>
                  <td className="px-4 py-3 text-muted-foreground">Determina se o preenchimento será obrigatório ou opcional.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground mb-1"><strong>Importante:</strong> Os campos fixos <strong>não podem ser editados ou renomeados</strong>. A única configuração possível é ativá-los/inativá-los e escolher se serão obrigatórios.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">📍 Onde os campos aparecem?</h2>
          <p className="text-muted-foreground mb-8">Esses campos são exibidos na <strong>tela inicial do checklist</strong>, antes do início do preenchimento da vistoria, e se aplicam a <strong>todas as operações e questionários</strong>.</p>

          <div className="flex gap-3">
            <Link to="/documentacao/campos-personalizaveis" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Campos Personalizáveis <ArrowRight className="h-4 w-4" />
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
