
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button, type ButtonProps } from "@/components/ui/button" // Ensure ButtonProps is imported if needed
import { cn } from '@/lib/utils';


interface ModeToggleProps extends ButtonProps {} // Use ButtonProps from ui/button

export function ModeToggle({ className, variant = "ghost", size = "icon", ...props }: ModeToggleProps) {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder or null to avoid mismatches during SSR
    // For an icon button, a simple div with appropriate size might be best or just the button disabled.
    return <Button variant={variant} size={size} className={cn("opacity-0 pointer-events-none", className)} {...props} disabled><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className={className}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
