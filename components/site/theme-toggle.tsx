"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    setIsDark(root.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !root.classList.contains("dark")
    root.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setIsDark(next)
  }

  if (!mounted) return null
  return (
    <Button variant="ghost" size="sm" onClick={toggle} aria-label="切换主题">
      {isDark ? "🌙" : "☀️"}
    </Button>
  )
}

