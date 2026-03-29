"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-28 px-4 pb-32 pt-12 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel mx-auto max-w-4xl rounded-[2rem] px-8 py-14 text-center sm:px-12 sm:py-16"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          与 Chrisma 一起，落地下一代 AI 应用
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          产品咨询、企业方案、媒体与招聘欢迎来信。OPC
          团队响应高效，我们将在 2 个工作日内与您联系。
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="mailto:chris@chrisma.ai"
            className="btn-brand-solid inline-flex w-full max-w-md items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-[#1A202C] transition hover:scale-[1.02] sm:w-auto"
          >
            chris@chrisma.ai
          </a>
        </div>
      </motion.div>
    </section>
  );
}
