import type { MetadataRoute } from "next"

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/features", "/pricing", "/about", "/privacy"]
  const now = new Date()
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: now }))
}

