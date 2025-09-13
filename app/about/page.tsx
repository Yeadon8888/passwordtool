export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">关于 PasswordTool</h1>
      <p className="mt-4 text-muted-foreground">
        我们用极简的方式，提供专业可靠的密码生成体验。产品遵循“先核心后完善”的迭代原则，先解决最重要的使用路径：选项 → 生成 → 复制。
      </p>
      <p className="mt-4 text-muted-foreground">
        技术栈基于 Next.js + TypeScript + Tailwind，所有生成逻辑在浏览器本地完成，不上传任何敏感数据。
      </p>
    </main>
  )
}

