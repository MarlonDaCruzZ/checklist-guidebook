import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SearchBar } from "@/components/SearchBar";

const allArticles = [
  { title: "Guia Rápido — 5 minutos para começar", summary: "Configure sua conta e crie seu primeiro checklist rapidamente.", category: "Guia Rápido", readTime: "5 min", href: "/guia-rapido" },
  { title: "Como criar um checklist novo", summary: "Aprenda em 7 passos como criar, testar e publicar um checklist.", category: "Configurações", readTime: "8 min", href: "/documentacao/configurar-checklist" },
  { title: "Adicionar campos ao checklist", summary: "Texto, seleção, foto, assinatura — todos os tipos de campo disponíveis.", category: "Configurações", readTime: "6 min", href: "/documentacao/configurar-checklist" },
  { title: "Regras de exibição condicional", summary: "Configure campos que aparecem com base em respostas anteriores.", category: "Configurações", readTime: "5 min", href: "/documentacao/configurar-checklist" },
  { title: "Assinatura digital e termos de aceite", summary: "Como configurar captura de assinatura e termos obrigatórios.", category: "Configurações", readTime: "4 min", href: "/documentacao/configurar-checklist" },
  { title: "Modo offline e sincronização", summary: "Entenda como o app funciona sem internet e sincroniza dados.", category: "Configurações", readTime: "4 min", href: "/documentacao/configurar-checklist" },
  { title: "Checklist não sincroniza — o que fazer?", summary: "Causas comuns e passos para resolver problemas de sincronia.", category: "Troubleshooting", readTime: "4 min", href: "/documentacao/troubleshooting" },
  { title: "Fotos não carregam no app", summary: "Solução para problemas com upload e exibição de imagens.", category: "Troubleshooting", readTime: "3 min", href: "/documentacao/troubleshooting" },
  { title: "Campos obrigatórios não aparecem", summary: "Verifique regras condicionais e configurações de visibilidade.", category: "Troubleshooting", readTime: "3 min", href: "/documentacao/troubleshooting" },
];

export default function Documentacao() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0">
          <Breadcrumbs items={[{ label: "Documentação" }]} />
          <h1 className="text-3xl font-extrabold mb-2">Documentação</h1>
          <p className="text-muted-foreground mb-6">Encontre todos os guias e tutoriais para usar a plataforma VexSoft.</p>
          <SearchBar className="mb-8 max-w-md" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allArticles.map((a) => (
              <ArticleCard key={a.title} {...a} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
