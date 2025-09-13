"use client"
import { useCallback, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CharsetOptions, estimateStrength, generatePassword } from "@/lib/password"
import { Shield, Zap, Settings, MousePointerClick } from "lucide-react"

export default function Home() {
  const [length, setLength] = useState<number>(16)
  const [options, setOptions] = useState<CharsetOptions>({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: false,
    excludeSimilar: false,
  })
  const [password, setPassword] = useState<string>("")
  const [masked, setMasked] = useState<boolean>(false)

  const strength = useMemo(() => estimateStrength(password, options), [password, options])

  const regen = useCallback(() => {
    setPassword(generatePassword(length, options))
  }, [length, options])

  const copy = useCallback(async () => {
    if (!password) return
    try {
      await navigator.clipboard.writeText(password)
    } catch {
      // ignore
    }
  }, [password])

  return (
    <main className="mx-auto max-w-3xl p-6 md:p-10">
      <section className="mb-8 text-center relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 [mask-image:radial-gradient(50%_50%_at_50%_35%,#000,transparent)]"
          style={{
            background:
              "radial-gradient(1200px 500px at 50% -50%, oklch(0.97 0.02 250) 0%, transparent 60%), conic-gradient(from 90deg at 50% 50%, oklch(0.85 0.04 230), oklch(0.95 0.03 100), oklch(0.9 0.04 40), oklch(0.9 0.04 320))",
          }}
        />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">现代化密码生成器</h1>
        <p className="mt-2 text-muted-foreground">快速生成强密码，简洁而强大。无广告、无跟踪。</p>
      </section>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <Label htmlFor="password">生成的密码</Label>
              <Input
                id="password"
                value={masked ? "•".repeat(password.length || 12) : password}
                placeholder="点击“生成”得到密码"
                readOnly
                className="mt-2 text-base"
              />
            </div>
            <div className="flex flex-col gap-2 pt-6 min-w-32">
              <Button onClick={regen}>生成</Button>
              <Button variant="secondary" onClick={copy} disabled={!password}>
                复制
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between">
                <Label>长度：{length}</Label>
                <span className="text-sm text-muted-foreground">4 - 64</span>
              </div>
              <Slider value={length} min={4} max={64} onValueChange={setLength} className="mt-3" />

              <div className="mt-6 grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={options.lowercase}
                    onCheckedChange={(checked) => setOptions((o) => ({ ...o, lowercase: checked }))}
                  />
                  <span className="text-sm">小写字母</span>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={options.uppercase}
                    onCheckedChange={(checked) => setOptions((o) => ({ ...o, uppercase: checked }))}
                  />
                  <span className="text-sm">大写字母</span>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={options.numbers}
                    onCheckedChange={(checked) => setOptions((o) => ({ ...o, numbers: checked }))}
                  />
                  <span className="text-sm">数字</span>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={options.symbols}
                    onCheckedChange={(checked) => setOptions((o) => ({ ...o, symbols: checked }))}
                  />
                  <span className="text-sm">符号</span>
                </label>
                <label className="flex items-center gap-2 col-span-2">
                  <Checkbox
                    checked={options.excludeSimilar}
                    onCheckedChange={(checked) => setOptions((o) => ({ ...o, excludeSimilar: checked }))}
                  />
                  <span className="text-sm">排除易混字符（i、l、1、o、0）</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-between">
                  <Label>强度</Label>
                  <span className="text-sm text-muted-foreground">{strength.label}</span>
                </div>
                <Progress
                  value={(strength.score / 4) * 100}
                  className="mt-2"
                  color={
                    strength.score <= 1
                      ? "#ef4444"
                      : strength.score === 2
                      ? "#f59e0b"
                      : strength.score === 3
                      ? "#22c55e"
                      : "#16a34a"
                  }
                />
                {strength.suggestions.length > 0 && (
                  <ul className="mt-2 text-xs text-muted-foreground list-disc list-inside space-y-1">
                    {strength.suggestions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="mask">隐藏显示</Label>
                  <p className="text-xs text-muted-foreground">防止旁观者窥屏</p>
                </div>
                <Switch id="mask" checked={masked} onCheckedChange={setMasked} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 落地页：特性 */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center">为什么选择 PasswordTool</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-card">
            <Shield className="h-6 w-6" />
            <h3 className="mt-4 font-medium">本地生成</h3>
            <p className="mt-1 text-sm text-muted-foreground">不上传到服务器，安全可控。</p>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <Zap className="h-6 w-6" />
            <h3 className="mt-4 font-medium">即刻可用</h3>
            <p className="mt-1 text-sm text-muted-foreground">打开即用，毫秒级生成强密码。</p>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <Settings className="h-6 w-6" />
            <h3 className="mt-4 font-medium">可高度定制</h3>
            <p className="mt-1 text-sm text-muted-foreground">长度、字符集、避让规则随心配。</p>
          </div>
        </div>
      </section>

      {/* 落地页：方案/定价（示意） */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center">方案与定价</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border bg-card">
            <h3 className="text-lg font-medium">免费版</h3>
            <ul className="mt-3 text-sm text-muted-foreground space-y-2">
              <li>• 单次生成一条密码</li>
              <li>• 强度评估与建议</li>
              <li>• 本地生成与复制</li>
            </ul>
            <Button className="mt-4 w-full">
              <MousePointerClick className="mr-2 h-4 w-4" /> 立刻使用
            </Button>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <h3 className="text-lg font-medium">专业版（规划中）</h3>
            <ul className="mt-3 text-sm text-muted-foreground space-y-2">
              <li>• 批量生成与导出 CSV</li>
              <li>• 预设策略与快捷切换</li>
              <li>• 自定义符号集与排除列表</li>
            </ul>
            <Button variant="secondary" className="mt-4 w-full" disabled>
              即将上线
            </Button>
          </div>
        </div>
      </section>

      {/* 落地页：FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center">常见问题</h2>
        <div className="mt-6 space-y-3">
          <details className="rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-medium">密码是否会被上传？</summary>
            <p className="mt-2 text-sm text-muted-foreground">不会。生成逻辑在浏览器本地完成。</p>
          </details>
          <details className="rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-medium">强度评估是否专业？</summary>
            <p className="mt-2 text-sm text-muted-foreground">当前为快速启发式；后续将引入更精细的评估模型。</p>
          </details>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} PasswordTool. 本工具开源，仅供学习与参考。</p>
      </footer>
    </main>
  )
}
