import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const operations = [
  { name: "Pré-vistoria", desc: "Realizada antes da entrega do veículo, serve para registrar o estado inicial." },
  { name: "Entrega", desc: "Registra o estado do veículo no momento da entrega ao cliente. Remove o veículo do pátio." },
  { name: "Coleta", desc: "Registra o estado do veículo na devolução pelo cliente. Inclui o veículo no pátio." },
  { name: "Cautelar", desc: "Vistoria preventiva para verificar condições gerais do veículo." },
  { name: "Coleta com Entrega", desc: "Combina os dois processos em um único fluxo, ideal para trocas de veículo." },
  { name: "Auto Inspeção", desc: "Permite que o próprio cliente realize a vistoria remotamente, sem necessidade de um vistoriador presencial." },
];

export default function TiposOperacao() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Configurações", href: "/documentacao/configuracoes" },
            { label: "Tipos de Operação" },
          ]} />

          <h1 className="text-3xl font-extrabold mb-2">Tipos de Operação</h1>
          <p className="text-muted-foreground mb-6">Conheça os diferentes tipos de operação disponíveis no VEXSOFT e quando utilizar cada um.</p>

          <div className="space-y-4 mb-8">
            {operations.map((op, i) => (
              <div key={op.name} className="border border-border rounded-xl p-5 bg-card">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{op.name}</h3>
                    <p className="text-sm text-muted-foreground">{op.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Link to="/documentacao/questionario" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Questionário <ArrowRight className="h-4 w-4" />
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
