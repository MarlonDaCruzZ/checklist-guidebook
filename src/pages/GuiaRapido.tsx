import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Crie sua conta",
    desc: "Acesse app.vexsoft.com.br e clique em \"Criar conta\". Preencha seus dados e confirme o e-mail.",
  },
  {
    title: "Acesse o painel administrativo",
    desc: "Após o login, você será direcionado ao painel principal. É aqui que toda a configuração acontece.",
  },
  {
    title: "Crie seu primeiro questionário",
    desc: "No menu lateral, clique em \"Questionários\" → \"Novo questionário\". Defina título e descrição.",
  },
  {
    title: "Adicione campos ao checklist",
    desc: "Escolha entre texto, seleção, foto, assinatura e mais. Arraste para reordenar.",
  },
  {
    title: "Publique e teste no app",
    desc: "Clique em \"Publicar\". Abra o app mobile, faça login e execute seu primeiro checklist.",
  },
];

export default function GuiaRapido() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Guia Rápido" }]} />

          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-sidebar-accent px-3 py-1 rounded-full mb-4">
            <Zap className="h-4 w-4" /> 5 minutos de leitura
          </div>

          <h1 className="text-3xl font-extrabold mb-3">Guia Rápido — 5 minutos para começar</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Tudo o que você precisa para configurar sua conta, criar seu primeiro checklist e começar a coletar dados com a VexSoft.
          </p>

          {/* Summary */}
          <div className="bg-surface rounded-xl p-5 mb-8 border border-border">
            <h3 className="font-semibold text-sm mb-2">📋 Resumo</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Criar conta e acessar o painel</li>
              <li>• Criar um questionário com campos básicos</li>
              <li>• Publicar e testar no app mobile</li>
            </ul>
          </div>

          {/* Quando usar */}
          <div className="bg-sidebar-accent rounded-xl p-5 mb-8 border border-primary/10">
            <h3 className="font-semibold text-sm mb-2 text-primary">⏱️ Quando usar este guia</h3>
            <p className="text-sm text-muted-foreground">
              Use este guia quando você acabou de criar sua conta e quer entender rapidamente o fluxo básico da plataforma.
            </p>
          </div>

          {/* Steps */}
          <h2 className="text-xl font-bold mb-5">Passos</h2>
          <div className="space-y-6 mb-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  {/* Placeholder for screenshot */}
                  <div className="mt-3 bg-muted rounded-lg h-40 flex items-center justify-center border border-border">
                    <span className="text-xs text-muted-foreground">📸 Captura de tela — Passo {i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist mínimo */}
          <div className="bg-surface rounded-xl p-5 mb-8 border border-border">
            <h3 className="font-semibold text-sm mb-3">✅ Checklist mínimo obrigatório</h3>
            <ul className="space-y-2">
              {["Conta criada e e-mail confirmado", "Pelo menos 1 questionário criado", "Pelo menos 3 campos adicionados", "Questionário publicado", "App mobile instalado e logado"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Next step */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-sm mb-2">Próximo passo</h3>
            <Link
              to="/documentacao/configurar-checklist"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              Configurar Checklist — Passo a passo completo <ArrowRight className="h-3.5 w-3.5" />
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
