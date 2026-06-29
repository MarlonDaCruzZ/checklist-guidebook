import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

/** true quando as variáveis de ambiente do Supabase estão configuradas. */
export const supabaseConfigured = Boolean(url && key);

if (!supabaseConfigured) {
  // Não derruba o app: avisa e segue com placeholders válidos.
  // As chamadas ao Supabase falham de forma controlada (tratadas pelas telas),
  // em vez de quebrar tudo no carregamento (tela branca).
  console.error(
    "[supabase] Variáveis VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY não definidas. " +
      "Configure-as no Vercel (Settings → Environment Variables) e refaça o deploy."
  );
}

// Placeholders com FORMATO válido evitam o erro 'supabaseUrl is required' no boot.
const safeUrl = url || "https://placeholder.supabase.co";
const safeKey = key || "placeholder-anon-key";

export const supabase = createClient(safeUrl, safeKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
