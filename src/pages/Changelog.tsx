import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { History, Sparkles, Bug, Wrench } from "lucide-react";

interface ChangelogEntry {
  version: string;
  date: string;
  highlights: string;
  changes: { type: "feature" | "fix" | "improvement"; text: string }[];
}

const changelog: ChangelogEntry[] = [
  {
    version: "2.4.0",
    date: "10 de Fevereiro de 2026",
    highlights: "Novo editor de regras condicionais e melhorias na sincronização offline.",
    changes: [
      { type: "feature", text: "Editor visual de regras condicionais — agora é possível criar condições complexas sem código." },
      { type: "feature", text: "Novos tipos de campo: avaliação por estrelas e slider numérico." },
      { type: "improvement", text: "Sincronização offline 3x mais rápida com compressão inteligente de fotos." },
      { type: "fix", text: "Corrigido problema onde campos obrigatórios não apareciam após edição de regras." },
    ],
  },
  {
    version: "2.3.2",
    date: "25 de Janeiro de 2026",
    highlights: "Correções importantes e melhoria na exportação de relatórios.",
    changes: [
      { type: "improvement", text: "Relatórios PDF agora incluem fotos em resolução otimizada automaticamente." },
      { type: "fix", text: "Corrigido erro ao duplicar questionários com mais de 20 campos." },
      { type: "fix", text: "Assinatura digital agora funciona corretamente em tablets Android." },
    ],
  },
  {
    version: "2.3.0",
    date: "8 de Janeiro de 2026",
    highlights: "Lançamento de templates de checklist e novo dashboard.",
    changes: [
      { type: "feature", text: "Biblioteca de templates — escolha entre modelos prontos para veículos, equipamentos e mais." },
      { type: "feature", text: "Novo dashboard com visão geral de checklists realizados, pendentes e com alertas." },
      { type: "improvement", text: "Busca no painel administrativo agora filtra por tags, operador e data." },
      { type: "improvement", text: "Tempo de carregamento do app reduzido em 40%." },
    ],
  },
  {
    version: "2.2.0",
    date: "15 de Dezembro de 2025",
    highlights: "Suporte a múltiplos idiomas e integração com API.",
    changes: [
      { type: "feature", text: "API REST para integração com sistemas externos (ERP, CRM)." },
      { type: "feature", text: "Suporte a Português, Espanhol e Inglês no app." },
      { type: "improvement", text: "Novo fluxo de onboarding para novos administradores." },
      { type: "fix", text: "Corrigido problema com fotos em modo retrato em dispositivos Samsung." },
    ],
  },
];

const typeConfig = {
  feature: { label: "Novidade", icon: Sparkles, color: "text-primary bg-sidebar-accent" },
  fix: { label: "Correção", icon: Bug, color: "text-destructive bg-destructive/10" },
  improvement: { label: "Melhoria", icon: Wrench, color: "text-info bg-info/10" },
};

export default function Changelog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 max-w-3xl mx-auto flex-1">
        <Breadcrumbs items={[{ label: "Changelog" }]} />

        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
            <History className="h-5 w-5 text-success" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold">Changelog</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Acompanhe todas as novidades, melhorias e correções da plataforma VexSoft.
        </p>

        <div className="space-y-8">
          {changelog.map((entry) => (
            <article key={entry.version} className="border border-border rounded-xl overflow-hidden">
              <div className="bg-surface px-5 py-4 border-b border-border">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="font-bold text-lg">v{entry.version}</h2>
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{entry.highlights}</p>
              </div>
              <div className="p-5 space-y-3">
                {entry.changes.map((change, i) => {
                  const config = typeConfig[change.type];
                  const Icon = config.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${config.color}`}>
                        <Icon className="h-3 w-3" />
                        {config.label}
                      </span>
                      <p className="text-sm text-muted-foreground">{change.text}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
