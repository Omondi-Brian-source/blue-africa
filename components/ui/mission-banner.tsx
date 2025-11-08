"use client";

import { cn } from "@/lib/utils";

interface MissionBannerProps {
  value: string;
  description: string;
  className?: string;
}

export function MissionBanner({ value, description, className }: MissionBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 p-8 text-black shadow-2xl lg:p-12",
        className
      )}
    >
      <div className="relative z-10">
        <h2 className="mb-4 text-4xl font-black lg:text-5xl">
          Our mission is to unlock{" "}
          <span className="underline decoration-4 underline-offset-8">
            {value}
          </span>
        </h2>
        <p className="max-w-3xl text-xl font-semibold lg:text-2xl">
          {description}
        </p>
      </div>

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
    </div>
  );
}
