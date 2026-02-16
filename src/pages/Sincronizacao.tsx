import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AlertTriangle, Wifi, ShieldAlert, Bell } from "lucide-react";

export default function Sincronizacao() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Solução de Problemas", href: "/documentacao/troubleshooting" }, { label: "Sincronização" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Dúvidas sobre Sincronização</h1>
          <p className="text-muted-foreground mb-6">Entenda como funciona o processo de sincronização no VEXSOFT e resolva problemas comuns.</p>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold mb-3 mt-0">Como funciona a sincronização?</h2>
            <p className="text-sm text-muted-foreground mb-3">A sincronização tem como objetivo <strong>enviar e receber dados</strong> entre o aplicativo e o painel administrativo, garantindo o funcionamento correto do sistema.</p>
            <p className="text-sm text-muted-foreground mb-2">Durante esse processo, o aplicativo realiza:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Envio das vistorias realizadas</li>
              <li>Recebimento de configurações do painel (template de fotos, perguntas do questionário, etc.)</li>
              <li>Comunicação com serviços online para manter os dados atualizados</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mb-4">Principais dúvidas</h2>
          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-start gap-3">
                <Wifi className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-2">É necessário estar conectado à internet para sincronizar?</h3>
                  <p className="text-sm text-muted-foreground"><strong>Sim.</strong> A sincronização depende de uma conexão com a internet. Sem conexão, não é possível enviar ou receber dados.</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-2">Mensagem: "Acesso negado" ao tentar sincronizar</h3>
                  <p className="text-sm text-muted-foreground mb-2">Esse aviso geralmente indica que o usuário está logado com um <strong>token incorreto ou não licenciado</strong>.</p>
                  <p className="text-sm text-muted-foreground"><strong>Solução:</strong> Verifique os dados de acesso enviados por e-mail ou entre em contato com a equipe de suporte.</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-2">Mensagem: "Você possui vistorias pendentes não sincronizadas"</h3>
                  <p className="text-sm text-muted-foreground mb-2">Essa é uma <strong>mensagem automática de lembrete</strong>.</p>
                  <p className="text-sm text-muted-foreground"><strong>Solução:</strong> Basta realizar uma sincronização manual para enviar as vistorias pendentes. O sistema realiza essa verificação diariamente.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong>Precisa de ajuda?</strong> Se o problema persistir, entre em contato com nosso suporte técnico pelo WhatsApp: <a href="https://wa.me/554491455935" target="_blank" className="text-primary font-medium hover:underline">(44) 99145-5935</a>
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
