/**
 * 品牌静态资源 URL。
 *
 * 若替换 `public/brand/` 下同名文件后页面仍显示旧图，常见原因：
 * 1. Next.js `/_next/image` 与浏览器按「完整 URL」缓存；路径不变则易命中旧缓存。
 * 2. 开发时替换二进制文件，热更新不一定触发图片重拉取。
 *
 * 处理：在 `.env.local` 中提高版本号后重启 dev，或硬刷新（禁用缓存）：
 *   NEXT_PUBLIC_LOGO_VERSION=2
 */
export const CHRISMA_LOGO_PNG = `/brand/chrisma-logo.png?v=${process.env.NEXT_PUBLIC_LOGO_VERSION ?? "1"}`;
