import { Shield, Settings, Zap, Lock, Eye, Shuffle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Features() {
  const items = [
    { icon: Shield, title: "本地生成", desc: "所有运算在浏览器内完成，不上传数据。" },
    { icon: Settings, title: "高度可配", desc: "长度、字符集、易混排除，一步到位。" },
    { icon: Zap, title: "极速流畅", desc: "无跳转、无广告，交互即时响应。" },
    { icon: Lock, title: "强度反馈", desc: "启发式评估，清晰分级与建议。" },
    { icon: Eye, title: "防窥展示", desc: "一键隐藏显示，保护现场使用安全。" },
    { icon: Shuffle, title: "即将推出", desc: "批量生成、预设策略、CSV 导出。" },
  ]
  return (
    <main className="mx-auto max-w-5xl px-6 md:px-8 py-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">特性一览</h1>
        <p className="mt-2 text-muted-foreground">纯净、可控、专业的密码生成体验。</p>
      </section>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="relative overflow-hidden">
            <CardHeader>
              <Icon className="h-6 w-6" />
              <h3 className="mt-3 text-lg font-medium">{title}</h3>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

