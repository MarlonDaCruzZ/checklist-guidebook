import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Lock, CheckCircle, XCircle } from "lucide-react";

export default function ConfiguracaoPDF() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Configurações", href: "/documentacao/configuracoes" },
            { label: "Configuração do PDF" },
          ]} />

          <h1 className="text-3xl font-extrabold mb-2">Configurações do PDF</h1>
          <p className="text-muted-foreground mb-6">Nesta tela você pode configurar diversas informações e comportamentos do PDF final da vistoria, garantindo que o documento fique alinhado às regras, identidade e necessidades da sua empresa.</p>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8 text-center">
            <p className="text-sm text-muted-foreground">📸 Captura de tela — Tela de configuração do PDF</p>
          </div>

          <h2 className="text-xl font-bold mb-4" id="assinatura">Termo de Aceite</h2>
          <p className="text-muted-foreground mb-6">No campo Termos de Aceite, é possível inserir textos com informações relevantes que serão apresentadas ao cliente no momento da vistoria. O objetivo é garantir que o cliente esteja <strong>ciente e de acordo</strong> com as diretrizes definidas pela empresa, como regras de locação, uso do veículo e responsabilidades. O conteúdo será exibido no PDF final.</p>

          <h2 className="text-xl font-bold mb-4">Cabeçalho do PDF</h2>
          <p className="text-muted-foreground mb-2">No campo Texto Cabeçalho PDF, adicione informações como:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-6">
            <li>Razão social da empresa</li>
            <li>CNPJ</li>
            <li>Telefones de contato</li>
            <li>E-mail</li>
            <li>Outras informações institucionais</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Rodapé do PDF</h2>
          <p className="text-muted-foreground mb-2">No Texto Rodapé PDF, informe:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-8">
            <li>Endereço da empresa</li>
            <li>Cidade / Estado</li>
            <li>Informações legais ou observações adicionais</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">⚙️ Parâmetros adicionais</h2>
          <p className="text-muted-foreground mb-6">Além dos textos, esta tela possui <strong>4 parâmetros configuráveis</strong>:</p>

          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-card">
              <h3 className="font-semibold text-sm mb-2">1. Mostrar nome da foto ao lado do número</h3>
              <p className="text-sm text-muted-foreground mb-2">Parâmetro <strong>ativado por padrão</strong>. Quando ativo, as fotos exibidas no PDF possuem um título ao lado do número da imagem.</p>
              <div className="flex gap-3 text-xs">
                <span className="flex items-center gap-1 text-primary"><CheckCircle className="h-3.5 w-3.5" /> Ativo: título exibido</span>
                <span className="flex items-center gap-1 text-muted-foreground"><XCircle className="h-3.5 w-3.5" /> Inativo: título oculto</span>
              </div>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <h3 className="font-semibold text-sm mb-2">2. Remover título do grupo das perguntas</h3>
              <p className="text-sm text-muted-foreground">No questionário, as perguntas podem ser organizadas por grupos (Parte externa, Parte interna, Motor). Ao ativar, o PDF <strong>não exibirá</strong> o nome do grupo, mostrando apenas as perguntas.</p>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <h3 className="font-semibold text-sm mb-2">3. Mostrar número do contrato</h3>
              <p className="text-sm text-muted-foreground">Ao ativar, o número da vistoria será exibido no PDF como <strong>Nº Contrato</strong>. Se você utiliza o campo "Número do Contrato", serão exibidos os dados informados na vistoria.</p>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-2">4. Utilizar senha para acessar o PDF</h3>
                  <p className="text-sm text-muted-foreground mb-3">Como a vistoria pode conter dados sensíveis, este parâmetro protege o PDF com senha. A senha será a <strong>placa do veículo</strong>, sempre em letras maiúsculas.</p>
                  <div className="bg-muted rounded-lg px-4 py-2.5">
                    <p className="text-xs font-mono">Exemplo — Placa: <strong>ABC2D20</strong> → Senha: <strong>ABC2D20</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link to="/documentacao/integracao" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Integração <ArrowRight className="h-4 w-4" />
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
