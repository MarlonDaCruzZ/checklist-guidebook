import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CodeBlock } from "@/components/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Webhook, Database, FileText } from "lucide-react";

export default function Integracao() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Integração" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Integração</h1>
          <p className="text-muted-foreground mb-6">Com o VEX, todas as suas vistorias podem fazer parte de um fluxo de automação dentro da sua empresa.</p>

          <h2 className="text-xl font-bold mb-4">O que você pode fazer</h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <Database className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Preenchimento automático via API</h3>
                <p className="text-xs text-muted-foreground">Preencha vistorias utilizando dados do contrato de locação. A partir da placa, o VEX consulta os dados e sugere automaticamente o cliente e o veículo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <Webhook className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Webhooks de nova vistoria</h3>
                <p className="text-xs text-muted-foreground">Receba notificações automáticas assim que novas vistorias são registradas no sistema.</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">Benefícios da integração</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Agilize a realização da vistoria com dados pré-preenchidos</li>
            <li>Integre a vistoria com seu contrato de forma automática</li>
            <li>Capture km de devolução, avarias e laudo em PDF automaticamente</li>
            <li>Conecte com sistemas parceiros que já possuem integração homologada</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Exemplo de integração via API</h2>
          <CodeBlock
            language="json"
            code={`// Exemplo de payload de webhook
{
  "evento": "nova_vistoria",
  "vistoria_id": 12345,
  "placa": "ABC1D23",
  "tipo_operacao": "coleta",
  "vistoriador": "João Silva",
  "data_hora": "2025-02-16T10:30:00-03:00",
  "possui_avaria": true,
  "pdf_url": "https://app.vexsoft.com.br/vistoria/12345/pdf"
}`}
          />

          <h2 className="text-xl font-bold mb-4 mt-8">Material de apoio</h2>
          <div className="space-y-3 mb-8">
            <a href="https://developer.vexsoft.com.br/" target="_blank" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
              <FileText className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-sm">Documentação da API</p>
                <p className="text-xs text-muted-foreground">Acesse a documentação técnica completa</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
            <a href="https://drive.google.com/file/d/1iVGzdC4yhAyF_WRjE_1JJVkNEH4jPYnv/view" target="_blank" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
              <FileText className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-sm">Apresentação em PDF</p>
                <p className="text-xs text-muted-foreground">Visão geral do sistema de integração</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>

          <div className="flex gap-3">
            <Link to="/documentacao/sincronizacao" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Sincronização <ArrowRight className="h-4 w-4" />
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
