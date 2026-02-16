import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, BookOpen, Zap, Settings, AlertTriangle, HelpCircle, History, Monitor, Eye, MapPin, Plug, Smartphone, Clock, Ban, FileText, Users as UsersIcon } from "lucide-react";
import { useState } from "react";

interface SidebarSection {
  title: string;
  icon: React.ElementType;
  links: { label: string; href: string }[];
}

const sections: SidebarSection[] = [
  {
    title: "Início",
    icon: BookOpen,
    links: [
      { label: "Visão Geral", href: "/documentacao" },
      { label: "Boas-vindas", href: "/documentacao/boas-vindas" },
      { label: "Nossa História", href: "/documentacao/historia" },
    ],
  },
  {
    title: "Primeiros Passos",
    icon: Zap,
    links: [
      { label: "Começar aqui", href: "/documentacao/primeiros-passos" },
      { label: "Guia Rápido (5 min)", href: "/guia-rapido" },
      { label: "Aparelhos Homologados", href: "/documentacao/aparelhos-homologados" },
    ],
  },
  {
    title: "Painel Administrativo",
    icon: Monitor,
    links: [
      { label: "Visão Geral do Painel", href: "/documentacao/painel-administrativo" },
      { label: "Vistorias", href: "/documentacao/vistorias" },
      { label: "Usuários e Permissões", href: "/documentacao/usuarios" },
      { label: "Área do Vistoriador", href: "/documentacao/area-do-vistoriador" },
    ],
  },
  {
    title: "Configurações",
    icon: Settings,
    links: [
      { label: "Visão Geral", href: "/documentacao/configuracoes" },
      { label: "Tipos de Operação", href: "/documentacao/tipos-de-operacao" },
      { label: "Questionário", href: "/documentacao/questionario" },
      { label: "Campos Fixos", href: "/documentacao/campos-fixos" },
      { label: "Campos Personalizáveis", href: "/documentacao/campos-personalizaveis" },
      { label: "Configuração do PDF", href: "/documentacao/configuracao-pdf" },
      { label: "Criar Checklist (Tutorial)", href: "/documentacao/configurar-checklist" },
    ],
  },
  {
    title: "Gestão de Pátios",
    icon: MapPin,
    links: [
      { label: "Gestão de Pátios", href: "/documentacao/patios" },
    ],
  },
  {
    title: "Integração & API",
    icon: Plug,
    links: [
      { label: "Integração", href: "/documentacao/integracao" },
    ],
  },
  {
    title: "Solução de Problemas",
    icon: AlertTriangle,
    links: [
      { label: "Troubleshooting", href: "/documentacao/troubleshooting" },
      { label: "Sincronização", href: "/documentacao/sincronizacao" },
      { label: "Limitações do App", href: "/documentacao/limitacoes" },
    ],
  },
  {
    title: "FAQ",
    icon: HelpCircle,
    links: [
      { label: "Perguntas Frequentes", href: "/faq" },
    ],
  },
  {
    title: "Suporte",
    icon: Clock,
    links: [
      { label: "Atendimento e SLA", href: "/documentacao/atendimento" },
    ],
  },
  {
    title: "Changelog",
    icon: History,
    links: [
      { label: "Atualizações", href: "/changelog" },
    ],
  },
];

export function DocSidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    sections.forEach((s) => {
      if (s.links.some((l) => location.pathname === l.href || location.pathname.startsWith(l.href.split("#")[0]))) {
        initial.add(s.title);
      }
    });
    if (initial.size === 0) initial.add("Início");
    return initial;
  });

  const toggle = (title: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return location.pathname === base;
  };

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <nav className="sticky top-20 space-y-1 pr-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          const isOpen = openSections.has(section.title);

          return (
            <div key={section.title}>
              <button
                onClick={() => toggle(section.title)}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="flex-1 text-left">{section.title}</span>
                {isOpen ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
              </button>

              {isOpen && (
                <div className="ml-5 pl-3 border-l border-border space-y-0.5 mt-1 mb-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                        isActive(link.href)
                          ? "text-primary font-medium bg-sidebar-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
