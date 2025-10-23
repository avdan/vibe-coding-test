import { forwardRef } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

type ButtonRef = HTMLButtonElement | HTMLAnchorElement;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-secondary text-text-inverted shadow-medium hover:bg-brand-secondary/90",
  secondary: "border border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10",
  ghost: "text-text-primary hover:text-brand-secondary hover:bg-brand-muted/20"
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base"
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

export const Button = forwardRef<ButtonRef, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, as = "button", ...props },
  ref
) {
  const classes = buttonClasses({ variant, size, className });

  if (as === "a") {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={classes} {...anchorProps} />;
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button ref={ref as ForwardedRef<HTMLButtonElement>} className={classes} {...buttonProps} />;
});
