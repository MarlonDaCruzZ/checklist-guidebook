import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import { Node, mergeAttributes } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { uploadImagem } from "@/lib/docs";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import {
  Bold, Italic, Strikethrough, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, Link as LinkIcon, Image as ImageIcon,
  Youtube as YoutubeIcon, Table as TableIcon, Info, AlertTriangle, Undo, Redo, Loader2,
} from "lucide-react";

// Nó customizado "aviso" (callout): <div data-callout data-tipo="info|atencao">
const Callout = Node.create({
  name: "callout",
  group: "block",
  content: "block+",
  defining: true,
  addAttributes() {
    return {
      tipo: {
        default: "info",
        parseHTML: (el) => (el as HTMLElement).getAttribute("data-tipo") || "info",
        renderHTML: (attrs) => ({ "data-tipo": attrs.tipo }),
      },
    };
  },
  parseHTML() {
    return [{ tag: "div[data-callout]" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-callout": "", class: "callout" }), 0];
  },
});

interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
}

function Botao({
  onClick,
  ativo,
  titulo,
  children,
}: {
  onClick: () => void;
  ativo?: boolean;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={titulo}
      onClick={onClick}
      className={`h-8 w-8 flex items-center justify-center rounded-md transition-colors ${
        ativo ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Barra({ editor }: { editor: Editor }) {
  const sep = <span className="w-px h-5 bg-border mx-0.5" />;
  const fileRef = useRef<HTMLInputElement>(null);
  const [enviando, setEnviando] = useState(false);

  const onImagem = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setEnviando(true);
    try {
      const url = await uploadImagem(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      window.alert("Falha ao enviar imagem: " + (err instanceof Error ? err.message : ""));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b border-border px-2 py-1.5 sticky top-0 bg-card z-10">
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onImagem} />
      <Botao titulo="Título 1" ativo={editor.isActive("heading", { level: 1 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}><Heading1 className="h-4 w-4" /></Botao>
      <Botao titulo="Título 2" ativo={editor.isActive("heading", { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 className="h-4 w-4" /></Botao>
      <Botao titulo="Título 3" ativo={editor.isActive("heading", { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 className="h-4 w-4" /></Botao>
      {sep}
      <Botao titulo="Negrito" ativo={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}><Bold className="h-4 w-4" /></Botao>
      <Botao titulo="Itálico" ativo={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}><Italic className="h-4 w-4" /></Botao>
      <Botao titulo="Tachado" ativo={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough className="h-4 w-4" /></Botao>
      {sep}
      <Botao titulo="Lista" ativo={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}><List className="h-4 w-4" /></Botao>
      <Botao titulo="Lista numerada" ativo={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered className="h-4 w-4" /></Botao>
      <Botao titulo="Citação" ativo={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote className="h-4 w-4" /></Botao>
      <Botao titulo="Bloco de código" ativo={editor.isActive("codeBlock")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code className="h-4 w-4" /></Botao>
      {sep}
      <Botao titulo="Link"
        onClick={() => {
          const url = window.prompt("URL do link:");
          if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        }}><LinkIcon className="h-4 w-4" /></Botao>
      <Botao titulo="Imagem (enviar do computador)"
        onClick={() => fileRef.current?.click()}>
        {enviando ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
      </Botao>
      <Botao titulo="Vídeo do YouTube"
        onClick={() => {
          const url = window.prompt("URL do vídeo (YouTube):");
          if (url) editor.commands.setYoutubeVideo({ src: url });
        }}><YoutubeIcon className="h-4 w-4" /></Botao>
      <Botao titulo="Tabela"
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        <TableIcon className="h-4 w-4" /></Botao>
      {sep}
      <Botao titulo="Aviso (informação)"
        onClick={() => editor.chain().focus().wrapIn("callout", { tipo: "info" }).run()}>
        <Info className="h-4 w-4" /></Botao>
      <Botao titulo="Aviso (atenção)"
        onClick={() => editor.chain().focus().wrapIn("callout", { tipo: "atencao" }).run()}>
        <AlertTriangle className="h-4 w-4" /></Botao>
      {sep}
      <Botao titulo="Desfazer" onClick={() => editor.chain().focus().undo().run()}><Undo className="h-4 w-4" /></Botao>
      <Botao titulo="Refazer" onClick={() => editor.chain().focus().redo().run()}><Redo className="h-4 w-4" /></Botao>
    </div>
  );
}

export function RichEditor({ value, onChange }: RichEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, autolink: true }),
      Image,
      Youtube.configure({ width: 640, height: 360, nocookie: true }),
      Placeholder.configure({ placeholder: "Escreva o conteúdo do documento..." }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Callout,
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "prose prose-slate dark:prose-invert max-w-none min-h-[400px] px-5 py-4 focus:outline-none",
      },
    },
  });

  // Sincroniza quando o valor vem de fora (ex.: carregar um artigo para editar).
  useEffect(() => {
    if (editor && value && value !== editor.getHTML()) {
      editor.commands.setContent(value, false);
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <Barra editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
