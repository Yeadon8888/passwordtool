import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number // 0..100
  color?: string
}

export function Progress({ value, className, color, ...props }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={cn("h-2 w-full rounded-full bg-border overflow-hidden", className)} {...props}>
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${pct}%`, backgroundColor: color || "oklch(0.6 0 0)" }}
      />
    </div>
  )
}

