export type CharsetOptions = {
  lowercase: boolean
  uppercase: boolean
  numbers: boolean
  symbols: boolean
  excludeSimilar: boolean
}

const LOWER = "abcdefghijklmnopqrstuvwxyz"
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NUM = "0123456789"
// A curated set of symbols that are commonly accepted
const SYM = "!@#$%^&*()-_=+[]{};:,.?".split("").join("")

const SIMILAR = new Set(["i", "I", "l", "L", "1", "o", "O", "0"])

export function buildCharset(opts: CharsetOptions): string {
  let charset = ""
  if (opts.lowercase) charset += LOWER
  if (opts.uppercase) charset += UPPER
  if (opts.numbers) charset += NUM
  if (opts.symbols) charset += SYM
  if (opts.excludeSimilar) {
    charset = [...charset].filter((c) => !SIMILAR.has(c)).join("")
  }
  return charset
}

export function generatePassword(length: number, opts: CharsetOptions): string {
  const charset = buildCharset(opts)
  if (!charset) return ""
  const chars = charset.split("")
  const cryptoObj =
    typeof globalThis !== "undefined" && "crypto" in globalThis
      ? (globalThis as { crypto: Crypto }).crypto
      : undefined
  const bytes: number[] = []
  if (cryptoObj?.getRandomValues) {
    const arr = new Uint32Array(length)
    cryptoObj.getRandomValues(arr)
    for (let i = 0; i < length; i++) bytes.push(arr[i])
  } else {
    for (let i = 0; i < length; i++) bytes.push(Math.floor(Math.random() * 4294967296))
  }
  return bytes.map((b) => chars[b % chars.length]).join("")
}

export type Strength = {
  score: 0 | 1 | 2 | 3 | 4
  label: "极弱" | "较弱" | "一般" | "较强" | "很强"
  suggestions: string[]
}

export function estimateStrength(pw: string, opts?: CharsetOptions): Strength {
  if (!pw) return { score: 0, label: "极弱", suggestions: ["请选择字符集", "增加长度"] }
  let points = 0
  if (pw.length >= 8) points += 1
  if (pw.length >= 12) points += 1
  const sets = [LOWER, UPPER, NUM, SYM]
  let diversity = 0
  for (const s of sets) if ([...pw].some((c) => s.includes(c))) diversity += 1
  points += Math.max(0, diversity - 1) // +0..+3
  points = Math.min(4, points)
  const labels: Strength["label"][] = ["极弱", "较弱", "一般", "较强", "很强"]
  const suggestions: string[] = []
  if (pw.length < 12) suggestions.push("建议长度≥12")
  if (diversity < 3) suggestions.push("混合大小写/数字/符号")
  if (opts?.excludeSimilar !== true) suggestions.push("可排除易混字符")
  return { score: points as Strength["score"], label: labels[points], suggestions }
}
