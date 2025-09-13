import Link from "next/link"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 backdrop-blur bg-background/70">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          PasswordTool
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/features" className="hover:text-foreground">特性</Link>
          <Link href="/pricing" className="hover:text-foreground">定价</Link>
          <Link href="/about" className="hover:text-foreground">关于</Link>
          <Link href="/privacy" className="hover:text-foreground">隐私</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/">
            <Button size="sm">立即使用</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
