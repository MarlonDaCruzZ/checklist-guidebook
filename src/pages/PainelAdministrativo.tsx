import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, FileText, Users, BarChart3, Car, Eye, MapPin, ExternalLink } from "lucide-react";

const sections = [
  { title: "Vistorias", desc: "Consultar, filtrar e gerenciar todas as vistorias realizadas.", icon: FileText, href: "/documentacao/vistorias" },
  { title: "Usuários", desc: "Cadastrar operadores, gestores e definir permissões.", icon: Users, href: "/documentacao/usuarios" },
  { title: "Configurações", desc: "Tipos de operação, questionários, campos, PDF e mais.", icon: Settings, href: "/documentacao/configuracoes" },
  { title: "Relatórios", desc: "Acompanhe indicadores e exporte dados da plataforma.", icon: BarChart3, href: "/documentacao/painel-administrativo" },
  { title: "Veículos", desc: "Cadastre e consulte veículos da sua frota.", icon: Car, href: "/documentacao/painel-administrativo" },
  { title: "Ao Vivo", desc: "Acompanhe vistorias em tempo real.", icon: Eye, href: "/documentacao/painel-administrativo" },
  { title: "Localizador de Placas", desc: "Busca rápida por placa em toda a base.", icon: MapPin, href: "/documentacao/painel-administrativo" },
];

export default function PainelAdministrativo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Painel Administrativo" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground mb-6">O painel administrativo foi desenvolvido para ser a central de gestão, parametrização, configurações e administração de toda a plataforma.</p>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8">
            <p className="text-sm mb-2">🔗 Acesse o painel em:</p>
            <a href="https://app.vexsoft.com.br" target="_blank" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
              app.vexsoft.com.br <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <h2 className="text-xl font-bold mb-4">Módulos disponíveis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.title} to={s.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all">
                  <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto mt-0.5 group-hover:text-primary transition-colors" />
                </Link>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8">
            <p className="text-sm text-muted-foreground">
              <strong>💡 Dica:</strong> O Google faz busca somente no ambiente oficial <code className="bg-muted px-1.5 py-0.5 rounded text-xs">app.vexsoft.com.br</code>. Certifique-se de acessar pelo endereço correto.
            </p>
          </div>

          <h2 className="text-xl font-bold mb-4">Produtos e Serviços</h2>
          <p className="text-muted-foreground mb-4">
            Produtos e serviços são itens pré-configurados que podem ser utilizados em ordens de serviço e requisições. Cada produto/serviço tem um nome e pode ter preços associados.
          </p>
          <p className="text-muted-foreground mb-4">Os tipos de preço disponíveis são:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Preço padrão</li>
            <li>Preço por fornecedor</li>
            <li>Preço por modelo</li>
            <li>Preço por classificação de veículo</li>
          </ul>

          <div className="flex gap-3">
            <Link to="/documentacao/vistorias" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Vistorias <ArrowRight className="h-4 w-4" />
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
