"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "AI 风水研究",
    desc: "上传户型或场景照片，融合八卦与五行等东方智慧，输出空间布局与气场分析，以及可执行的优化建议，让传统风水以可理解、可验证的方式服务现代居住与办公。",
    tag: "文化 × 空间智能",
    accent: "from-[#00D2FF]/25 to-transparent",
  },
  {
    title: "AI 命理研究",
    desc: "在严格隐私保护前提下，结合传统命理逻辑与数据建模，生成性格天赋、事业财运、婚恋健康等维度的分析报告与运势指引，帮助用户理性参考、辅助决策。",
    tag: "个性化报告",
    accent: "from-[#9D50BB]/30 to-transparent",
  },
  {
    title: "AIGC 创作平台",
    desc: "一站式 AI 内容生产：文案、图文转视频、润色与数字人播报等能力，覆盖个人创作者与企业营销场景，兼顾质量与效率，加速内容变现与品牌传播。",
    tag: "toB / toC",
    accent: "from-cyan-500/20 to-fuchsia-500/10",
  },
  {
    title: "企业级 Agent 解决方案",
    desc: "基于大模型与企业业务场景定制 Agent：客服、协同、数据分析、流程自动化等可落地场景，快速集成现有系统，降本增效、可扩展、可持续演进。",
    tag: "企业数字化",
    accent: "from-violet-600/25 to-[#00D2FF]/15",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Features() {
  return (
    <section
      id="products"
      className="relative z-10 scroll-mt-28 px-4 py-14 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
            Products
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            核心产品体系
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            传统文化智能与 AIGC 创作并行，个人体验与企业服务兼顾，全链路释放 AI
            魅力。
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:gap-6"
        >
          {products.map((p) => (
            <motion.li
              key={p.title}
              variants={item}
              className="group relative overflow-hidden rounded-3xl p-px"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90 transition group-hover:opacity-100`}
              />
              <div className="glass-panel relative flex h-full flex-col rounded-[calc(1.5rem-1px)] p-8 transition group-hover:border-white/15">
                <span className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#a5f3fc]">
                  {p.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{p.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
