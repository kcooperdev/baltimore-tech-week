import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

export function GlitchText({ text, className, as: Component = "h1" }: GlitchTextProps) {
  return (
    <Component className={cn("relative inline-block font-mono font-bold uppercase tracking-tighter", className)}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -z-10 translate-x-[2px] text-primary opacity-70 mix-blend-screen animate-pulse"
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 -translate-x-[2px] text-accent opacity-70 mix-blend-screen animate-pulse delay-75"
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
}

