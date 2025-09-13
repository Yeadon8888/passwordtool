import * as React from "react"
import { cn } from "@/lib/utils"

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        onChange={(e) => {
          onChange?.(e)
          onCheckedChange?.(e.currentTarget.checked)
        }}
        className={cn(
          "h-4 w-4 rounded border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
        {...props}
      />
    )
  },
)
Checkbox.displayName = "Checkbox"
