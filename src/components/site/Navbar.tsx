"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#vision", label: "愿景" },
  { href: "#products", label: "能力" },
  { href: "#contact", label: "联系" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <Link
          href="#"
          className="font-display text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          Chrisma
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
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
        <Link
          href="#contact"
          className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
        >
          预约演示
        </Link>
      </nav>
    </motion.header>
  );
}
