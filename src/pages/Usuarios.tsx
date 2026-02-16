import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Search, Shield, Smartphone } from "lucide-react";

export default function Usuarios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Painel Administrativo", href: "/documentacao/painel-administrativo" }, { label: "Usuários" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Usuários</h1>
          <p className="text-muted-foreground mb-6">Gerencie operadores, gestores e permissões de acesso à plataforma VEX.</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <Search className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Consulta de Usuários</h3>
                <p className="text-sm text-muted-foreground">Pesquise e visualize todos os usuários cadastrados na plataforma com filtros avançados.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Permissões de Usuários</h3>
                <p className="text-sm text-muted-foreground">Defina quais funcionalidades cada tipo de usuário pode acessar e gerenciar.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <Smartphone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Dispositivos por Usuários</h3>
                <p className="text-sm text-muted-foreground">Controle quais dispositivos estão vinculados a cada usuário do sistema.</p>
              </div>
            </div>
          </div>

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
