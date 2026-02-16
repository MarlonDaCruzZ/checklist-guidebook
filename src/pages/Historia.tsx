import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Calendar, Building, Sparkles } from "lucide-react";

export default function Historia() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "História" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Nossa História</h1>
          <p className="text-muted-foreground mb-6">Conheça como o VEXSOFT nasceu e se tornou referência em checklist digital no Brasil.</p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="w-px flex-1 bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-base mb-1">2017 — O início</h3>
                <p className="text-sm text-muted-foreground">
                  Nascemos em 2017, com o objetivo de criar um aplicativo de checklist e vistorias competitivo. Inicialmente focado em locadoras de veículos, o VEXSOFT veio para aposentar formas primitivas como checklist feitos com papel e caneta.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Building className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="w-px flex-1 bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-base mb-1">Crescimento</h3>
                <p className="text-sm text-muted-foreground">
                  Com o tempo, o aplicativo expandiu a ponto de atender não somente locadoras, mas quaisquer meios de checklist digital — desde vistorias de pátio até vistorias de aeronaves, embarcações, veículos agrícolas e autos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Hoje — +800 empresas ativas</h3>
                <p className="text-sm text-muted-foreground">
                  Possuímos mais de 800 empresas ativas e já realizamos 5 milhões de vistorias. Atendemos locadoras, concessionárias, transportadoras, empresas com frota própria, centros automotivos e oficinas mecânicas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold mb-3 mt-0">Origem do nome VEXSOFT</h2>
            <p className="text-sm text-muted-foreground mb-2">
              No início da INOVACLICK, todos os executáveis eram chamados de "Express" — Clínica Express, Faturamento Express, etc.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Quando decidimos transformar o projeto de vistoria em produto, precisávamos registrar um domínio. Como já chamávamos os projetos de "Express", decidimos usar "Vistoria Express" — que virou <strong>"VEX"</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              O domínio vex.com.br não estava disponível, então surgiu a ideia de juntar com "Software" — nascendo <strong>VEXSOFT</strong>.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 mb-8">
            <p className="text-sm text-muted-foreground">
              <strong>Data de nascimento:</strong> 17 de janeiro de 2017
            </p>
          </div>

          <FeedbackWidget />
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
