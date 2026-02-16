import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, FileQuestion, Columns, Type, FileText, Smartphone, Shield, Key, Webhook } from "lucide-react";

const configSections = [
  { title: "Tipos de Operação", desc: "Entrega, Coleta, Cautelar, Pré-vistoria, Auto-inspeção e mais.", icon: Settings, href: "/documentacao/tipos-de-operacao" },
  { title: "Questionário", desc: "Configure questionários com fotos, perguntas e grupos.", icon: FileQuestion, href: "/documentacao/questionario" },
  { title: "Campos Fixos", desc: "Campos padrão exibidos no início de toda vistoria.", icon: Columns, href: "/documentacao/campos-fixos" },
  { title: "Campos Personalizáveis", desc: "Texto, seleção, data, hora, código de barras, nível e mais.", icon: Type, href: "/documentacao/campos-personalizaveis" },
  { title: "Configuração do PDF", desc: "Termo de aceite, cabeçalho, rodapé e parâmetros do relatório.", icon: FileText, href: "/documentacao/configuracao-pdf" },
  { title: "E-mails Personalizados", desc: "Configure o template de e-mails enviados pela plataforma.", icon: FileText, href: "/documentacao/configuracoes" },
  { title: "Android", desc: "Configurações específicas do aplicativo Android.", icon: Smartphone, href: "/documentacao/configuracoes" },
  { title: "Política de Senhas", desc: "Defina regras de segurança para senhas dos usuários.", icon: Shield, href: "/documentacao/configuracoes" },
  { title: "API Keys", desc: "Gerencie chaves de acesso para integrações via API.", icon: Key, href: "/documentacao/integracao" },
  { title: "Integrações", desc: "Configure webhooks e integrações com sistemas externos.", icon: Webhook, href: "/documentacao/integracao" },
];

export default function Configuracoes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Painel Administrativo", href: "/documentacao/painel-administrativo" }, { label: "Configurações" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Configurações</h1>
          <p className="text-muted-foreground mb-6">Gerencie todas as configurações do seu painel administrativo: tipos de operação, questionários, campos, PDFs e integrações.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {configSections.map(s => {
              const Icon = s.icon;
              return (
                <Link key={s.title} to={s.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all">
                  <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground mt-0.5 group-hover:text-primary transition-colors" />
                </Link>
              );
            })}
          </div>

          <h2 className="text-xl font-bold mb-4">Ordens de Serviço nas Vistorias</h2>
          <p className="text-muted-foreground mb-4">Após a habilitação do módulo de OS, você pode habilitar o uso por tipo de operação. Para isso:</p>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Acesse o <strong>Painel Administrativo</strong></li>
            <li>Entre na tela de <strong>configurações de tipos de operação</strong></li>
            <li>Escolha o tipo de operação desejado</li>
            <li>Habilite o parâmetro <strong>"Liberar ordem de serviço"</strong></li>
          </ol>

          <p className="text-muted-foreground mb-8">Na criação da OS na vistoria, produtos e serviços devem ser adicionados — cada um tendo associado uma quantia e um preço por unidade. Apenas produtos e serviços pré-configurados ficam disponíveis para uso.</p>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
