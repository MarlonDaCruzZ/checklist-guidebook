import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";

const fieldTypes = [
  { name: "Texto", desc: "Campo onde o vistoriador pode escrever livremente. Permite estipular quantidade mínima e máxima de caracteres.", ideal: "Nomes, endereços, observações e dados com zeros à esquerda (CPF, RG, chassi, renavam)." },
  { name: "Seleção", desc: "Campo selecionável com opções personalizadas conforme a necessidade.", ideal: "Status (Ativo/Inativo, Sim/Não), tipo de veículo, combustível, categoria." },
  { name: "Data", desc: "Inicia com a data atual da vistoria, mas pode ser alterada pelo vistoriador.", ideal: "Orçamentos, identificação de datas de batidas, agendamentos." },
  { name: "Hora", desc: "Registra o horário. Mais utilizado para orçamentos ou identificação de horários de ocorrência.", ideal: "Horários de atendimento, turnos e cálculos de duração." },
  { name: "Número Inteiro", desc: "Aceita somente números inteiros. Zeros à esquerda são removidos automaticamente.", ideal: "Quilometragem, ano do veículo, quantidade de pneus, número de portas." },
  { name: "Número Decimal", desc: "Aceita números com pontos e vírgulas. Mais utilizado para precificação.", ideal: "Pressão de pneus, medições técnicas, preços e avaliações." },
  { name: "Código de Barras", desc: "Permite a leitura de códigos de barras diretamente pelo app.", ideal: "VIN (Número de Identificação Veicular), componentes, peças e etiquetas de manutenção." },
  { name: "Nível", desc: "Escala de avaliação organizada em camadas ou graus de qualidade.", ideal: "Níveis de fluidos (óleo, combustível), estado de componentes (pneus, freios) e avaliações de desgaste." },
];

export default function CamposPersonalizaveis() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[
            { label: "Documentação", href: "/documentacao" },
            { label: "Configurações", href: "/documentacao/configuracoes" },
            { label: "Campos Personalizáveis" },
          ]} />

          <h1 className="text-3xl font-extrabold mb-2">Campos Personalizáveis</h1>
          <p className="text-muted-foreground mb-2">Tempo de leitura: <strong>6 min</strong></p>
          <p className="text-muted-foreground mb-6">Campos personalizáveis complementam as vistorias, podendo ser utilizados como perguntas conforme a necessidade da empresa para realização do checklist.</p>

          <h2 className="text-xl font-bold mb-4">Tipos de campos disponíveis</h2>
          <p className="text-muted-foreground mb-6">Atualmente, temos <strong>8 tipos</strong> de campos personalizáveis, tornando o checklist flexível e dinâmico:</p>

          <div className="space-y-4 mb-8">
            {fieldTypes.map((field, i) => (
              <div key={field.name} className="border border-border rounded-xl overflow-hidden bg-card">
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2">{i + 1}. {field.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{field.desc}</p>
                  <div className="bg-sidebar-accent rounded-lg px-4 py-2.5">
                    <p className="text-xs"><strong>Ideal para:</strong> {field.ideal}</p>
                  </div>
                </div>
                <div className="bg-muted/50 border-t border-border px-5 py-4 text-center">
                  <p className="text-xs text-muted-foreground">📸 Captura de tela — Configuração do campo tipo "{field.name}"</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4" id="regras">Regras Condicionais com o Tipo "Seleção"</h2>
          <p className="text-muted-foreground mb-4">Quando precisar que uma pergunta apareça apenas com base na resposta anterior, use regras condicionais.</p>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3">📝 Exemplo prático</h3>
            <p className="text-sm text-muted-foreground mb-2">Cenário: verificar se o veículo possui Giroled e, se sim, avaliar sua situação.</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Crie a pergunta: <strong>"Veículo contém Giroled?"</strong> com seleção <code className="bg-muted px-1.5 py-0.5 rounded text-xs">SIM | NÃO</code></li>
              <li>Crie a segunda pergunta: <strong>"Qual a situação do Giroled?"</strong> com seleção <code className="bg-muted px-1.5 py-0.5 rounded text-xs">BOM | RUIM | REGULAR</code></li>
              <li>Vincule a segunda pergunta à resposta <strong>"SIM"</strong> da primeira</li>
              <li>Se o vistoriador selecionar <strong>"NÃO"</strong>, a segunda pergunta não aparecerá</li>
            </ol>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong>Atenção:</strong> Para campos do tipo "Número Inteiro", zeros à esquerda são removidos automaticamente. Se precisar manter zeros à esquerda (ex: chassi, CPF), use o tipo <strong>Texto</strong>.
            </p>
          </div>

          <div className="flex gap-3">
            <Link to="/documentacao/configuracao-pdf" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm">
              Próximo: Configuração do PDF <ArrowRight className="h-4 w-4" />
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
