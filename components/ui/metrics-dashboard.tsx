"use client";

import { ImpactMetric } from "@/types";
import { StatCard } from "./stat-card";
import { cn } from "@/lib/utils";

interface MetricsDashboardProps {
  metrics: ImpactMetric[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MetricsDashboard({
  metrics,
  title,
  description,
  columns = 3,
  className,
}: MetricsDashboardProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("w-full", className)}>
      {(title || description) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={cn(
          "grid gap-6",
          gridCols[columns]
        )}
      >
        {metrics.map((metric, index) => (
          <StatCard
            key={metric.id}
            metric={metric}
            variant={index % 3 === 0 ? "primary" : "default"}
          />
        ))}
      </div>
    </section>
  );
}
