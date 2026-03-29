import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chrisma — 用 AI 让一切变得更有魅力",
  description:
    "Chrisma 是专注 AI 应用创新的 OPC，面向 toB / toC 双赛道，提供 AI 风水、AI 命理、AIGC 创作平台与企业级 Agent 解决方案。",
  keywords: [
    "Chrisma",
    "AI",
    "人工智能",
    "AIGC",
    "Agent",
    "AI 应用",
    "一人公司",
    "OPC",
  ],
  openGraph: {
    title: "Chrisma — 用 AI 让一切变得更有魅力",
    description:
      "专注 AI 应用研发与落地：传统文化智能、AIGC 创作与企业 Agent，高效 OPC 团队精准交付。",
    locale: "zh_CN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${syne.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden pb-[env(safe-area-inset-bottom,0px)]">
        {children}
      </body>
    </html>
  );
}
