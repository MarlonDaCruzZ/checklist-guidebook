import { SearchBar } from "@/components/SearchBar";
import { ArticleCard } from "@/components/ArticleCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { BookOpen, Zap, Settings, AlertTriangle, HelpCircle, History, ArrowRight, FileText, Video, Download, Monitor, Plug, MapPin, Smartphone, Clock } from "lucide-react";

const categories = [
  { title: "Primeiros Passos", desc: "Comece em 5 minutos", icon: Zap, href: "/documentacao/primeiros-passos", color: "text-warning" },
  { title: "Painel Administrativo", desc: "Vistorias, usuários e gestão", icon: Monitor, href: "/documentacao/painel-administrativo", color: "text-primary" },
  { title: "Configurações", desc: "Questionários, campos, PDF e regras", icon: Settings, href: "/documentacao/configuracoes", color: "text-primary" },
  { title: "Integração & API", desc: "Webhooks e automações", icon: Plug, href: "/documentacao/integracao", color: "text-info" },
  { title: "Gestão de Pátios", desc: "Controle de entrada e saída", icon: MapPin, href: "/documentacao/patios", color: "text-success" },
  { title: "Troubleshooting", desc: "Resolva problemas comuns", icon: AlertTriangle, href: "/documentacao/troubleshooting", color: "text-destructive" },
  { title: "FAQ", desc: "Perguntas frequentes", icon: HelpCircle, href: "/faq", color: "text-info" },
  { title: "Aparelhos Homologados", desc: "Dispositivos recomendados", icon: Smartphone, href: "/documentacao/aparelhos-homologados", color: "text-muted-foreground" },
  { title: "Atendimento e Suporte", desc: "Horários e SLA", icon: Clock, href: "/documentacao/atendimento", color: "text-warning" },
  { title: "Documentação Completa", desc: "Índice de todos os artigos", icon: BookOpen, href: "/documentacao", color: "text-muted-foreground" },
  { title: "Changelog", desc: "Novidades e atualizações", icon: History, href: "/changelog", color: "text-success" },
];

const popularArticles = [
  {
    title: "Primeiros Passos com o VEXSOFT",
    summary: "Configure sua conta, instale o app e comece a usar em 5 minutos.",
    category: "Início",
    readTime: "5 min",
    href: "/documentacao/primeiros-passos",
  },
  {
    title: "Campos Personalizáveis — Guia Completo",
    summary: "Texto, seleção, data, código de barras, nível e regras condicionais.",
    category: "Configurações",
    readTime: "6 min",
    href: "/documentacao/campos-personalizaveis",
  },
  {
    title: "Sincronização — Dúvidas e Soluções",
    summary: "Entenda como funciona a sincronização e resolva problemas comuns.",
    category: "Troubleshooting",
    readTime: "4 min",
    href: "/documentacao/sincronizacao",
  },
  {
    title: "Integração e API",
    summary: "Webhooks, preenchimento automático e documentação da API.",
    category: "Integração",
    readTime: "5 min",
    href: "/documentacao/integracao",
  },
  {
    title: "Configurações do PDF",
    summary: "Termo de aceite, cabeçalho, rodapé e proteção com senha.",
    category: "Configurações",
    readTime: "4 min",
    href: "/documentacao/configuracao-pdf",
  },
  {
    title: "Gestão de Pátios",
    summary: "Controle de entrada e saída de veículos por pátio.",
    category: "Recursos",
    readTime: "4 min",
    href: "/documentacao/patios",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-sidebar-accent px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <BookOpen className="h-4 w-4" />
            Central de Ajuda VexSoft
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Como podemos <span className="text-gradient-primary">ajudar você</span>?
          </h1>
          <p className="text-muted-foreground text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Encontre guias, tutoriais e respostas para aproveitar ao máximo seus checklists digitais.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <SearchBar large className="max-w-xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-8">
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/documentacao/primeiros-passos" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
            <Zap className="h-4 w-4" /> Começar aqui
          </Link>
          <Link to="/documentacao/configuracoes" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors">
            <Settings className="h-4 w-4" /> Configurar checklist
          </Link>
          <Link to="/documentacao/integracao" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors">
            <Plug className="h-4 w-4" /> API & Integrações
          </Link>
          <Link to="/faq" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors">
            <HelpCircle className="h-4 w-4" /> Perguntas frequentes
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-8">
        <h2 className="text-xl font-bold mb-6">Explorar por categoria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                to={cat.href}
                className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm bg-card transition-all duration-200"
              >
                <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center ${cat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground">{cat.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container pb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Artigos populares</h2>
          <Link to="/documentacao" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            Ver todos <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularArticles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="bg-surface py-14">
        <div className="container">
          <h2 className="text-xl font-bold mb-6">Recursos adicionais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Artigos e Guias</h3>
                <p className="text-xs text-muted-foreground">Passo a passo detalhado com capturas de tela e exemplos práticos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border">
              <Video className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Tutoriais em Vídeo</h3>
                <p className="text-xs text-muted-foreground">Assista a demonstrações visuais de como usar cada funcionalidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border">
              <Download className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Downloads em PDF</h3>
                <p className="text-xs text-muted-foreground">Baixe guias imprimíveis e modelos de checklist prontos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-14 text-center">
        <h2 className="text-xl font-bold mb-2">Não encontrou o que procurava?</h2>
        <p className="text-muted-foreground mb-6">Nossa equipe de suporte está pronta para ajudar.</p>
        <div className="flex justify-center gap-3">
          <a href="https://wa.me/message/3MPLPHHHKVZSP1" target="_blank">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm transition-transform hover:scale-[1.02]">
              Falar com suporte
            </button>
          </a>
          <Link to="/faq">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors">
              Ver FAQ
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
