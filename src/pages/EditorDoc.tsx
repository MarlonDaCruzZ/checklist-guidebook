import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
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
import { ArrowLeft, Save, Loader2, Eye, Code, FileText } from "lucide-react";

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
    mutationFn: () => (editando ? updateArtigo(id!, form) : createArtigo(form)),
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
      <div className="container py-6 flex-1">
        {/* Barra superior */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div>
            <button
              onClick={() => navigate("/gerenciar")}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-1"
            >
              <ArrowLeft className="h-4 w-4" /> Documentos
            </button>
            <h1 className="text-2xl font-extrabold flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {editando ? "Editar documento" : "Adicionar novo"}
            </h1>
          </div>
        </div>

        {erro && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
            {erro}
          </div>
        )}

        {/* Layout 2 colunas estilo WordPress */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          {/* Coluna principal: título + conteúdo */}
          <div className="space-y-4 min-w-0">
            <Input
              value={form.titulo}
              onChange={(e) => {
                set("titulo", e.target.value);
                if (!slugManual) set("slug", slugify(e.target.value));
              }}
              placeholder="Adicione o título"
              className="h-14 text-xl font-bold px-4 bg-card"
            />

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Endereço:</span>
              <span className="font-mono">/doc/</span>
              <input
                value={form.slug}
                onChange={(e) => {
                  setSlugManual(true);
                  set("slug", slugify(e.target.value));
                }}
                placeholder="slug-do-documento"
                className="font-mono bg-transparent border-b border-border focus:outline-none focus:border-primary px-1 flex-1 min-w-0"
              />
            </div>

            {/* Editor de conteúdo */}
            <div className="border border-border rounded-xl overflow-hidden bg-card">
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <span className="text-sm font-medium">Conteúdo</span>
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
                    <Eye className="h-3.5 w-3.5" /> Visualizar
                  </button>
                </div>
              </div>
              {abaPreview ? (
                <article className="prose prose-slate dark:prose-invert max-w-none min-h-[400px] p-5">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {form.conteudo || "_Nada para visualizar ainda._"}
                  </ReactMarkdown>
                </article>
              ) : (
                <textarea
                  value={form.conteudo}
                  onChange={(e) => set("conteudo", e.target.value)}
                  placeholder={"# Título\n\nEscreva o conteúdo em Markdown..."}
                  className="w-full min-h-[400px] bg-transparent p-5 text-sm font-mono leading-relaxed focus:outline-none resize-y"
                />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Markdown: # títulos, **negrito**, listas, links, tabelas, &gt; citações.
            </p>
          </div>

          {/* Painel lateral: Publicar / Categoria / Ordem / Resumo */}
          <aside className="space-y-4 lg:sticky lg:top-20">
            {/* Publicar */}
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <div className="border-b border-border px-4 py-3 font-semibold text-sm">Publicar</div>
              <div className="p-4 space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="status" className="text-xs">Status</Label>
                  <select
                    id="status"
                    value={form.status}
                    onChange={(e) => set("status", e.target.value as ArtigoInput["status"])}
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
                  >
                    <option value="rascunho">Rascunho</option>
                    <option value="publicado">Publicado</option>
                    <option value="arquivado">Arquivado</option>
                  </select>
                </div>
                <Button
                  onClick={handleSalvar}
                  disabled={salvar.isPending}
                  className="w-full gradient-primary text-primary-foreground border-0"
                >
                  {salvar.isPending ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Salvando...</>
                  ) : (
                    <><Save className="h-4 w-4 mr-2" /> Salvar</>
                  )}
                </Button>
                <button
                  onClick={() => navigate("/gerenciar")}
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground py-1"
                >
                  Cancelar
                </button>
              </div>
            </div>

            {/* Organização */}
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <div className="border-b border-border px-4 py-3 font-semibold text-sm">Organização</div>
              <div className="p-4 space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="categoria" className="text-xs">Categoria</Label>
                  <select
                    id="categoria"
                    value={form.categoria_id}
                    onChange={(e) => set("categoria_id", e.target.value)}
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
                  >
                    <option value="">Selecione...</option>
                    {categorias?.map((c) => (
                      <option key={c.id} value={c.id}>{c.nome}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ordem" className="text-xs">Ordem de exibição</Label>
                  <Input
                    id="ordem"
                    type="number"
                    min={0}
                    value={form.ordem}
                    onChange={(e) => set("ordem", Number(e.target.value))}
                    className="h-10"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="resumo" className="text-xs">Resumo (opcional)</Label>
                  <textarea
                    id="resumo"
                    value={form.resumo ?? ""}
                    onChange={(e) => set("resumo", e.target.value)}
                    placeholder="Frase curta exibida nos cards e na busca"
                    className="w-full min-h-[70px] rounded-md border border-border bg-background p-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 resize-y"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
