import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  href: string;
}

export function ArticleCard({ title, summary, category, readTime, href }: ArticleCardProps) {
  return (
    <Link
      to={href}
      className="group block glass-card rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-primary bg-sidebar-accent px-2.5 py-1 rounded-full">
          {category}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {readTime}
        </span>
      </div>
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {summary}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        Abrir <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
