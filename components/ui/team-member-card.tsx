"use client";

import Image from "next/image";
import { TeamMember } from "@/types";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: "leader" | "professional";
  className?: string;
}

export function TeamMemberCard({ member, variant = "professional", className }: TeamMemberCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-xl",
        variant === "leader" && "bg-gradient-to-br from-primary/5 to-transparent",
        className
      )}
    >
      <div className="p-6">
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="space-y-2">
          <h3 className={cn(
            "text-xl font-bold text-foreground group-hover:text-primary",
            variant === "leader" && "text-2xl"
          )}>
            {member.name}
          </h3>

          <p className="text-sm font-semibold text-primary">
            {member.role}
          </p>

          {member.bio && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {member.bio}
            </p>
          )}

          {variant === "leader" && (
            <div className="pt-4">
              <div className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                LEADERSHIP
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Card>
  );
}
