import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const searchData = [
  { title: "Como criar um checklist novo", url: "/documentacao/configurar-checklist", category: "Configurações" },
  { title: "Guia Rápido — 5 minutos para começar", url: "/guia-rapido", category: "Guia Rápido" },
  { title: "Checklist não sincroniza", url: "/documentacao/troubleshooting", category: "Troubleshooting" },
  { title: "Fotos não carregam no app", url: "/documentacao/troubleshooting", category: "Troubleshooting" },
  { title: "Campos obrigatórios não aparecem", url: "/documentacao/troubleshooting", category: "Troubleshooting" },
  { title: "Adicionar campos ao checklist", url: "/documentacao/configurar-checklist", category: "Configurações" },
  { title: "Regras de exibição condicional", url: "/documentacao/configurar-checklist", category: "Configurações" },
  { title: "Assinatura digital e termos de aceite", url: "/documentacao/configurar-checklist", category: "Configurações" },
  { title: "Modo offline e sincronização", url: "/documentacao/configurar-checklist", category: "Configurações" },
  { title: "Perguntas frequentes", url: "/faq", category: "FAQ" },
  { title: "Atualizações e versões", url: "/changelog", category: "Changelog" },
];

interface SearchBarProps {
  large?: boolean;
  className?: string;
}

export function SearchBar({ large = false, className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = query.length > 1
    ? searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className={`relative flex items-center ${large ? "search-glow rounded-xl" : "rounded-lg"}`}>
        <Search className={`absolute left-4 text-muted-foreground ${large ? "h-5 w-5" : "h-4 w-4"}`} />
        <input
          type="text"
          placeholder="Buscar artigos, guias, tutoriais..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query.length > 1 && setOpen(true)}
          className={`w-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all ${
            large
              ? "pl-12 pr-4 py-4 text-base rounded-xl"
              : "pl-10 pr-4 py-2.5 text-sm rounded-lg"
          }`}
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 animate-fade-in">
          {results.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                navigate(item.url);
                setOpen(false);
                setQuery("");
              }}
              className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center justify-between gap-3 border-b border-border last:border-0"
            >
              <span className="text-sm font-medium truncate">{item.title}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full whitespace-nowrap">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
