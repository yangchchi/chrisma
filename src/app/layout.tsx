import type { Metadata } from "next";
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
    "Chrisma 是一家专注 AI 应用的创新公司，以多模态智能与极致产品体验，赋能企业与创作者。",
  keywords: ["Chrisma", "AI", "人工智能", "多模态", "AI 应用"],
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
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
