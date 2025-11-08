"use client";

import { NewsArticle } from "@/types";
import { NewsCard } from "./news-card";
import { cn } from "@/lib/utils";

interface NewsGridProps {
  articles: NewsArticle[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function NewsGrid({ articles, columns = 3, className }: NewsGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-6",
        gridCols[columns],
        className
      )}
    >
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
