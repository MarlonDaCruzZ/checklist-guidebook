import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SearchBar } from "@/components/SearchBar";

const allArticles = [
  { title: "Boas-vindas ao VEXSOFT", summary: "Conheça a plataforma e suas vantagens.", category: "Início", readTime: "3 min", href: "/documentacao/boas-vindas" },
  { title: "Primeiros Passos", summary: "Configure sua conta e comece a usar em 5 minutos.", category: "Início", readTime: "5 min", href: "/documentacao/primeiros-passos" },
  { title: "Guia Rápido — 5 minutos para começar", summary: "Tudo para iniciar com a plataforma do zero.", category: "Guia Rápido", readTime: "5 min", href: "/guia-rapido" },
  { title: "Painel Administrativo", summary: "Central de gestão e configuração da plataforma.", category: "Painel", readTime: "4 min", href: "/documentacao/painel-administrativo" },
  { title: "Tela de Vistorias", summary: "Consultar, filtrar e gerenciar vistorias.", category: "Painel", readTime: "4 min", href: "/documentacao/vistorias" },
  { title: "Usuários e Permissões", summary: "Cadastro de operadores e gestores.", category: "Painel", readTime: "3 min", href: "/documentacao/usuarios" },
  { title: "Área do Vistoriador", summary: "Painel para consulta de vistorias pelo vistoriador.", category: "Painel", readTime: "3 min", href: "/documentacao/area-do-vistoriador" },
  { title: "Configurações do Sistema", summary: "Tipos de operação, questionários, campos e mais.", category: "Configurações", readTime: "4 min", href: "/documentacao/configuracoes" },
  { title: "Tipos de Operação", summary: "Entrega, Coleta, Cautelar, Pré-vistoria e mais.", category: "Configurações", readTime: "4 min", href: "/documentacao/tipos-de-operacao" },
  { title: "Questionário", summary: "Fotos, perguntas e grupos de perguntas.", category: "Configurações", readTime: "3 min", href: "/documentacao/questionario" },
  { title: "Campos Fixos", summary: "Campos padrão exibidos no início da vistoria.", category: "Configurações", readTime: "3 min", href: "/documentacao/campos-fixos" },
  { title: "Campos Personalizáveis", summary: "8 tipos de campos: texto, seleção, data, hora e mais.", category: "Configurações", readTime: "6 min", href: "/documentacao/campos-personalizaveis" },
  { title: "Configuração do PDF", summary: "Termo de aceite, cabeçalho, rodapé e segurança.", category: "Configurações", readTime: "4 min", href: "/documentacao/configuracao-pdf" },
  { title: "Como criar um checklist (Tutorial)", summary: "Passo a passo completo para criar um checklist.", category: "Tutorial", readTime: "8 min", href: "/documentacao/configurar-checklist" },
  { title: "Integração e API", summary: "Webhooks, preenchimento automático e API.", category: "Integração", readTime: "5 min", href: "/documentacao/integracao" },
  { title: "Gestão de Pátios", summary: "Controle de entrada e saída de veículos.", category: "Recursos", readTime: "4 min", href: "/documentacao/patios" },
  { title: "Sincronização — Dúvidas", summary: "Como funciona e como resolver problemas.", category: "Troubleshooting", readTime: "4 min", href: "/documentacao/sincronizacao" },
  { title: "Troubleshooting Geral", summary: "Soluções para problemas comuns do app.", category: "Troubleshooting", readTime: "4 min", href: "/documentacao/troubleshooting" },
  { title: "Limitações do App", summary: "O que não é possível fazer no VEX.", category: "Troubleshooting", readTime: "3 min", href: "/documentacao/limitacoes" },
  { title: "Aparelhos Homologados", summary: "Dispositivos recomendados para o app VEX.", category: "Recursos", readTime: "3 min", href: "/documentacao/aparelhos-homologados" },
  { title: "Atendimento e Suporte", summary: "Horários, contato e prazos de SLA.", category: "Suporte", readTime: "3 min", href: "/documentacao/atendimento" },
  { title: "Nossa História", summary: "Como o VEXSOFT nasceu e cresceu.", category: "Sobre", readTime: "3 min", href: "/documentacao/historia" },
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
              <ArticleCard key={a.title + a.href} {...a} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
