---
title: 从 0 搭一个作品集网站：技术选型与部署记录
description: 为什么用 Astro + Tailwind，以及如何免费部署到 Cloudflare Pages。
date: 2026-08-07
tags:
  - Astro
  - 部署
  - 作品集
---

## 为什么是 Astro

作品集网站的核心是内容：项目、博客、简历。Astro 是内容型网站的很好选择——性能好、上手快、Markdown 博客开箱即用，需要交互时再加组件即可。配 Tailwind CSS 做样式，全程没有多余的运行时负担。

## 内容怎么管理

项目与博客都用 Astro Content Collections 管理：每个项目/文章是一个 Markdown 文件，带 frontmatter（标题、日期、技术栈、指标等）。改内容不用碰页面代码，构建时自动生成页面，还有类型校验防止字段写错。

## 部署：零成本的 Cloudflare Pages

1. 代码推到 GitHub 公开仓库；
2. Cloudflare Pages 里新建项目并关联该仓库；
3. 构建命令 `pnpm build`，输出目录 `dist`；
4. 推送 main 分支即自动部署，自带 HTTPS 和免费子域名。

整个过程不需要买服务器，也不需要备案。国内访问速度可通过 Cloudflare 的全球 CDN 保证，整体体验不错。

## 一些小细节

- 主题默认深色，尊重用户已保存的选择；
- 联系方式做成右下角悬浮入口，移动端也友好；
- 简历 PDF 直接放在站点里供下载，文件名规范、更新方便。

这篇文章本身就是这个网站的第一篇工程记录。
