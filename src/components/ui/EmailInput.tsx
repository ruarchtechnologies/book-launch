"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

interface FormValues {
  email: string;
}

interface EmailInputProps {
  onSubmit: (email: string) => Promise<void>;
  loading?: boolean;
  success?: boolean;
  error?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export function EmailInput({
  onSubmit,
  loading = false,
  success = false,
  error,
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  className,
}: EmailInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  if (success) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/30",
          className
        )}
      >
        <svg
          className="w-5 h-5 text-success shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-success font-medium">
          You&apos;re on the list! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(({ email }) => onSubmit(email))}
      className={cn("flex flex-col sm:flex-row gap-3", className)}
    >
      <div className="flex-1 flex flex-col gap-1.5">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email",
            },
          })}
          type="email"
          placeholder={placeholder}
          autoComplete="email"
          disabled={loading}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-subtle outline-none transition-colors duration-200",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            errors.email || error
              ? "border-error focus:border-error focus:ring-error/20"
              : "border-border"
          )}
        />
        {(errors.email || error) && (
          <p className="text-sm text-error px-1">
            {errors.email?.message ?? error}
          </p>
        )}
      </div>
      <Button type="submit" disabled={loading} size="lg" className="shrink-0">
        {loading ? "Joining…" : buttonText}
      </Button>
    </form>
  );
}
