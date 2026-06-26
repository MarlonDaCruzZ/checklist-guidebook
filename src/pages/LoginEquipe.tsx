import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff, LogIn, Loader2, AlertCircle, Building2 } from "lucide-react";

const LoginEquipe = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!email.trim() || !senha.trim()) {
      setErro("Informe e-mail e senha.");
      return;
    }
    if (!/@inovaclick\.com\.br$/i.test(email.trim())) {
      setErro("Use seu e-mail corporativo @inovaclick.com.br.");
      return;
    }

    setCarregando(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: senha,
      });
      if (error) {
        setErro("E-mail ou senha incorretos.");
        return;
      }
      navigate("/documentacao");
    } catch {
      setErro("Não foi possível conectar. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 rounded-xl gradient-primary items-center justify-center shadow-lg">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Acesso da equipe</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Entre com seu e-mail <strong>@inovaclick.com.br</strong>
              </p>
            </div>
          </div>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="pt-6 pb-8 px-6 sm:px-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {erro && (
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{erro}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail corporativo</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.nome@inovaclick.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={carregando}
                    autoComplete="email"
                    autoFocus
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <div className="relative">
                    <Input
                      id="senha"
                      type={mostrarSenha ? "text" : "password"}
                      placeholder="Sua senha"
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

          <div className="text-center">
            <Link to="/login" className="text-sm text-primary font-medium hover:underline">
              É cliente VexSoft? Acesse por aqui
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-4 text-center text-xs text-muted-foreground border-t border-border">
        VexSoft &copy; {new Date().getFullYear()}. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default LoginEquipe;
