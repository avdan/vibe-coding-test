import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "elevated" | "outline" | "muted" | "inverted";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: "none" | "md" | "lg" | "xl";
};

const variantClasses: Record<CardVariant, string> = {
  elevated: "bg-surface-base/95 shadow-soft border border-brand-muted/40 backdrop-blur",
  outline: "bg-surface-base border border-brand-muted/60",
  muted: "bg-surface-subtle border border-brand-muted/30",
  inverted: "bg-surface-inverted text-text-inverted border border-brand-secondary/30"
};

const paddingClasses = {
  none: "p-0",
  md: "p-6",
  lg: "p-8",
  xl: "p-10"
};

export function Card({ variant = "elevated", padding = "md", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative isolate rounded-3xl",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
