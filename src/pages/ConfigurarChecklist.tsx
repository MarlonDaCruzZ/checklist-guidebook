import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CodeBlock } from "@/components/CodeBlock";
import { Settings, Clock } from "lucide-react";

const steps = [
  {
    id: "painel",
    title: "Entrar no painel administrativo",
    content: "Acesse app.vexsoft.com.br e faça login com suas credenciais de administrador. No menu lateral esquerdo, localize a seção \"Questionários\".",
    tip: "Certifique-se de que você tenha permissões de administrador para criar questionários.",
  },
  {
    id: "criar",
    title: "Criar novo questionário",
    content: "Clique em \"Novo Questionário\". Na tela de criação, defina:\n\n• Título: ex. \"Vistoria de devolução de veículo\"\n• Descrição: breve explicação do objetivo\n• Tags: palavras-chave para organizar (ex.: \"veículo\", \"devolução\", \"frota\")",
    tip: "Use nomes descritivos — seus operadores precisam identificar rapidamente o checklist correto no app.",
  },
  {
    id: "campos",
    title: "Adicionar campos",
    content: "Na aba \"Campos\", clique em \"Adicionar Campo\" para cada item que deseja coletar. Tipos disponíveis:\n\n• Texto curto / longo\n• Seleção única / múltipla\n• Data e hora\n• Foto (captura da câmera)\n• Assinatura digital\n• Checkbox de aceite\n\nPara cada campo, defina: nome, tipo, obrigatoriedade e placeholder (texto de exemplo).",
    tip: "Campos obrigatórios são indicados com asterisco (*) no app. Use com moderação para não tornar o preenchimento tedioso.",
  },
  {
    id: "regras",
    title: "Definir regras de exibição condicional",
    content: "Na aba \"Regras\", você pode configurar condições para exibir ou ocultar campos. Exemplo:\n\n• Se o campo \"Estado do veículo\" = \"Danificado\", então mostrar campo \"Descrição do dano\" e \"Foto do dano\".\n\nIsso permite checklists dinâmicos que se adaptam às respostas do operador.",
    tip: "Teste suas regras no modo preview antes de publicar para garantir que a lógica está correta.",
  },
  {
    id: "assinatura",
    title: "Configurar termos de aceite e assinatura digital",
    content: "Na aba \"Finalização\", ative:\n\n• Termos de aceite: insira o texto dos termos que o operador deve aceitar antes de enviar.\n• Assinatura digital: habilite a captura de assinatura por toque na tela.\n\nAmbos ficam registrados com timestamp e vinculados ao checklist preenchido.",
    tip: "A assinatura digital tem valor jurídico. Consulte sua equipe legal sobre os termos adequados.",
  },
  {
    id: "publicar",
    title: "Publicar e testar no app",
    content: "Clique em \"Publicar\" para tornar o questionário disponível no app. Em seguida:\n\n1. Abra o app VexSoft no celular/tablet\n2. Faça login com uma conta de operador\n3. O novo checklist aparecerá na lista\n4. Preencha um teste completo\n5. Verifique os dados no painel administrativo\n\nO app funciona em modo offline — os dados são sincronizados automaticamente quando houver conexão.",
    tip: "Faça pelo menos um teste completo antes de liberar para a equipe. Use o \"modo offline\" para simular cenários sem internet.",
  },
];

const exampleJson = `{
  "titulo": "Vistoria de Devolução",
  "descricao": "Checklist para devolução de veículos",
  "tags": ["veículo", "devolução", "frota"],
  "campos": [
    {
      "nome": "Placa do veículo",
      "tipo": "texto_curto",
      "obrigatorio": true
    },
    {
      "nome": "Estado geral",
      "tipo": "selecao_unica",
      "opcoes": ["Bom", "Regular", "Danificado"],
      "obrigatorio": true
    },
    {
      "nome": "Fotos do veículo",
      "tipo": "foto",
      "quantidade_min": 4,
      "obrigatorio": true
    },
    {
      "nome": "Assinatura do responsável",
      "tipo": "assinatura",
      "obrigatorio": true
    }
  ]
}`;

export default function ConfigurarChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Configurar Checklist" },
          ]} />

          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold">Como criar um checklist novo</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 8 min de leitura</span>
            <span>•</span>
            <span>Atualizado em Jan 2026</span>
          </div>

          {/* Summary */}
          <div className="bg-surface rounded-xl p-5 mb-6 border border-border">
            <h3 className="font-semibold text-sm mb-2">📋 Resumo</h3>
            <p className="text-sm text-muted-foreground">
              Aprenda em 7 passos como criar, testar e publicar um checklist completo para sua equipe. Inclui exemplos com dados fictícios para um cenário de "devolução de veículo".
            </p>
          </div>

          {/* Quando usar */}
          <div className="bg-sidebar-accent rounded-xl p-5 mb-8 border border-primary/10">
            <h3 className="font-semibold text-sm mb-2 text-primary">⏱️ Quando usar</h3>
            <p className="text-sm text-muted-foreground">
              Sempre que precisar criar um novo questionário ou checklist a partir do zero, ou quando quiser entender como configurar campos, regras e assinaturas.
            </p>
          </div>

          {/* Steps */}
          <h2 className="text-xl font-bold mb-6">Passo a passo</h2>
          <div className="space-y-8 mb-10">
            {steps.map((step, i) => (
              <section key={step.id} id={step.id} className="scroll-mt-24">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-4 flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-3">
                      {step.content}
                    </div>

                    {/* Screenshot placeholder */}
                    <div className="bg-muted rounded-lg h-48 flex items-center justify-center border border-border mb-3">
                      <span className="text-xs text-muted-foreground">📸 Captura de tela — {step.title}</span>
                    </div>

                    {/* Tip */}
                    <div className="bg-surface rounded-lg p-3 border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">💡 Dica:</span> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Example */}
          <h2 className="text-xl font-bold mb-4">Exemplo prático</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Abaixo, um exemplo de configuração JSON para um checklist de "Devolução de Veículo". Use como referência para importação:
          </p>
          <CodeBlock code={exampleJson} language="json" />

          {/* FAQ for this article */}
          <h2 className="text-xl font-bold mt-10 mb-4">Perguntas frequentes</h2>
          <div className="space-y-4 mb-6">
            {[
              { q: "Posso editar um checklist depois de publicado?", a: "Sim! Você pode editar campos e regras a qualquer momento. As alterações refletem automaticamente no app na próxima sincronização." },
              { q: "Quantos campos posso adicionar?", a: "Não há limite técnico. Recomendamos até 30 campos por checklist para uma experiência fluida no app." },
              { q: "Posso duplicar um checklist existente?", a: "Sim. Na lista de questionários, clique nos 3 pontos e selecione \"Duplicar\"." },
            ].map((faq) => (
              <div key={faq.q} className="bg-surface rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-sm mb-1">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-8 mb-4">
            <a href="https://app.vexsoft.com.br" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Testar no app
            </a>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-medium text-sm hover:bg-muted transition-colors">
              Baixar PDF
            </button>
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
