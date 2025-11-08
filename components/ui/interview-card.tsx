"use client";

import Image from "next/image";
import { Interview } from "@/types";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface InterviewCardProps {
  interview: Interview;
  className?: string;
}

export function InterviewCard({ interview, className }: InterviewCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-xl",
        className
      )}
    >
      <div className="p-6">
        {interview.image && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={interview.image}
              alt={interview.person}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
            {interview.person}
          </h3>

          <div className="space-y-1 text-sm">
            <p className="font-semibold text-muted-foreground">
              {interview.title}
            </p>
            <p className="text-muted-foreground">
              {interview.organization}
            </p>
          </div>

          <div className="pt-2">
            <p className="text-sm font-medium text-primary">
              {interview.topic}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Card>
  );
}
