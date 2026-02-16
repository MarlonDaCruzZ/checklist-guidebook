import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Smartphone, Users, Video, ExternalLink } from "lucide-react";

export default function PrimeirosPassos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Primeiros Passos" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Primeiros Passos</h1>
          <p className="text-muted-foreground mb-6">É um prazer ter você com a gente. O VEXSOFT é a sua solução definitiva para a gestão de veículos e equipamentos, pensada para facilitar a rotina da sua empresa com segurança, agilidade e controle.</p>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8">
            <p className="text-sm font-medium mb-0">⏱️ Tempo estimado: <strong>5 minutos</strong> para configuração inicial</p>
          </div>

          <h2 className="text-xl font-bold mb-4">Por onde começar?</h2>
          <p className="text-muted-foreground mb-4">Seu primeiro passo é acessar o Painel Administrativo do VEX e instalar os aplicativos em seus dispositivos.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <a href="https://app.vexsoft.com.br/home" target="_blank" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
              <Monitor className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-sm">Painel Administrativo</p>
                <p className="text-xs text-muted-foreground">Acesse pelo navegador</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
            </a>
            <a href="https://apps.apple.com/br/app/vexsoft/id6677058357" target="_blank" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
              <Smartphone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-sm">Apple Store</p>
                <p className="text-xs text-muted-foreground">iPhone / iPad</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=br.com.inovaclick.Vex&hl=pt_BR" target="_blank" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
              <Smartphone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-sm">Play Store</p>
                <p className="text-xs text-muted-foreground">Android</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8">
            <p className="text-sm text-muted-foreground mb-2">📱 Trabalhamos com uma lista de dispositivos homologados para garantir a melhor performance.</p>
            <Link to="/documentacao/aparelhos-homologados" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
              Ver lista de equipamentos homologados <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            Vídeos de apoio
          </h2>
          <p className="text-muted-foreground mb-4">Para te ajudar nesta etapa inicial, preparamos vídeos explicativos com o passo a passo para:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>Acessar o Painel Administrativo</li>
            <li>Instalar e utilizar o aplicativo no celular</li>
          </ul>
          <a href="https://app.vexsoft.com.br/treinamento" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors mb-8">
            <Video className="h-4 w-4 text-primary" />
            Acessar treinamentos em vídeo
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Configure sua equipe
          </h2>
          <p className="text-muted-foreground mb-6">É essencial que você cadastre os <strong>operadores</strong> e <strong>gestores</strong> da sua empresa na plataforma. Eles também terão acesso às funcionalidades necessárias para a operação diária.</p>

          <h2 className="text-xl font-bold mb-4">Agende seu treinamento</h2>
          <p className="text-muted-foreground mb-4">Nossa equipe especializada está pronta para te ajudar a configurar tudo com tranquilidade. Se ainda não agendou seu treinamento, faça isso agora mesmo:</p>
          <a href="https://wa.me/554491455935" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm mb-8">
            Fale com a equipe <ArrowRight className="h-4 w-4" />
          </a>

          <h2 className="text-xl font-bold mb-4">Depois do básico, é só operar</h2>
          <p className="text-muted-foreground mb-4">Após concluir as configurações iniciais:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>Adicionar sua logo</li>
            <li>Incluir colaboradores</li>
            <li>Ajustar os questionários</li>
            <li>Definir as fotos</li>
          </ul>
          <p className="text-muted-foreground mb-8">Você já estará pronto para começar. A cada checklist, a gestão vai ficando mais simples e eficiente.</p>

          <div className="flex gap-3">
            <Link to="/documentacao/painel-administrativo" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Painel Administrativo <ArrowRight className="h-4 w-4" />
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
