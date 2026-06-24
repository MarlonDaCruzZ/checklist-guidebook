import { md5 } from "./md5";

const API_GATEWAY = "https://gateway.vexsoft.com.br/api/carga/v2/empresa/token";

export interface LoginResponse {
  erro: boolean;
  mensagem: string;
  token?: string;
  usuario?: {
    nome?: string;
    email?: string;
    empresa?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export async function loginUser(
  tokenEmpresa: string,
  email: string,
  senha: string
): Promise<LoginResponse> {
  const senhaMD5 = md5(senha);

  const formData = new FormData();
  formData.append("email", email);
  formData.append("senha", senhaMD5);
  formData.append("atualizarSession", "true");
  formData.append("primeiroLogin", "false");
  formData.append("device", "T2SE33.73-23-3");

  const response = await fetch(`${API_GATEWAY}/${encodeURIComponent(tokenEmpresa)}/login`, {
    method: "POST",
    headers: {
      "Accept-API-Version": "2025-04-23",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Erro ao conectar com o servidor (${response.status})`);
  }

  const raw = await response.json();

  // A API retorna { status: "OK"|"ERR", message: "...", data: ... }
  // Normalizamos para o formato interno { erro, mensagem, token, usuario }
  const isError = raw.status === "ERR" || raw.erro === true;

  if (isError) {
    // Traduzir mensagens da API para o usuario
    let mensagemAmigavel = "Credenciais incorretas. Verifique seus dados e tente novamente.";
    const msg = (raw.message || raw.mensagem || "").toUpperCase();

    if (msg.includes("LOGIN") || msg.includes("SENHA")) {
      mensagemAmigavel = "E-mail ou senha incorretos. Verifique e tente novamente.";
    } else if (msg.includes("TOKEN") || msg.includes("EMPRESA")) {
      mensagemAmigavel = "Token da empresa invalido. Verifique o codigo informado.";
    } else if (msg.includes("BLOQUEADO") || msg.includes("BLOCK")) {
      mensagemAmigavel = "Sua conta esta temporariamente bloqueada. Tente novamente mais tarde.";
    } else if (raw.message || raw.mensagem) {
      mensagemAmigavel = raw.message || raw.mensagem;
    }

    return { erro: true, mensagem: mensagemAmigavel };
  }

  // Sucesso - extrair token e dados do usuario
  const data = raw.data || raw;
  const token = data.token || data.sessionToken || data.accessToken || "";
  const usuario = data.usuario || data.user || { email };

  return {
    erro: false,
    mensagem: "",
    token,
    usuario: typeof usuario === "string" ? { email } : usuario,
  };
}
