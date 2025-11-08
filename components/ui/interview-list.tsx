"use client";

import { Interview } from "@/types";
import { cn } from "@/lib/utils";

interface InterviewListProps {
  interviews: Interview[];
  className?: string;
}

export function InterviewList({ interviews, className }: InterviewListProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {interviews.map((interview, index) => (
        <div
          key={interview.id}
          className="group flex items-start gap-4 rounded-lg border-l-4 border-primary bg-card p-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-lg"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {index + 1}
          </div>

          <div className="flex-1 space-y-1">
            <h4 className="font-bold text-foreground group-hover:text-primary">
              {interview.person}
            </h4>
            <p className="text-sm text-muted-foreground">
              {interview.title}, {interview.organization}
            </p>
            {interview.topic && (
              <p className="text-sm font-medium text-primary">
                {interview.topic}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
