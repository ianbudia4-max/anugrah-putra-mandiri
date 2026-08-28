import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-dark shadow-sm shadow-blue/20",
  secondary:
    "bg-navy text-white hover:bg-navy-dark",
  outline:
    "border border-line bg-white text-navy hover:border-navy",
  ghost: "text-navy hover:bg-navy/5",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-[3.25rem] px-7 text-base",
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 whitespace-nowrap";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  href,
  target,
  rel,
  onClick,
  type = "button",
}: BaseProps & {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
