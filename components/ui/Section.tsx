import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  background?: "default" | "muted" | "dark" | "gradient";
  spacing?: "none" | "tight" | "default" | "loose";
  innerClassName?: string;
};

const backgroundStyles: Record<NonNullable<SectionProps["background"]>, string> = {
  default: "bg-transparent",
  muted: "bg-surface-subtle",
  dark: "bg-brand-midnight text-text-inverted",
  gradient:
    "bg-[radial-gradient(circle_at_top,_rgba(63,199,201,0.25),_transparent_45%),_linear-gradient(135deg,_#0B1742_0%,_#142A63_45%,_#0B1026_100%)] text-text-inverted"
};

const spacingStyles: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "py-0",
  tight: "py-section-tight",
  default: "py-section",
  loose: "py-[clamp(5rem,12vw,9rem)]"
};

export function Section({
  as: Component = "section",
  background = "default",
  spacing = "default",
  innerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative",
        backgroundStyles[background],
        spacingStyles[spacing],
        background === "gradient" && "overflow-hidden",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-gutter", innerClassName)}>{children}</div>
    </Component>
  );
}
