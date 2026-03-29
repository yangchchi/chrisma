import Link from "next/link";
import { BrandLogoFooter } from "@/components/site/BrandLogo";

const nav = [
  { href: "#vision", label: "关于" },
  { href: "#products", label: "产品" },
  { href: "#team", label: "团队" },
  { href: "#contact", label: "联系" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/25 px-4 py-14 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row md:items-start">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <BrandLogoFooter className="opacity-95" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
            用 AI 让一切变得更有魅力。专注 AI 应用创新与落地，服务 toB / toC 双场景。
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            © {new Date().getFullYear()} Chrisma. 保留所有权利。
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400 md:justify-end">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#00D2FF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
