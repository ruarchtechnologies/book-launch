import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-primary/10 text-primary border border-primary/20":
            variant === "default",
          "border border-border text-muted": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
