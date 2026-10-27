import { cn } from "@/lib/cn";

// Four-point sparkle, the site's one recurring ornament.
export function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("w-4 h-4 text-primary shrink-0", className)}
      fill="currentColor"
    >
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" />
    </svg>
  );
}
