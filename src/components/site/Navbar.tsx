"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { BrandLogoNav } from "@/components/site/BrandLogo";

const links = [
  { href: "#vision", label: "关于" },
  { href: "#products", label: "产品" },
  { href: "#team", label: "团队" },
  { href: "#contact", label: "联系" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-4"
    >
      <nav className="glass-panel mx-auto flex max-w-6xl min-w-0 flex-col rounded-2xl px-3 py-3 sm:px-6">
        <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-4">
          <Link
            href="#"
            className="flex min-w-0 shrink items-center"
            onClick={closeMenu}
          >
            <BrandLogoNav />
          </Link>

          <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex md:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">菜单</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Link
              href="#contact"
              className="btn-brand-solid whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold text-[#1A202C] transition hover:scale-[1.02] sm:px-4 sm:text-sm"
              onClick={closeMenu}
            >
              预约演示
            </Link>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-1 border-t border-white/10 pt-4 text-sm font-medium text-zinc-300">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-white"
                      onClick={closeMenu}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
