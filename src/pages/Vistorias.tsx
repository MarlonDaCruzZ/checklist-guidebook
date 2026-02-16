import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, Download, Mail, MessageCircle, Image, GitCompare } from "lucide-react";

export default function Vistorias() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Painel Administrativo", href: "/documentacao/painel-administrativo" }, { label: "Vistorias" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Tela de Vistorias</h1>
          <p className="text-muted-foreground mb-6">A Tela de Vistorias foi desenvolvida para auxiliar na localização e gestão de vistorias realizadas pela empresa.</p>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
            <div className="text-center text-muted-foreground text-sm py-8">
              📸 Captura de tela — Tela de Vistorias do Painel Administrativo
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Filtros disponíveis
          </h2>
          <p className="text-muted-foreground mb-4">O recurso permite consultar registros utilizando múltiplos filtros:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            {["Tipo de operação", "Data inicial", "Data final", "Placa", "Chassi", "Vistoriador", "Cliente", "Possui avaria"].map(f => (
              <div key={f} className="px-3 py-2 rounded-lg bg-sidebar-accent text-sm font-medium">{f}</div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">Funcionalidades</h2>
          <p className="text-muted-foreground mb-4">Além da consulta, você pode verificar estas opções em cada vistoria:</p>
          <div className="space-y-3 mb-8">
            {[
              { icon: Download, title: "Download em ZIP", desc: "Baixe todas as fotos e arquivos relacionados à vistoria." },
              { icon: Mail, title: "Reenvio por e-mail", desc: "Encaminhe a vistoria diretamente para um destinatário." },
              { icon: MessageCircle, title: "Reenvio por WhatsApp", desc: "Encaminhe a vistoria pelo WhatsApp para o número desejado." },
              { icon: Image, title: "Visualização de fotos", desc: "Acesso rápido às imagens registradas." },
              { icon: GitCompare, title: "Comparação", desc: "Disponível para vistorias do tipo coleta, permitindo comparação entre registros." },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-xl font-bold mb-4">Status da vistoria</h2>
          <p className="text-muted-foreground mb-4">Usuários com permissão podem alterar o status da vistoria. Sem permissão, é possível apenas visualizar o status atual.</p>

          <h2 className="text-xl font-bold mb-4">Situação da vistoria</h2>
          <p className="text-muted-foreground mb-8">Uma vistoria pode ser cancelada em caso de inconsistências ou problemas. O campo <strong>situação</strong> pode assumir os valores <strong>Normal</strong> ou <strong>Cancelada</strong>. O cancelamento é permitido somente a usuários devidamente autorizados.</p>

          <div className="flex gap-3">
            <Link to="/documentacao/configuracoes" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Configurações <ArrowRight className="h-4 w-4" />
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
