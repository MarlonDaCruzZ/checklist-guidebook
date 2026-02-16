import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">V</span>
              </div>
              <span className="font-display font-bold">VexSoft</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A maior solução em checklist digital do Brasil. Transforme seus processos com eficiência e praticidade.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Documentação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/guia-rapido" className="hover:text-foreground transition-colors">Guia Rápido</Link></li>
              <li><Link to="/documentacao" className="hover:text-foreground transition-colors">Índice Completo</Link></li>
              <li><Link to="/documentacao/configurar-checklist" className="hover:text-foreground transition-colors">Configurar Checklist</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://vexsoft.com.br" target="_blank" className="hover:text-foreground transition-colors">Site Principal</a></li>
              <li><Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
              <li><a href="https://app.vexsoft.com.br" target="_blank" className="hover:text-foreground transition-colors">Acessar App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">Perguntas Frequentes</Link></li>
              <li>
                <a href="https://wa.me/message/3MPLPHHHKVZSP1" target="_blank" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Falar pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VexSoft. Todos os direitos reservados.</p>
          <p>Central de Ajuda — Versão 2.0</p>
        </div>
      </div>
    </footer>
  );
}
