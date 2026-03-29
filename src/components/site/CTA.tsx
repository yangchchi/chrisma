"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-24 px-4 pb-[max(5rem,env(safe-area-inset-bottom,0px)+3rem)] pt-8 sm:scroll-mt-28 sm:px-6 sm:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel mx-auto max-w-4xl rounded-2xl px-5 py-10 text-center sm:rounded-[2rem] sm:px-12 sm:py-16"
      >
        <h2 className="font-display text-pretty text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
          与 Chrisma 一起，落地下一代 AI 应用
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-zinc-400">
          产品咨询、企业方案、媒体与招聘欢迎来信。OPC
          团队响应高效，我们将在 2 个工作日内与您联系。
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="mailto:chris@chrisma.ai"
            className="btn-brand-solid inline-flex w-full max-w-md min-h-[48px] items-center justify-center break-all rounded-full px-6 py-3.5 text-sm font-semibold text-[#1A202C] transition hover:scale-[1.02] sm:min-h-0 sm:w-auto sm:break-normal sm:px-10 sm:py-4 sm:text-base"
          >
            chris@chrisma.ai
          </a>
        </div>
      </motion.div>
    </section>
  );
}
