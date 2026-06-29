import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCategorias } from "@/hooks/useDocs";
import { listAllArtigos, deleteArtigo } from "@/lib/docs";
import { Plus, Search, Pencil, Trash2, FileText, Loader2 } from "lucide-react";

const STATUS_LABEL: Record<string, string> = {
  publicado: "Publicado",
  rascunho: "Rascunho",
  arquivado: "Arquivado",
};

export default function GerenciarDocs() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [busca, setBusca] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  const { data: categorias } = useCategorias();
  const { data: artigos, isLoading } = useQuery({
    queryKey: ["admin-artigos", busca, categoriaId],
    queryFn: () => listAllArtigos({ busca, categoriaId: categoriaId || undefined }),
  });

  const remover = useMutation({
    mutationFn: (id: string) => deleteArtigo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-artigos"] }),
  });

  const nomeCategoria = (id: string) =>
    categorias?.find((c) => c.id === id)?.nome ?? "—";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h1 className="text-2xl font-extrabold flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Gerenciar documentação
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Crie, edite e organize os artigos da base de conhecimento.
            </p>
          </div>
          <Button onClick={() => navigate("/gerenciar/novo")} className="gradient-primary text-primary-foreground border-0">
            <Plus className="h-4 w-4 mr-2" /> Novo documento
          </Button>
        </div>

        {/* Filtros */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por título..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-9 h-10"
            />
          </div>
          <select
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            className="h-10 rounded-md border border-border bg-background px-3 text-sm min-w-[200px]"
          >
            <option value="">Todas as categorias</option>
            {categorias?.map((c) => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>
        </div>

        {/* Lista */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : !artigos || artigos.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum documento encontrado.
          </div>
        ) : (
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Título</th>
                  <th className="px-4 py-3 font-semibold">Categoria</th>
                  <th className="px-4 py-3 font-semibold w-20 text-center">Ordem</th>
                  <th className="px-4 py-3 font-semibold w-28">Status</th>
                  <th className="px-4 py-3 font-semibold w-24 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {artigos.map((a) => (
                  <tr key={a.id} className="border-t border-border hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium">{a.titulo}</td>
                    <td className="px-4 py-3 text-muted-foreground">{nomeCategoria(a.categoria_id)}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{a.ordem}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          a.status === "publicado"
                            ? "bg-green-500/15 text-green-600 dark:text-green-400"
                            : a.status === "rascunho"
                            ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {STATUS_LABEL[a.status] ?? a.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          to={`/gerenciar/${a.id}`}
                          className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                          title="Editar"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => {
                            if (confirm(`Excluir o documento "${a.titulo}"? Esta ação não pode ser desfeita.`)) {
                              remover.mutate(a.id);
                            }
                          }}
                          className="p-2 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                          title="Excluir"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
