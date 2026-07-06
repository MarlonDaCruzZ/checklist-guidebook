import { supabase } from "./supabase";

// ---------- Tipos ----------
export interface Categoria {
  id: string;
  nome: string;
  slug: string;
  descricao: string | null;
  icone: string | null;
  parent_id: string | null;
  ordem: number;
  ativo: boolean;
}

export interface Artigo {
  id: string;
  categoria_id: string;
  titulo: string;
  slug: string;
  resumo: string | null;
  conteudo: string;
  status: "rascunho" | "publicado" | "arquivado";
  ordem: number;
  visualizacoes: number;
  published_at: string | null;
  updated_at: string;
}

export interface ResultadoBusca {
  id: string;
  titulo: string;
  resumo: string | null;
  slug: string;
  categoria: string;
  categoria_slug: string;
  relevancia: number;
}

// ---------- Categorias ----------
export async function listCategorias(): Promise<Categoria[]> {
  const { data, error } = await supabase
    .from("categorias")
    .select("*")
    .eq("ativo", true)
    .order("ordem", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

/** Categoria + seus artigos publicados (uma chamada). */
export async function getCategoriaComArtigos(slug: string) {
  const { data, error } = await supabase
    .from("categorias")
    .select("*, artigos(*)")
    .eq("slug", slug)
    .single();
  if (error) throw error;
  return data as Categoria & { artigos: Artigo[] };
}

// ---------- Artigos ----------
export async function getArtigoBySlug(slug: string) {
  const { data, error } = await supabase
    .from("artigos")
    .select("*, categorias(nome, slug)")
    .eq("slug", slug)
    .eq("status", "publicado")
    .single();
  if (error) throw error;
  return data as Artigo & { categorias: Pick<Categoria, "nome" | "slug"> };
}

export async function listArtigosPorCategoria(categoriaId: string): Promise<Artigo[]> {
  const { data, error } = await supabase
    .from("artigos")
    .select("*")
    .eq("categoria_id", categoriaId)
    .eq("status", "publicado")
    .order("ordem", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

// ---------- Busca (RPC com ranqueamento) ----------
export async function buscarArtigos(termo: string): Promise<ResultadoBusca[]> {
  if (!termo.trim()) return [];
  const { data, error } = await supabase.rpc("buscar_artigos", { termo });
  if (error) throw error;
  return (data ?? []) as ResultadoBusca[];
}

// ---------- Visualizações ----------
export async function incrementarVisualizacao(artigoId: string): Promise<void> {
  await supabase.rpc("incrementar_visualizacao", { p_artigo_id: artigoId });
}

// ---------- Favoritos ----------
export async function listFavoritos(): Promise<string[]> {
  const { data, error } = await supabase.from("favoritos").select("artigo_id");
  if (error) throw error;
  return (data ?? []).map((f) => f.artigo_id as string);
}

export async function adicionarFavorito(artigoId: string): Promise<void> {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user?.id;
  if (!userId) throw new Error("Usuário não autenticado");
  const { error } = await supabase
    .from("favoritos")
    .insert({ user_id: userId, artigo_id: artigoId });
  if (error) throw error;
}

export async function removerFavorito(artigoId: string): Promise<void> {
  const { error } = await supabase.from("favoritos").delete().eq("artigo_id", artigoId);
  if (error) throw error;
}

// ====================================================================
// ADMIN — gerenciamento de documentos
// Escrita/leitura-admin passam pela Edge Function `docs-admin`, que valida
// o domínio @inovaclick.com.br no servidor e grava com a service role.
// A permissão vem do login EXTERNO (não do Supabase Auth).
// ====================================================================

export interface ArtigoAdmin extends Artigo {
  conteudo_html?: string | null;
  categorias?: Pick<Categoria, "nome" | "slug"> | null;
}

export interface ArtigoInput {
  titulo: string;
  slug: string;
  categoria_id: string;
  resumo?: string | null;
  conteudo: string;
  conteudo_html?: string | null;
  ordem: number;
  status: "rascunho" | "publicado" | "arquivado";
}

export interface ListaAdminFiltro {
  busca?: string;
  categoriaId?: string;
}

const EDGE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/docs-admin`;
const PUBLISHABLE = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

/** Credenciais do login externo (persistidas pelo AuthContext no localStorage). */
function credenciaisExternas() {
  const token = localStorage.getItem("vex_token") ?? "";
  let email = "";
  try {
    email = (JSON.parse(localStorage.getItem("vex_user") ?? "{}")?.email as string) ?? "";
  } catch {
    email = "";
  }
  return { token, email };
}

async function adminRequest<T>(action: string, extra: Record<string, unknown> = {}): Promise<T> {
  const { token, email } = credenciaisExternas();
  const res = await fetch(EDGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE,
      Authorization: `Bearer ${PUBLISHABLE}`,
    },
    body: JSON.stringify({ action, email, token, ...extra }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.error || `Falha na operação (${res.status})`);
  return json as T;
}

/** Lista todos os documentos (todos os status) com busca e filtro por categoria. */
export async function listAllArtigos(filtro: ListaAdminFiltro = {}): Promise<ArtigoAdmin[]> {
  const { data } = await adminRequest<{ data: ArtigoAdmin[] }>("list", { filtro });
  return data ?? [];
}

/** Busca um documento por ID (qualquer status) — usado no editor. */
export async function getArtigoById(id: string): Promise<ArtigoAdmin> {
  const { data } = await adminRequest<{ data: ArtigoAdmin }>("get", { id });
  return data;
}

export async function createArtigo(input: ArtigoInput): Promise<Artigo> {
  const { data } = await adminRequest<{ data: Artigo }>("create", { payload: input });
  return data;
}

export async function updateArtigo(id: string, input: ArtigoInput): Promise<Artigo> {
  const { data } = await adminRequest<{ data: Artigo }>("update", { id, payload: input });
  return data;
}

export async function deleteArtigo(id: string): Promise<void> {
  await adminRequest("delete", { id });
}
