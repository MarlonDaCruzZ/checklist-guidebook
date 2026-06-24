<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — integrate with real auth later
    setTimeout(() => {
      setLoading(false);
      navigate("/documentacao");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex gradient-hero">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-md text-center space-y-6">
          <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-2xl font-display">V</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-white">
            Central de Ajuda
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Acesse a documentação completa, guias rápidos e suporte técnico da VexSoft.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Artigos</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/60">Suporte</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/60">Atualizado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="font-display font-bold text-xl">
              Vex<span className="text-gradient-primary">Soft</span>
            </span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Bem-vindo de volta
            </h2>
            <p className="text-muted-foreground">
              Entre com suas credenciais para acessar a Central de Ajuda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  Esqueceu a senha?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 gradient-primary text-primary-foreground border-0 text-base font-semibold"
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
              ) : (
                <>
                  <LogIn className="h-5 w-5 mr-2" />
                  Entrar
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link
              to="https://wa.me/message/3MPLPHHHKVZSP1"
              target="_blank"
              className="text-primary font-medium hover:underline"
            >
              Fale com o comercial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
=======
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { loginUser } from "@/lib/api";
import { Eye, EyeOff, LogIn, Loader2, AlertCircle, Building2, HelpCircle } from "lucide-react";

const Login = () => {
  const [tokenEmpresa, setTokenEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [lembrarToken, setLembrarToken] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Recuperar token salvo ao carregar
  useEffect(() => {
    const tokenSalvo = localStorage.getItem("vex_token_empresa_lembrar");
    if (tokenSalvo) {
      setTokenEmpresa(tokenSalvo);
      setLembrarToken(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!tokenEmpresa.trim()) {
      setErro("Informe o token da sua empresa.");
      return;
    }
    if (!email.trim()) {
      setErro("Informe seu e-mail.");
      return;
    }
    if (!senha.trim()) {
      setErro("Informe sua senha.");
      return;
    }

    setCarregando(true);

    try {
      const data = await loginUser(tokenEmpresa.trim(), email, senha);

      if (data.erro) {
        setErro(data.mensagem || "Credenciais incorretas. Verifique o token, e-mail e senha.");
        return;
      }

      const token = data.token || "";
      const usuario = data.usuario || { email };

      // Salvar/remover token lembrado
      if (lembrarToken) {
        localStorage.setItem("vex_token_empresa_lembrar", tokenEmpresa.trim());
      } else {
        localStorage.removeItem("vex_token_empresa_lembrar");
      }

      login(token, usuario, tokenEmpresa.trim());
      navigate("/");
    } catch {
      setErro("Nao foi possivel conectar ao servidor. Verifique sua conexao e tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo e titulo */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Vex<span className="text-gradient-primary">Soft</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Acesse sua conta para continuar
              </p>
            </div>
          </div>

          {/* Card de login */}
          <Card className="border-border/50 shadow-lg">
            <CardContent className="pt-6 pb-8 px-6 sm:px-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Mensagem de erro */}
                {erro && (
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-fade-in">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{erro}</span>
                  </div>
                )}

                {/* Campo token da empresa */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="tokenEmpresa" className="text-sm font-medium flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                      Token da Empresa
                    </Label>
                    <span
                      className="group relative inline-flex"
                      tabIndex={-1}
                    >
                      <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                      <span className="invisible group-hover:visible group-focus-within:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-lg bg-popover border border-border px-3 py-2 text-xs text-popover-foreground shadow-md z-50">
                        O token e um codigo unico da sua empresa fornecido pela VexSoft. Ex: <strong>TAM824</strong>. Se nao possui, entre em contato com o suporte.
                      </span>
                    </span>
                  </div>
                  <Input
                    id="tokenEmpresa"
                    type="text"
                    placeholder="Ex: TAM824"
                    value={tokenEmpresa}
                    onChange={(e) => setTokenEmpresa(e.target.value.toUpperCase())}
                    disabled={carregando}
                    autoComplete="organization"
                    autoFocus
                    className="h-11 font-mono tracking-wider uppercase"
                  />
                  {/* Lembrar token */}
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={lembrarToken}
                      onChange={(e) => setLembrarToken(e.target.checked)}
                      className="h-3.5 w-3.5 rounded border-border accent-primary cursor-pointer"
                    />
                    <span className="text-xs text-muted-foreground">Lembrar token neste dispositivo</span>
                  </label>
                </div>

                {/* Separador visual */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-3 text-muted-foreground">Suas credenciais</span>
                  </div>
                </div>

                {/* Campo email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={carregando}
                    autoComplete="email"
                    className="h-11"
                  />
                </div>

                {/* Campo senha */}
                <div className="space-y-2">
                  <Label htmlFor="senha" className="text-sm font-medium">
                    Senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="senha"
                      type={mostrarSenha ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      disabled={carregando}
                      autoComplete="current-password"
                      className="h-11 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                    >
                      {mostrarSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Botao de login */}
                <Button
                  type="submit"
                  disabled={carregando}
                  className="w-full h-11 gradient-primary text-primary-foreground border-0 font-medium text-sm"
                >
                  {carregando ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4 mr-2" />
                      Entrar
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Ajuda */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Precisa de ajuda?{" "}
              <a
                href="https://wa.me/message/3MPLPHHHKVZSP1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Fale com o suporte
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Rodape minimo */}
      <footer className="py-4 text-center text-xs text-muted-foreground border-t border-border">
        VexSoft &copy; {new Date().getFullYear()}. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Login;
>>>>>>> 7ba8fc0 (Login com as credencias do vex)
