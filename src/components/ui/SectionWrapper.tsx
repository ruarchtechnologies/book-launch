import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  dark = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 px-6",
        dark ? "bg-black/20" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-[72rem] mx-auto">{children}</div>
    </section>
  );
}
