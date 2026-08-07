# CQL · AI 工程师求职作品集网站

曹乔量（CQL）的个人求职作品集网站。全中文静态站点，面向国内 AI 工程师（应用向）岗位。

## 技术栈

- [Astro](https://astro.build) 7.x（内容型静态站点）
- Tailwind CSS 4.x（`@tailwindcss/vite` 插件）
- Astro Content Collections（博客与项目数据）
- 部署：Cloudflare Pages（免费，GitHub 自动部署）

## 本地运行

```bash
pnpm install
pnpm dev        # 开发预览 http://localhost:4321
pnpm build      # 构建到 dist/
pnpm preview    # 本地预览构建产物
```

> 需要 Node.js 20+。Windows 下如遇 `'node' is not recognized`，请先把 Node 所在目录加入 PATH。

## 目录结构

```text
public/                   # 静态资源：简历 PDF、og-image.png、favicon、robots.txt
resume/resume.html        # 简历排版源文件（改这里 → 用 Edge 打印成 PDF）
src/data/site.ts          # ★ 联系方式等全站信息，改这一处即可
src/content/blog/         # 博客文章（Markdown + frontmatter）
src/content/projects/     # 项目数据（Markdown + frontmatter）
src/pages/                # 页面：首页 / 关于 / 项目 / 技能 / 经历 / 博客 / 联系 / 404
src/components/           # 导航、页脚、右下角联系面板、项目卡片、图表组件
src/layouts/BaseLayout.astro
```

## 修改内容

- **联系方式**：编辑 `src/data/site.ts`（邮箱、手机号、GitHub）；
- **项目 / 博客**：编辑 `src/content/` 下对应 Markdown 的 frontmatter 与正文；
- **简历 PDF**：改 `resume/resume.html` 后用 Edge 重新打印：

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="public\曹乔量_AI工程师_简历.pdf" "file:///.../resume.html"
```

## 部署到 Cloudflare Pages

1. 把本项目推到 GitHub 公开仓库（建议仓库名 `cql-portfolio`）；
2. 登录 [Cloudflare Pages](https://pages.cloudflare.com) → Create project → 关联该仓库；
3. 构建配置：
   - 构建命令：`pnpm build`
   - 输出目录：`dist`
4. 保存后推送 `main` 分支即自动部署，获得 `https://<project>.pages.dev` 免费子域名；
5. 如果最终子域名不是 `cql-ai.pages.dev`，同步修改：
   - `astro.config.mjs` 中的 `site` 字段；
   - `public/robots.txt` 中的 Sitemap 地址。

## 上线前检查清单（重要）

- [ ] `src/data/site.ts`：填入真实手机号、替换 GitHub 链接；
- [ ] 项目指标为**目标值**，P1 完成后按实测数据更新 `src/content/projects/p1-water-level.md`；
- [ ] 替换首页/项目占位图表为项目真实截图（`HeroChart.astro` 是示意）；
- [ ] 博客日期与内容确认（当前为草稿）；
- [ ] 简历 PDF 已更新（含真实联系方式与最终项目数据）；
- [ ] 本地 `pnpm build` 通过后推 GitHub，等待 Cloudflare 自动部署完成。
