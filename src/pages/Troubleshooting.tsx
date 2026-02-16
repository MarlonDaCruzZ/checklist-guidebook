import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const problems = [
  {
    title: "Checklist não sincroniza",
    symptoms: ["O checklist preenchido fica com status \"Pendente\" por mais de 5 minutos", "Mensagem de erro \"Falha na sincronização\""],
    causes: ["Conexão de internet instável ou ausente", "Versão do app desatualizada", "Excesso de fotos em alta resolução"],
    solution: [
      "Verifique a conexão com a internet (Wi-Fi ou dados móveis)",
      "Atualize o app para a versão mais recente na App Store / Play Store",
      "Reduza a qualidade das fotos nas configurações do app",
      "Force a sincronização: Menu → Configurações → Sincronizar agora",
      "Se persistir, feche o app completamente e abra novamente",
    ],
  },
  {
    title: "Fotos não carregam no app",
    symptoms: ["Placeholder cinza no lugar das fotos", "Erro \"Não foi possível carregar a imagem\""],
    causes: ["Permissão de câmera/galeria não concedida", "Armazenamento do dispositivo cheio", "Formato de imagem incompatível"],
    solution: [
      "Vá em Configurações do celular → Apps → VexSoft → Permissões → Câmera e Armazenamento: ativar",
      "Libere espaço no dispositivo (mínimo 500MB livres)",
      "Tente capturar a foto novamente em vez de selecionar da galeria",
      "Se o problema for em fotos da galeria, converta para JPEG antes de enviar",
    ],
  },
  {
    title: "Campos obrigatórios não aparecem",
    symptoms: ["Campos configurados como obrigatórios não são exibidos no app", "O operador consegue finalizar o checklist sem preencher campos esperados"],
    causes: ["Regras de exibição condicional bloqueando o campo", "Cache do app desatualizado", "Campo vinculado a uma versão anterior do questionário"],
    solution: [
      "No painel admin, verifique se há regras condicionais vinculadas ao campo",
      "Confirme que a condição está sendo atendida (ex.: o campo-pai tem o valor correto)",
      "No app, force atualização: Menu → Atualizar questionários",
      "Se necessário, desative a regra condicional temporariamente para confirmar que o campo funciona",
    ],
  },
  {
    title: "Erro ao gerar relatório PDF",
    symptoms: ["Botão \"Gerar PDF\" não responde", "PDF gerado em branco ou incompleto"],
    causes: ["Dados muito extensos (muitas fotos em alta resolução)", "Navegador com bloqueador de popup ativo"],
    solution: [
      "Desative o bloqueador de popup do navegador para app.vexsoft.com.br",
      "Tente gerar o relatório em outro navegador (Chrome recomendado)",
      "Se houver muitas fotos, tente gerar por seções menores",
      "Entre em contato com o suporte se o problema persistir",
    ],
  },
];

export default function Troubleshooting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Solução de Problemas" },
          ]} />

          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Solução de Problemas</h1>
          </div>

          <p className="text-muted-foreground mb-8">
            Encontre soluções rápidas para os problemas mais comuns reportados pelos nossos usuários.
          </p>

          <div className="space-y-8">
            {problems.map((prob, i) => (
              <article key={i} className="border border-border rounded-xl overflow-hidden">
                <div className="bg-surface px-5 py-4 border-b border-border">
                  <h2 className="font-bold text-lg">{prob.title}</h2>
                </div>
                <div className="p-5 space-y-5">
                  {/* Symptoms */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1.5">
                      <XCircle className="h-4 w-4 text-destructive" /> Sintomas
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-5">
                      {prob.symptoms.map((s) => <li key={s} className="list-disc">{s}</li>)}
                    </ul>
                  </div>

                  {/* Causes */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4 text-warning" /> Causas prováveis
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-5">
                      {prob.causes.map((c) => <li key={c} className="list-disc">{c}</li>)}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Passos para resolver
                    </h4>
                    <ol className="text-sm text-muted-foreground space-y-2 ml-5">
                      {prob.solution.map((s, j) => (
                        <li key={j} className="list-decimal">
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Still stuck */}
          <div className="mt-10 p-5 bg-surface rounded-xl border border-border text-center">
            <h3 className="font-semibold mb-2">Problema não resolvido?</h3>
            <p className="text-sm text-muted-foreground mb-4">Entre em contato com nosso suporte técnico.</p>
            <a
              href="https://wa.me/message/3MPLPHHHKVZSP1"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm"
            >
              Falar com suporte
            </a>
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
