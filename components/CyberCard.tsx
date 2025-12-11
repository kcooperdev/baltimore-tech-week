import { cn } from "@/lib/utils";
import React from "react";

interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "neon" | "glitch";
  title?: string;
}

export function CyberCard({ 
  children, 
  className, 
  variant = "default",
  title,
  ...props 
}: CyberCardProps) {
  return (
    <div 
      className={cn(
        "relative border-2 bg-card p-6 transition-all duration-200",
        "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_var(--color-primary)]",
        variant === "neon" && "border-primary shadow-[0_0_10px_var(--color-primary)]",
        variant === "glitch" && "border-accent hover:shadow-[8px_8px_0px_0px_var(--color-accent)]",
        className
      )}
      {...props}
    >
      {/* Corner accents */}
      <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-primary" />
      <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-primary" />
      <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-primary" />
      <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary" />

      {/* Window Header */}
      {title && (
        <div className="absolute -top-4 left-4 bg-background px-2 font-mono text-sm font-bold uppercase tracking-widest text-primary border border-primary">
          {title}
        </div>
      )}

      {children}
    </div>
  );
}

