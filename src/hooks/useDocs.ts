import { useQuery } from "@tanstack/react-query";
import {
  listCategorias,
  getArtigoBySlug,
  getCategoriaComArtigos,
  buscarArtigos,
} from "@/lib/docs";

export function useCategorias() {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: listCategorias,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCategoriaComArtigos(slug: string | undefined) {
  return useQuery({
    queryKey: ["categoria", slug],
    queryFn: () => getCategoriaComArtigos(slug!),
    enabled: !!slug,
  });
}

export function useArtigo(slug: string | undefined) {
  return useQuery({
    queryKey: ["artigo", slug],
    queryFn: () => getArtigoBySlug(slug!),
    enabled: !!slug,
  });
}

export function useBuscaArtigos(termo: string) {
  return useQuery({
    queryKey: ["busca", termo],
    queryFn: () => buscarArtigos(termo),
    enabled: termo.trim().length > 1,
    staleTime: 60 * 1000,
  });
}
