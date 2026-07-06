import DOMPurify from "dompurify";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichContentProps {
  html?: string | null;
  markdown?: string | null;
}

// Renderiza o conteúdo do artigo:
// - se houver HTML (TipTap), sanitiza e exibe;
// - senão, cai para o Markdown legado (react-markdown).
export function RichContent({ html, markdown }: RichContentProps) {
  if (html && html.trim()) {
    const limpo = DOMPurify.sanitize(html, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: [
        "allow", "allowfullscreen", "frameborder", "src", "width", "height",
        "data-callout", "data-tipo", "target", "rel",
      ],
    });
    return (
      <div
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: limpo }}
      />
    );
  }
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown || ""}</ReactMarkdown>
    </div>
  );
}
