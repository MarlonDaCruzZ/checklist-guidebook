import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/isAdmin";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Documentação", href: "/documentacao" },
  { label: "Guia Rápido", href: "/guia-rapido" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const isInterno = isAdmin(user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClasses = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === href
        ? "text-primary bg-sidebar-accent"
        : "text-muted-foreground hover:text-foreground hover:bg-muted"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">V</span>
          </div>
          <span className="font-display font-bold text-lg hidden sm:inline">
            Vex<span className="text-gradient-primary">Soft</span>
          </span>
          <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-2 py-0.5">
            Ajuda
          </span>
        </Link>

        {/* Navegação (desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={linkClasses(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Busca — ocupa o espaço central e fica sempre acessível */}
        <div className="flex-1 flex justify-end lg:justify-center max-w-md mx-auto">
          <SearchBar className="w-full max-w-sm hidden sm:block" />
        </div>

        {/* Conta e ações (direita) */}
        <div className="flex items-center gap-2 shrink-0">
          {isInterno && (
            <Link to="/gerenciar" className="hidden md:inline-flex">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Settings className="h-3.5 w-3.5" />
                Gerenciar
              </Button>
            </Link>
          )}
          {isAuthenticated ? (
            <>
              <span className="hidden xl:inline-flex items-center gap-1.5 text-sm text-muted-foreground max-w-[160px] truncate">
                <User className="h-4 w-4 shrink-0" />
                <span className="truncate">{user?.nome || user?.email || "Usuário"}</span>
              </span>
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-1.5" onClick={handleLogout}>
                <LogOut className="h-3.5 w-3.5" />
                Sair
              </Button>
            </>
          ) : (
            <Link to="/login" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm">Entrar</Button>
            </Link>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            <div className="sm:hidden mb-2">
              <SearchBar className="w-full" />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
            {isInterno && (
              <Link
                to="/gerenciar"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center gap-1.5"
              >
                <Settings className="h-4 w-4" />
                Gerenciar documentação
              </Link>
            )}
            <div className="mt-3 pt-3 border-t border-border">
              {isAuthenticated ? (
                <Button variant="outline" size="sm" className="w-full gap-1.5" onClick={() => { handleLogout(); setMobileOpen(false); }}>
                  <LogOut className="h-3.5 w-3.5" />
                  Sair
                </Button>
              ) : (
                <Link to="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">Entrar</Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
