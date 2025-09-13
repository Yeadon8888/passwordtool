export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">隐私说明</h1>
      <p className="mt-4 text-muted-foreground">
        PasswordTool 不收集、不存储你的密码或选项数据。密码生成在浏览器本地完成，复制操作使用系统剪贴板。
      </p>
      <p className="mt-4 text-muted-foreground">
        如你安装了浏览器扩展（如自动填充插件），其可能注入标记到页面；这不会影响产品功能，但可能在开发模式下触发 React 的水合警告。
      </p>
    </main>
  )
}

