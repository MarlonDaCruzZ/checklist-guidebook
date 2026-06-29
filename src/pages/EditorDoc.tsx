import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCategorias } from "@/hooks/useDocs";
import {
  createArtigo,
  updateArtigo,
  getArtigoById,
  type ArtigoInput,
} from "@/lib/docs";
import { ArrowLeft, Save, Loader2, Eye, Code } from "lucide-react";

function slugify(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const VAZIO: ArtigoInput = {
  titulo: "",
  slug: "",
  categoria_id: "",
  resumo: "",
  conteudo: "",
  ordem: 1,
  status: "rascunho",
};

export default function EditorDoc() {
  const { id } = useParams<{ id: string }>();
  const editando = Boolean(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: categorias } = useCategorias();
  const [form, setForm] = useState<ArtigoInput>(VAZIO);
  const [slugManual, setSlugManual] = useState(false);
  const [erro, setErro] = useState("");
  const [abaPreview, setAbaPreview] = useState(false);

  // Carrega o documento ao editar
  const { data: artigo } = useQuery({
    queryKey: ["admin-artigo", id],
    queryFn: () => getArtigoById(id!),
    enabled: editando,
  });

  useEffect(() => {
    if (artigo) {
      setForm({
        titulo: artigo.titulo,
        slug: artigo.slug,
        categoria_id: artigo.categoria_id,
        resumo: artigo.resumo ?? "",
        conteudo: artigo.conteudo,
        ordem: artigo.ordem,
        status: artigo.status,
      });
      setSlugManual(true);
    }
  }, [artigo]);

  const set = <K extends keyof ArtigoInput>(campo: K, valor: ArtigoInput[K]) =>
    setForm((f) => ({ ...f, [campo]: valor }));

  const salvar = useMutation({
    mutationFn: () =>
      editando ? updateArtigo(id!, form) : createArtigo(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-artigos"] });
      queryClient.invalidateQueries({ queryKey: ["categorias"] });
      navigate("/gerenciar");
    },
    onError: (e: unknown) => {
      const msg = e instanceof Error ? e.message : "Erro ao salvar.";
      setErro(
        msg.includes("duplicate") || msg.includes("unique")
          ? "Já existe um documento com esse endereço (slug). Altere o título ou o slug."
          : "Não foi possível salvar. Verifique seu acesso e tente novamente."
      );
    },
  });

  const handleSalvar = () => {
    setErro("");
    if (!form.titulo.trim()) return setErro("Informe o título.");
    if (!form.categoria_id) return setErro("Selecione a categoria.");
    if (!form.conteudo.trim()) return setErro("O conteúdo não pode ficar vazio.");
    if (!form.slug.trim()) return setErro("O slug não pode ficar vazio.");
    salvar.mutate();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container py-8 flex-1 max-w-4xl">
        <button
          onClick={() => navigate("/gerenciar")}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para a lista
        </button>

        <h1 className="text-2xl font-extrabold mb-6">
          {editando ? "Editar documento" : "Novo documento"}
        </h1>

        {erro && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
            {erro}
          </div>
        )}

        <div className="space-y-5">
          {/* Título */}
          <div className="space-y-2">
            <Label htmlFor="titulo">Título</Label>
            <Input
              id="titulo"
              value={form.titulo}
              onChange={(e) => {
                set("titulo", e.target.value);
                if (!slugManual) set("slug", slugify(e.target.value));
              }}
              placeholder="Ex.: Como configurar a sincronização"
              className="h-11"
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug">Endereço (slug)</Label>
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => {
                setSlugManual(true);
                set("slug", slugify(e.target.value));
              }}
              placeholder="como-configurar-sincronizacao"
              className="h-11 font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">O artigo ficará em /doc/{form.slug || "..."}</p>
          </div>

          {/* Categoria + Ordem + Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <select
                id="categoria"
                value={form.categoria_id}
                onChange={(e) => set("categoria_id", e.target.value)}
                className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm"
              >
                <option value="">Selecione...</option>
                {categorias?.map((c) => (
                  <option key={c.id} value={c.id}>{c.nome}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ordem">Ordem de exibição</Label>
              <Input
                id="ordem"
                type="number"
                min={0}
                value={form.ordem}
                onChange={(e) => set("ordem", Number(e.target.value))}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={form.status}
                onChange={(e) => set("status", e.target.value as ArtigoInput["status"])}
                className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm"
              >
                <option value="rascunho">Rascunho</option>
                <option value="publicado">Publicado</option>
                <option value="arquivado">Arquivado</option>
              </select>
            </div>
          </div>

          {/* Resumo */}
          <div className="space-y-2">
            <Label htmlFor="resumo">Resumo (opcional)</Label>
            <Input
              id="resumo"
              value={form.resumo ?? ""}
              onChange={(e) => set("resumo", e.target.value)}
              placeholder="Frase curta exibida nos cards e na busca"
              className="h-11"
            />
          </div>

          {/* Conteúdo (Markdown + preview) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Conteúdo (Markdown)</Label>
              <div className="flex rounded-md border border-border overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => setAbaPreview(false)}
                  className={`px-3 py-1.5 flex items-center gap-1 ${!abaPreview ? "bg-muted font-medium" : "text-muted-foreground"}`}
                >
                  <Code className="h-3.5 w-3.5" /> Editar
                </button>
                <button
                  type="button"
                  onClick={() => setAbaPreview(true)}
                  className={`px-3 py-1.5 flex items-center gap-1 ${abaPreview ? "bg-muted font-medium" : "text-muted-foreground"}`}
                >
                  <Eye className="h-3.5 w-3.5" /> Pré-visualizar
                </button>
              </div>
            </div>

            {abaPreview ? (
              <article className="prose prose-slate dark:prose-invert max-w-none min-h-[300px] border border-border rounded-md p-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {form.conteudo || "_Nada para pré-visualizar ainda._"}
                </ReactMarkdown>
              </article>
            ) : (
              <textarea
                value={form.conteudo}
                onChange={(e) => set("conteudo", e.target.value)}
                placeholder={"# Título\n\nEscreva o conteúdo em Markdown..."}
                className="w-full min-h-[300px] rounded-md border border-border bg-background p-4 text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            )}
            <p className="text-xs text-muted-foreground">
              Suporta Markdown: # títulos, **negrito**, listas, links, tabelas, &gt; citações.
            </p>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              onClick={handleSalvar}
              disabled={salvar.isPending}
              className="gradient-primary text-primary-foreground border-0"
            >
              {salvar.isPending ? (
                <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Salvando...</>
              ) : (
                <><Save className="h-4 w-4 mr-2" /> Salvar</>
              )}
            </Button>
            <Button variant="outline" onClick={() => navigate("/gerenciar")}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
