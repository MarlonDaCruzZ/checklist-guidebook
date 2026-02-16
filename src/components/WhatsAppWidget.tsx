import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-card border border-border rounded-xl shadow-xl p-5 w-72 animate-fade-in">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-semibold text-sm">Precisa de ajuda?</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Fale com nosso suporte</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <a
            href="https://wa.me/message/3MPLPHHHKVZSP1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground border-0" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Abrir WhatsApp
            </Button>
          </a>
          <p className="text-[11px] text-muted-foreground text-center mt-2">
            Seg–Sex, 8h às 18h
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Abrir chat de suporte"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
