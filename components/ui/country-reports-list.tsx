"use client";

import { CountryReport } from "@/types";
import { cn } from "@/lib/utils";

interface CountryReportsListProps {
  reports: CountryReport[];
  className?: string;
}

export function CountryReportsList({ reports, className }: CountryReportsListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {reports.map((report) => (
        <div
          key={report.number}
          className="group flex items-start gap-4 rounded-lg border-2 border-border bg-card p-4 transition-all duration-300 hover:border-primary hover:shadow-lg"
        >
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xl font-black text-black transition-transform group-hover:scale-110">
            {report.number}
          </div>

          <div className="flex-1">
            <h3 className="mb-1 font-bold text-foreground group-hover:text-primary">
              {report.country}
              {report.year && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({report.year})
                </span>
              )}
            </h3>
            <p className="text-sm text-muted-foreground">
              {report.title}
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
