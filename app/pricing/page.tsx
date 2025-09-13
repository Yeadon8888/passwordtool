import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export default function Pricing() {
  return (
    <main className="mx-auto max-w-5xl px-6 md:px-8 py-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">方案与定价</h1>
        <p className="mt-2 text-muted-foreground">免费即可满足大多数个人使用，专业版规划中。</p>
      </section>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-medium">免费版</h3>
            <p className="text-sm text-muted-foreground">零成本、即刻使用</p>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 单次生成一条密码</li>
              <li>• 强度评估与建议</li>
              <li>• 本地生成与复制</li>
            </ul>
            <Link href="/" className="block mt-4">
              <Button className="w-full">立刻使用</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-medium">专业版（规划中）</h3>
            <p className="text-sm text-muted-foreground">适合重度用户与团队</p>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 批量生成与导出 CSV</li>
              <li>• 预设策略与快捷切换</li>
              <li>• 自定义符号集与排除列表</li>
            </ul>
            <Button className="mt-4 w-full" variant="secondary" disabled>
              敬请期待
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
