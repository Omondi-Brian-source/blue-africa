"use client";

import Link from "next/link";
import { NewsArticle } from "@/types";
import { Badge } from "./badge";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
}

const categoryColors = {
  announcement: "bg-green-500 hover:bg-green-600",
  partnership: "bg-blue-500 hover:bg-blue-600",
  investment: "bg-yellow-500 hover:bg-yellow-600 text-black",
  report: "bg-purple-500 hover:bg-purple-600",
  event: "bg-cyan-500 hover:bg-cyan-600",
};

export function NewsCard({ article, className }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/news/${article.slug}`}>
      <Card
        className={cn(
          "group relative h-full overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-xl",
          className
        )}
      >
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <Badge
              className={cn(
                "uppercase text-xs font-bold transition-colors",
                categoryColors[article.category]
              )}
            >
              {article.category}
            </Badge>
            <time className="text-sm text-muted-foreground">
              {formattedDate}
            </time>
          </div>

          <h3 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center text-sm font-semibold text-primary">
            Read more
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </Card>
    </Link>
  );
}
