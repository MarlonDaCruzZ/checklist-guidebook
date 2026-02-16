import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Clock, Phone, AlertTriangle } from "lucide-react";

export default function Atendimento() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Atendimento e Suporte" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Atendimento e Serviços</h1>
          <p className="text-muted-foreground mb-6">Informações sobre nosso suporte técnico, horários de atendimento e SLAs.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-border bg-card">
              <Clock className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-sm mb-2">Horário de Atendimento</h3>
              <p className="text-sm text-muted-foreground">Segunda a sexta-feira</p>
              <p className="text-sm font-medium">08h às 12h e 13h30 às 17h</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <Phone className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-sm mb-2">Contato</h3>
              <p className="text-sm text-muted-foreground">WhatsApp / Telefone</p>
              <a href="https://wa.me/554491455935" target="_blank" className="text-sm font-medium text-primary hover:underline">(44) 99145-5935</a>
            </div>
          </div>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm mb-1">Plantão de Suporte</h3>
              <p className="text-sm text-muted-foreground">Finais de semana e feriados: plantão exclusivo para <strong>urgências</strong>, como inatividade do sistema ou falhas críticas que impactem o funcionamento dos serviços.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">Prazos de Atendimento (SLA)</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-4 py-3 font-semibold">Prioridade</th>
                  <th className="text-left px-4 py-3 font-semibold">Tempo de resposta</th>
                  <th className="text-left px-4 py-3 font-semibold">Tempo de solução</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium">Baixo</span></td>
                  <td className="px-4 py-3 text-muted-foreground">4 horas</td>
                  <td className="px-4 py-3 text-muted-foreground">16 dias úteis</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-warning/20 text-warning text-xs font-medium">Moderado</span></td>
                  <td className="px-4 py-3 text-muted-foreground">4 horas</td>
                  <td className="px-4 py-3 text-muted-foreground">11 dias úteis</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-destructive/20 text-destructive text-xs font-medium">Alta</span></td>
                  <td className="px-4 py-3 text-muted-foreground">2 horas</td>
                  <td className="px-4 py-3 text-muted-foreground">2 dias úteis</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-xs font-medium">Crítico</span></td>
                  <td className="px-4 py-3 text-muted-foreground">2 horas</td>
                  <td className="px-4 py-3 text-muted-foreground">8 horas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8">
            <p className="text-sm text-muted-foreground">
              <strong>Importante:</strong> Todos os prazos são contados em <strong>horas úteis</strong>, respeitando o horário de atendimento do suporte. Os prazos podem sofrer alterações de acordo com a demanda, sendo o cliente informado previamente.
            </p>
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
