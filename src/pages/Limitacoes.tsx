import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { XCircle } from "lucide-react";

const limitations = [
  { title: "Edição de vistorias já sincronizadas", desc: "Após a finalização e sincronização, por motivos de segurança e integridade das informações, o VEX não permite mais a edição dos dados." },
  { title: "Inserção de fotos da galeria do dispositivo", desc: "Não é possível anexar imagens da galeria do smartphone. O aplicativo permite apenas o uso da câmera em tempo real para garantir autenticidade e rastreabilidade." },
  { title: "Uso de caracteres especiais no campo da placa", desc: "O campo de placa aceita apenas letras, números e o símbolo de traço (–). Caracteres especiais não são reconhecidos." },
  { title: "Salvar vistorias sem template obrigatório de fotos", desc: "Se um template de fotos foi configurado pelo gestor, seu preenchimento é obrigatório. A etapa só pode ser pulada se não houver template definido." },
  { title: "Salvar vistorias sem perguntas obrigatórias", desc: "Todas as perguntas marcadas com asterisco (*) devem ser respondidas obrigatoriamente para que a vistoria possa ser salva." },
];

export default function Limitacoes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Limitações do App" }]} />

          <h1 className="text-3xl font-extrabold mb-2">O que não é possível fazer com o VEX</h1>
          <p className="text-muted-foreground mb-6">Conheça as limitações do aplicativo VEX para evitar dúvidas durante o uso.</p>

          <div className="space-y-4 mb-8">
            {limitations.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{i + 1}. {item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
