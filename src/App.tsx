import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { useSupabaseSession } from "@/hooks/useSupabaseSession";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Documentacao = lazy(() => import("./pages/Documentacao"));
const GuiaRapido = lazy(() => import("./pages/GuiaRapido"));
const ConfigurarChecklist = lazy(() => import("./pages/ConfigurarChecklist"));
const Troubleshooting = lazy(() => import("./pages/Troubleshooting"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Changelog = lazy(() => import("./pages/Changelog"));
const BoasVindas = lazy(() => import("./pages/BoasVindas"));
const PrimeirosPassos = lazy(() => import("./pages/PrimeirosPassos"));
const PainelAdministrativo = lazy(() => import("./pages/PainelAdministrativo"));
const Vistorias = lazy(() => import("./pages/Vistorias"));
const Configuracoes = lazy(() => import("./pages/Configuracoes"));
const CamposPersonalizaveis = lazy(() => import("./pages/CamposPersonalizaveis"));
const ConfiguracaoPDF = lazy(() => import("./pages/ConfiguracaoPDF"));
const Integracao = lazy(() => import("./pages/Integracao"));
const Sincronizacao = lazy(() => import("./pages/Sincronizacao"));
const Patios = lazy(() => import("./pages/Patios"));
const Limitacoes = lazy(() => import("./pages/Limitacoes"));
const AparelhosHomologados = lazy(() => import("./pages/AparelhosHomologados"));
const Atendimento = lazy(() => import("./pages/Atendimento"));
const Historia = lazy(() => import("./pages/Historia"));
const AreaVistoriador = lazy(() => import("./pages/AreaVistoriador"));
const Usuarios = lazy(() => import("./pages/Usuarios"));
const TiposOperacao = lazy(() => import("./pages/TiposOperacao"));
const Questionario = lazy(() => import("./pages/Questionario"));
const CamposFixos = lazy(() => import("./pages/CamposFixos"));
const Login = lazy(() => import("./pages/Login"));
const Artigo = lazy(() => import("./pages/Artigo"));
const LoginEquipe = lazy(() => import("./pages/LoginEquipe"));
const GerenciarDocs = lazy(() => import("./pages/GerenciarDocs"));
const EditorDoc = lazy(() => import("./pages/EditorDoc"));

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();        // login VexSoft (clientes)
  const { session, loading } = useSupabaseSession(); // login interno @inovaclick.com.br

  // Acesso liberado com qualquer um dos dois logins.
  if (isAuthenticated) return <>{children}</>;
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }
  if (session) return <>{children}</>;
  return <Navigate to="/login" replace />;
}

// Acesso exclusivo da equipe interna @inovaclick.com.br (tela de gerenciamento).
function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();                         // login VexSoft (traz o e-mail)
  const { session, loading } = useSupabaseSession();  // sessão Supabase (quando houver)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }
  const email = ((user?.email as string) || session?.user?.email || "");
  if (!/@inovaclick\.com\.br$/i.test(email)) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/login-equipe" element={<LoginEquipe />} />
              <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
              <Route path="/documentacao" element={<ProtectedRoute><Documentacao /></ProtectedRoute>} />
              <Route path="/doc/:slug" element={<ProtectedRoute><Artigo /></ProtectedRoute>} />
              <Route path="/gerenciar" element={<AdminRoute><GerenciarDocs /></AdminRoute>} />
              <Route path="/gerenciar/novo" element={<AdminRoute><EditorDoc /></AdminRoute>} />
              <Route path="/gerenciar/:id" element={<AdminRoute><EditorDoc /></AdminRoute>} />
              <Route path="/guia-rapido" element={<ProtectedRoute><GuiaRapido /></ProtectedRoute>} />
              <Route path="/documentacao/configurar-checklist" element={<ProtectedRoute><ConfigurarChecklist /></ProtectedRoute>} />
              <Route path="/documentacao/troubleshooting" element={<ProtectedRoute><Troubleshooting /></ProtectedRoute>} />
              <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
              <Route path="/changelog" element={<ProtectedRoute><Changelog /></ProtectedRoute>} />
              <Route path="/documentacao/boas-vindas" element={<ProtectedRoute><BoasVindas /></ProtectedRoute>} />
              <Route path="/documentacao/primeiros-passos" element={<ProtectedRoute><PrimeirosPassos /></ProtectedRoute>} />
              <Route path="/documentacao/painel-administrativo" element={<ProtectedRoute><PainelAdministrativo /></ProtectedRoute>} />
              <Route path="/documentacao/vistorias" element={<ProtectedRoute><Vistorias /></ProtectedRoute>} />
              <Route path="/documentacao/configuracoes" element={<ProtectedRoute><Configuracoes /></ProtectedRoute>} />
              <Route path="/documentacao/campos-personalizaveis" element={<ProtectedRoute><CamposPersonalizaveis /></ProtectedRoute>} />
              <Route path="/documentacao/configuracao-pdf" element={<ProtectedRoute><ConfiguracaoPDF /></ProtectedRoute>} />
              <Route path="/documentacao/integracao" element={<ProtectedRoute><Integracao /></ProtectedRoute>} />
              <Route path="/documentacao/sincronizacao" element={<ProtectedRoute><Sincronizacao /></ProtectedRoute>} />
              <Route path="/documentacao/patios" element={<ProtectedRoute><Patios /></ProtectedRoute>} />
              <Route path="/documentacao/limitacoes" element={<ProtectedRoute><Limitacoes /></ProtectedRoute>} />
              <Route path="/documentacao/aparelhos-homologados" element={<ProtectedRoute><AparelhosHomologados /></ProtectedRoute>} />
              <Route path="/documentacao/atendimento" element={<ProtectedRoute><Atendimento /></ProtectedRoute>} />
              <Route path="/documentacao/historia" element={<ProtectedRoute><Historia /></ProtectedRoute>} />
              <Route path="/documentacao/area-do-vistoriador" element={<ProtectedRoute><AreaVistoriador /></ProtectedRoute>} />
              <Route path="/documentacao/usuarios" element={<ProtectedRoute><Usuarios /></ProtectedRoute>} />
              <Route path="/documentacao/tipos-de-operacao" element={<ProtectedRoute><TiposOperacao /></ProtectedRoute>} />
              <Route path="/documentacao/questionario" element={<ProtectedRoute><Questionario /></ProtectedRoute>} />
              <Route path="/documentacao/campos-fixos" element={<ProtectedRoute><CamposFixos /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
