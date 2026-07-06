// Permissão de administração vem do login EXTERNO (não do Supabase Auth):
// é admin quem está autenticado com e-mail @inovaclick.com.br.

const DOMINIO_ADMIN = /@inovaclick\.com\.br$/i;

export function emailEhAdmin(email?: string | null): boolean {
  return DOMINIO_ADMIN.test((email ?? "").trim());
}

export function isAdmin(user?: { email?: unknown } | null): boolean {
  return emailEhAdmin(typeof user?.email === "string" ? user.email : "");
}
