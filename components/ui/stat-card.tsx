"use client";

import { ImpactMetric } from "@/types";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  metric: ImpactMetric;
  className?: string;
  variant?: "default" | "primary" | "accent";
}

export function StatCard({ metric, className, variant = "default" }: StatCardProps) {
  const variantStyles = {
    default: "bg-card border-border",
    primary: "bg-primary/5 border-primary/20",
    accent: "bg-accent border-accent-foreground/20",
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105",
        variantStyles[variant],
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 text-4xl font-bold text-primary lg:text-5xl">
          {metric.value}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {metric.label}
        </h3>
        <p className="text-sm text-muted-foreground">
          {metric.description}
        </p>
      </div>

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:scale-150" />
    </Card>
  );
}
