import { cn } from "../utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button type="button" className={cn("rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-ivory transition hover:bg-forest-deep", className)} {...props}>
      {children}
    </button>
  );
}
