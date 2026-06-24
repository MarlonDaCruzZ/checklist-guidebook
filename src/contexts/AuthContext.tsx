import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface User {
  nome?: string;
  email?: string;
  empresa?: string;
  [key: string]: unknown;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  tokenEmpresa: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User, tokenEmpresa: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [tokenEmpresa, setTokenEmpresa] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("vex_token");
    const savedUser = localStorage.getItem("vex_user");
    const savedTokenEmpresa = localStorage.getItem("vex_token_empresa");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setTokenEmpresa(savedTokenEmpresa);
    }
  }, []);

  const login = (newToken: string, newUser: User, newTokenEmpresa: string) => {
    setToken(newToken);
    setUser(newUser);
    setTokenEmpresa(newTokenEmpresa);
    localStorage.setItem("vex_token", newToken);
    localStorage.setItem("vex_user", JSON.stringify(newUser));
    localStorage.setItem("vex_token_empresa", newTokenEmpresa);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setTokenEmpresa(null);
    localStorage.removeItem("vex_token");
    localStorage.removeItem("vex_user");
    localStorage.removeItem("vex_token_empresa");
  };

  return (
    <AuthContext.Provider value={{ user, token, tokenEmpresa, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
