import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Smartphone, CheckCircle, AlertTriangle } from "lucide-react";

export default function AparelhosHomologados() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0 max-w-3xl">
          <Breadcrumbs items={[{ label: "Documentação", href: "/documentacao" }, { label: "Aparelhos Homologados" }]} />

          <h1 className="text-3xl font-extrabold mb-2">Dispositivos Recomendados</h1>
          <p className="text-muted-foreground mb-6">Lista de aparelhos homologados para uso com o aplicativo VEX.</p>

          <div className="bg-sidebar-accent border border-border rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold mb-3 mt-0">Recomendações gerais</h2>
            <ul className="space-y-2">
              {[
                "Sistema operacional Android versão 12 ou superior",
                "Mínimo de 4 GB de memória RAM",
                "Pelo menos 8 GB de espaço livre em disco",
                "Câmera funcional com flash, conectividade Wi-Fi/3G/4G e tela em bom estado",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              O VEX já foi utilizado com sucesso em <strong>mais de 450 modelos diferentes</strong> de smartphones e tablets. Esta lista apresenta os modelos mais recomendados com base em testes e feedback de campo.
            </p>
          </div>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Smartphones recomendados
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-semibold text-base mb-3">Samsung</h3>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Galaxy A01 / A01 Core / A03 / A03S / A05 / A10 / A11 / A12 / A13 / A14 / A15 / A20 / A21s / A22 / A23 / A24 / A25 5G / A30 / A31 / A32 / A33 5G / A34 / A35 / A50 / A51 / A52 / A53 / A54 / A70 / A71 / A72 / A73
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Galaxy M02 / M03 / M12 / M31 / M32 / M52 / M62
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Galaxy S8+ / S10 / S10E / S20+ / S20 FE / S21 / S21 FE / S22 / S22 Ultra / S23 Ultra / S24 / S24+ / S24 Ultra / S25 Ultra
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Motorola</h3>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Moto G04 / G08 / G09 / G13 / G14 / G20 / G22 / G24 / G30 / G31 / G32 / G34 / G35 / G41 / G50 / G52 / G53 / G54 / G60 / G64 5G / G73 / G82 / G84 / G84 5G
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Moto E6s / E7 / E7 Plus / E13 / E22
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Moto Edge 20 Lite / Edge 30 / Edge 30 Neo / Edge 40 Neo / Edge 50 Fusion
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Xiaomi / Redmi / POCO</h3>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Redmi Note 8 / Note 9 / Note 10 / Note 11 / Note 12 / Note 13 / POCO M3 / POCO X3 / Xiaomi 11 Lite / Xiaomi 12
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Outros fabricantes</h3>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  LG K41S / K51S / K52 / K62 | Realme C21 / C25 | Nokia G20 / G50 | Multilaser diversos modelos | Positivo Twist
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">Tablets recomendados</h2>
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Samsung Galaxy Tab A7 / Tab A7 Lite / Tab A8 / Tab A9 / Tab A9+ / Tab S6 Lite / Tab S7 / Tab S8 | Multilaser M7 / M8 / M10
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
