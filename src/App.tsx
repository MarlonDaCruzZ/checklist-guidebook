import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

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

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
<<<<<<< HEAD
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="/guia-rapido" element={<GuiaRapido />} />
            <Route path="/documentacao/configurar-checklist" element={<ConfigurarChecklist />} />
            <Route path="/documentacao/troubleshooting" element={<Troubleshooting />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/documentacao/boas-vindas" element={<BoasVindas />} />
            <Route path="/documentacao/primeiros-passos" element={<PrimeirosPassos />} />
            <Route path="/documentacao/painel-administrativo" element={<PainelAdministrativo />} />
            <Route path="/documentacao/vistorias" element={<Vistorias />} />
            <Route path="/documentacao/configuracoes" element={<Configuracoes />} />
            <Route path="/documentacao/campos-personalizaveis" element={<CamposPersonalizaveis />} />
            <Route path="/documentacao/configuracao-pdf" element={<ConfiguracaoPDF />} />
            <Route path="/documentacao/integracao" element={<Integracao />} />
            <Route path="/documentacao/sincronizacao" element={<Sincronizacao />} />
            <Route path="/documentacao/patios" element={<Patios />} />
            <Route path="/documentacao/limitacoes" element={<Limitacoes />} />
            <Route path="/documentacao/aparelhos-homologados" element={<AparelhosHomologados />} />
            <Route path="/documentacao/atendimento" element={<Atendimento />} />
            <Route path="/documentacao/historia" element={<Historia />} />
            <Route path="/documentacao/area-do-vistoriador" element={<AreaVistoriador />} />
            <Route path="/documentacao/usuarios" element={<Usuarios />} />
            <Route path="/documentacao/tipos-de-operacao" element={<TiposOperacao />} />
            <Route path="/documentacao/questionario" element={<Questionario />} />
            <Route path="/documentacao/campos-fixos" element={<CamposFixos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
=======
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
              <Route path="/documentacao" element={<ProtectedRoute><Documentacao /></ProtectedRoute>} />
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
>>>>>>> 7ba8fc0 (Login com as credencias do vex)
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
