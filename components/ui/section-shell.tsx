import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionShellProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}
