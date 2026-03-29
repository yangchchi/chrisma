"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/site/BrandLogo";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-[max(3.5rem,env(safe-area-inset-bottom,0px))] pt-[max(7rem,calc(env(safe-area-inset-top,0px)+5.75rem))] text-center supports-[height:100dvh]:min-h-[100dvh] sm:px-6 sm:pb-14 sm:pt-32">
      {/* 首屏背景视频 */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/video/home-hero.mp4" type="video/mp4" />
        </video>
        {/* 叠层：保证文案可读 + 品牌渐变氛围 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#030014]/88 via-[#030014]/72 to-[#030014]/94"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(157,80,187,0.25)_0%,transparent_45%,rgba(0,210,255,0.12)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030014] to-transparent"
          aria-hidden
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
      >
        <BrandLogo className="mx-auto w-full max-w-xl" />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-6 inline-flex max-w-[min(100%,22rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[11px] font-medium leading-snug text-zinc-200 backdrop-blur-md sm:max-w-none sm:px-4 sm:py-1.5 sm:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D2FF] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D2FF]" />
        </span>
        OPC 模式 · 专注 AI 应用创新 · toB / toC 双赛道
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg"
      >
        聚焦 AI 应用研发与落地，打造兼具专业性、实用性与创新性的产品与解决方案，让前沿
        AI 走进日常、赋能商业。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-11 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5"
      >
        <a
          href="#products"
          className="btn-brand-solid inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold text-[#1A202C] shadow-lg transition hover:scale-[1.02] sm:min-h-0 sm:min-w-[200px] sm:w-auto sm:px-8"
        >
          了解产品体系
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/15 sm:min-h-0 sm:min-w-[200px] sm:w-auto sm:px-8"
        >
          合作与咨询
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-white/25 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-[#00D2FF]/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
