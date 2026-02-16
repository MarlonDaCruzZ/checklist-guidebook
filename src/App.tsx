import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Documentacao from "./pages/Documentacao";
import GuiaRapido from "./pages/GuiaRapido";
import ConfigurarChecklist from "./pages/ConfigurarChecklist";
import Troubleshooting from "./pages/Troubleshooting";
import FAQ from "./pages/FAQ";
import Changelog from "./pages/Changelog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/documentacao" element={<Documentacao />} />
          <Route path="/guia-rapido" element={<GuiaRapido />} />
          <Route path="/documentacao/configurar-checklist" element={<ConfigurarChecklist />} />
          <Route path="/documentacao/troubleshooting" element={<Troubleshooting />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
