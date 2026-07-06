import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocSidebar } from "@/components/DocSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { RichContent } from "@/components/RichContent";
import { useArtigo } from "@/hooks/useDocs";
import { incrementarVisualizacao } from "@/lib/docs";

export default function Artigo() {
  const { slug } = useParams<{ slug: string }>();
  const { data: artigo, isLoading, isError } = useArtigo(slug);

  useEffect(() => {
    if (artigo?.id) {
      incrementarVisualizacao(artigo.id).catch(() => {});
    }
  }, [artigo?.id]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex gap-8 flex-1">
        <DocSidebar />
        <main className="flex-1 min-w-0">
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
          )}

          {isError && (
            <div className="py-20 text-center">
              <h1 className="text-2xl font-bold mb-2">Artigo não encontrado</h1>
              <p className="text-muted-foreground mb-6">
                Este artigo pode ter sido movido ou ainda não foi publicado.
              </p>
              <Link to="/documentacao" className="text-primary font-medium hover:underline">
                Voltar para a documentação
              </Link>
            </div>
          )}

          {artigo && (
            <>
              <Breadcrumbs
                items={[
                  { label: "Documentação", href: "/documentacao" },
                  { label: artigo.categorias?.nome ?? "Artigo" },
                  { label: artigo.titulo },
                ]}
              />
              <div className="mt-4">
                <RichContent html={artigo.conteudo_html} markdown={artigo.conteudo} />
              </div>
              {artigo.updated_at && (
                <p className="text-xs text-muted-foreground mt-8 pt-4 border-t border-border">
                  Atualizado em {new Date(artigo.updated_at).toLocaleDateString("pt-BR")}
                </p>
              )}
            </>
          )}
        </main>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
