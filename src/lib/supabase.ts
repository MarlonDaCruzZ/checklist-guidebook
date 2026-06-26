import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

if (!url || !key) {
  // Ajuda no diagnóstico durante o desenvolvimento sem quebrar o build.
  console.warn(
    "[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY não definidos. " +
      "Copie .env.example para .env.local e preencha as credenciais."
  );
}

export const supabase = createClient(url ?? "", key ?? "", {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/** true quando as variáveis de ambiente do Supabase estão configuradas. */
export const supabaseConfigured = Boolean(url && key);
