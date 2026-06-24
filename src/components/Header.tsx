import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

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

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="font-display font-bold text-lg">
              Vex<span className="text-gradient-primary">Soft</span>
            </span>
            <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-2 py-0.5 ml-1">
              Ajuda
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-sidebar-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Buscar...</span>
            <kbd className="hidden md:inline-flex h-5 items-center rounded border border-border px-1.5 text-[10px] font-mono text-muted-foreground">
              ⌘K
            </kbd>
          </Link>
          {isAuthenticated ? (
            <>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {user?.nome || user?.email || "Usuario"}
              </span>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-1.5" onClick={handleLogout}>
                <LogOut className="h-3.5 w-3.5" />
                Sair
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Entrar
              </Button>
            </Link>
          )}
          <Link to="https://wa.me/message/3MPLPHHHKVZSP1" target="_blank">
            <Button size="sm" className="gradient-primary text-primary-foreground border-0 hidden sm:inline-flex">
              Agendar Demonstração
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-sidebar-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              {isAuthenticated ? (
                <Button variant="outline" size="sm" className="flex-1 gap-1.5" onClick={() => { handleLogout(); setMobileOpen(false); }}>
                  <LogOut className="h-3.5 w-3.5" />
                  Sair
                </Button>
              ) : (
                <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">Entrar</Button>
                </Link>
              )}
              <Link to="https://wa.me/message/3MPLPHHHKVZSP1" target="_blank" className="flex-1">
                <Button size="sm" className="w-full gradient-primary text-primary-foreground border-0">
                  Demonstração
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
