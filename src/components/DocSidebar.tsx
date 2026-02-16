import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, BookOpen, Zap, Settings, AlertTriangle, HelpCircle, History } from "lucide-react";
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
    ],
  },
  {
    title: "Guia Rápido",
    icon: Zap,
    links: [
      { label: "5 minutos para começar", href: "/guia-rapido" },
    ],
  },
  {
    title: "Configurações",
    icon: Settings,
    links: [
      { label: "Criar Checklist", href: "/documentacao/configurar-checklist" },
      { label: "Campos e Validações", href: "/documentacao/configurar-checklist#campos" },
      { label: "Regras Condicionais", href: "/documentacao/configurar-checklist#regras" },
      { label: "Assinatura e Aceite", href: "/documentacao/configurar-checklist#assinatura" },
      { label: "Publicar e Testar", href: "/documentacao/configurar-checklist#publicar" },
    ],
  },
  {
    title: "Solução de Problemas",
    icon: AlertTriangle,
    links: [
      { label: "Problemas Comuns", href: "/documentacao/troubleshooting" },
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
      <nav className="sticky top-20 space-y-1 pr-4">
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
