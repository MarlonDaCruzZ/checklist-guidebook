import { useState } from "react";
import { ThumbsUp, ThumbsDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeedbackWidget() {
  const [state, setState] = useState<"idle" | "yes" | "no" | "sent">("idle");
  const [comment, setComment] = useState("");

  if (state === "sent") {
    return (
      <div className="mt-10 p-6 bg-sidebar-accent rounded-xl text-center animate-fade-in">
        <p className="text-sm font-medium text-primary">✓ Obrigado pelo seu feedback!</p>
      </div>
    );
  }

  return (
    <div className="mt-10 p-6 border border-border rounded-xl bg-surface">
      <p className="text-sm font-medium mb-3">Este artigo foi útil?</p>
      <div className="flex gap-2 mb-3">
        <Button
          variant={state === "yes" ? "default" : "outline"}
          size="sm"
          onClick={() => setState("yes")}
          className={state === "yes" ? "gradient-primary text-primary-foreground border-0" : ""}
        >
          <ThumbsUp className="h-4 w-4 mr-1" /> Sim
        </Button>
        <Button
          variant={state === "no" ? "default" : "outline"}
          size="sm"
          onClick={() => setState("no")}
          className={state === "no" ? "bg-destructive text-destructive-foreground border-0" : ""}
        >
          <ThumbsDown className="h-4 w-4 mr-1" /> Não
        </Button>
      </div>

      {(state === "yes" || state === "no") && (
        <div className="animate-fade-in">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={state === "no" ? "O que podemos melhorar?" : "Algum comentário adicional?"}
            className="w-full border border-border rounded-lg p-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none"
            rows={3}
          />
          <Button
            size="sm"
            onClick={() => setState("sent")}
            className="mt-2 gradient-primary text-primary-foreground border-0"
          >
            <Send className="h-3.5 w-3.5 mr-1" /> Enviar feedback
          </Button>
        </div>
      )}
    </div>
  );
}
