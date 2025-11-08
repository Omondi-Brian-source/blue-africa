"use client";

import { EconomicTarget } from "@/types";
import { cn } from "@/lib/utils";

interface EconomicTargetBannerProps {
  target: EconomicTarget;
  className?: string;
}

export function EconomicTargetBanner({ target, className }: EconomicTargetBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 p-8 text-black shadow-2xl",
        className
      )}
    >
      <div className="relative z-10 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider">
          Blue Economy in Numbers
        </p>
        <div className="mb-4 text-6xl font-black lg:text-7xl">
          {target.value}
        </div>
        <p className="text-xl font-semibold">
          {target.label}
        </p>
      </div>

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
    </div>
  );
}
