"use client";

import { motion } from "framer-motion";

const strengths = [
  "高效灵活：精简架构，决策快、响应及时",
  "专业聚焦：战略 · 运营 · 技术 · 产品 · 测试全链路闭环",
  "场景多元：传统文化智能与 AIGC 创作并行",
  "精准落地：需求—设计—研发—测试—交付全流程管控",
];

export function Vision() {
  return (
    <section
      id="vision"
      className="relative z-10 scroll-mt-24 px-4 py-10 sm:scroll-mt-28 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0a2e]/80 via-[#0c0118] to-[#0a1628]/80 p-6 sm:rounded-[2rem] sm:p-16 md:p-20"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#9D50BB]/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[#00D2FF]/15 blur-3xl" />

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7dd3fc]">
            About Chrisma
          </p>
          <blockquote className="font-display text-pretty text-xl font-bold leading-snug text-white sm:text-2xl sm:leading-snug md:text-[2rem] md:leading-snug">
            用 AI 让一切变得更有魅力。
            <span className="gradient-text"> 以 OPC 的敏捷，做 toB / toC 真正用得上的 AI。</span>
          </blockquote>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-zinc-400">
            Chrisma 是一家专注于 AI 应用创新的 OPC（一人公司），以高效精简的团队架构实现快速响应与精准落地。我们打破传统层级壁垒，兼顾技术深度与市场需求：既为个人用户提供便捷的
            AI 工具，也为企业客户提供可定制的应用与 Agent 解决方案，让技术创新传递可感知的魅力与价值。
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            核心定位：面向 toB / toC 双场景，提供高适配、高性价比的 AI 产品与全流程解决方案，以差异化体验帮助客户降本增效。
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li
                key={s}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-zinc-300"
              >
                <span
                  className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D2FF]"
                  aria-hidden
                />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
