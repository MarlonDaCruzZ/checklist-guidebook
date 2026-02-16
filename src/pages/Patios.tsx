import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ArrowUpDown, MapPin, ExternalLink } from "lucide-react";

export default function Patios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Gestão de Pátios" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Gestão de Pátios</h1>
          <p className="text-muted-foreground mb-6">Gerencie a movimentação dos seus veículos com controle de entrada e saída por pátio.</p>

          <h2 className="text-xl font-bold mb-4">O que é?</h2>
          <p className="text-muted-foreground mb-4">Com o controle de pátio, você consegue visualizar num único local quais pátios estão mais ocupados e quais veículos estão em um determinado pátio.</p>
          <p className="text-muted-foreground mb-6">Sempre que uma vistoria de entrada (Coleta) é realizada, o veículo é vinculado ao pátio automaticamente e só é retirado através de uma vistoria de saída (Entrega).</p>

          <h2 className="text-xl font-bold mb-4">Ativação</h2>
          <p className="text-muted-foreground mb-4">Para ativar, acesse as configurações ocultas no Painel Administrativo e habilite:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li><strong>Ativa a utilização de gestão de pátio</strong></li>
            <li><strong>Liberar utilização do aplicativo portarias</strong> (se o cliente for usar o App Portaria)</li>
          </ul>
          <p className="text-muted-foreground mb-8">Ao cadastrar um novo pátio, configure um usuário para fazer a movimentação. Isso é feito abrindo o cadastro do usuário e adicionando-o ao pátio.</p>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ArrowUpDown className="h-5 w-5 text-primary" />
            Fluxo de entrada e saída
          </h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <div className="h-8 w-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <span className="text-destructive font-bold text-sm">↑</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Vistoria de Entrega</h3>
                <p className="text-xs text-muted-foreground"><strong>Remove</strong> o veículo do pátio — entende-se que o veículo está sendo entregue ao cliente.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-sm">↓</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Vistoria de Coleta</h3>
                <p className="text-xs text-muted-foreground"><strong>Inclui</strong> o veículo no pátio — entende-se que o veículo está sendo recebido pela portaria.</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">Regras</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Somente vistorias do tipo <strong>Entrega</strong> ou <strong>Coleta</strong> podem movimentar o pátio</li>
          </ul>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Benefícios
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Identificar veículos parados no pátio por mais tempo que o necessário</li>
            <li>Gerar indicadores para tomada de decisão</li>
            <li>Balanço de pátio: adicionar ou remover veículos manualmente quando necessário</li>
          </ul>

          <a href="https://drive.google.com/file/d/1Giszdi4Hgx6ZIap2tp9lQjN4q79RJW2f/view" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors mb-8">
            Apresentação sobre Gestão de Pátio <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
