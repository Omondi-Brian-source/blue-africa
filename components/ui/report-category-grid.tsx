"use client";

import Image from "next/image";
import { ReportCategory } from "@/types";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface ReportCategoryGridProps {
  categories: ReportCategory[];
  className?: string;
}

export function ReportCategoryGrid({ categories, className }: ReportCategoryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {categories.map((category) => (
        <Card
          key={category.id}
          className="group relative h-full overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-xl"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white">
                {category.title}
              </h3>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>

            <button className="mt-4 flex items-center text-sm font-semibold text-primary transition-all hover:gap-2">
              Learn More
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
