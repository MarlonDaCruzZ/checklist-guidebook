import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
