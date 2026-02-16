import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Conta e Acesso",
    items: [
      { q: "Como crio minha conta na VexSoft?", a: "Acesse app.vexsoft.com.br, clique em \"Criar conta\" e preencha seus dados. Você receberá um e-mail de confirmação para ativar sua conta." },
      { q: "Esqueci minha senha, como recuperar?", a: "Na tela de login, clique em \"Esqueci minha senha\". Informe seu e-mail cadastrado e siga as instruções enviadas para redefinir sua senha." },
      { q: "Posso ter múltiplos administradores?", a: "Sim! Vá em Configurações → Usuários → Adicionar Administrador. Você pode definir permissões específicas para cada perfil." },
    ],
  },
  {
    category: "Checklist e Questionários",
    items: [
      { q: "Quantos checklists posso criar?", a: "Não há limite na quantidade de checklists. Você pode criar quantos questionários precisar, organizados por tags e categorias." },
      { q: "Posso duplicar um checklist existente?", a: "Sim! Na lista de questionários, clique no menu de 3 pontos ao lado do checklist e selecione \"Duplicar\". O novo checklist terá todos os campos e regras copiados." },
      { q: "Os checklists funcionam offline?", a: "Sim! O app funciona completamente offline. Os dados são armazenados localmente e sincronizados automaticamente quando houver conexão com a internet." },
      { q: "Posso adicionar fotos e assinatura ao checklist?", a: "Sim! Os campos disponíveis incluem foto (captura pela câmera), assinatura digital por toque na tela, e muito mais." },
    ],
  },
  {
    category: "App Mobile",
    items: [
      { q: "O app está disponível para iOS e Android?", a: "Sim! O app VexSoft está disponível na App Store (iOS) e no Google Play (Android)." },
      { q: "Como atualizo o app?", a: "As atualizações são enviadas automaticamente pelas lojas de app. Acesse a App Store ou Play Store e verifique se há atualizações disponíveis." },
      { q: "O app consome muitos dados móveis?", a: "O app é otimizado para baixo consumo de dados. Fotos são comprimidas antes do envio, e a sincronização é eficiente. Em média, cada checklist consome menos de 2MB." },
    ],
  },
  {
    category: "Relatórios e Dados",
    items: [
      { q: "Como exporto os dados dos checklists?", a: "No painel administrativo, acesse Relatórios → Exportar. Você pode exportar em PDF, Excel ou CSV, com filtros por data, operador e questionário." },
      { q: "Os dados são seguros?", a: "Sim! Todos os dados são criptografados em trânsito (SSL/TLS) e em repouso. Nossos servidores estão hospedados no Brasil com backups diários." },
      { q: "Posso personalizar os relatórios?", a: "Sim! Você pode configurar quais campos aparecem no relatório, adicionar logo da sua empresa e definir o layout de impressão." },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 max-w-3xl mx-auto flex-1">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-info" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold">Perguntas Frequentes</h1>
        </div>
        <p className="text-muted-foreground mb-8">Respostas rápidas para as dúvidas mais comuns sobre a VexSoft.</p>

        <div className="space-y-8">
          {faqCategories.map((cat) => (
            <section key={cat.category}>
              <h2 className="font-bold text-lg mb-3">{cat.category}</h2>
              <Accordion type="multiple" className="space-y-2">
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${cat.category}-${i}`} className="border border-border rounded-xl px-4 data-[state=open]:bg-surface">
                    <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <FeedbackWidget />
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
