"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Chris", role: "CEO", desc: "战略与重大决策，推动产品与解决方案市场落地" },
  { name: "Zoe", role: "COO / 总裁助理", desc: "需求收口、评审与分派，项目跟踪与对外沟通" },
  { name: "Rich", role: "CFO / 财务负责人", desc: "主导公司财务战略规划与资金统筹管理，开展经营数据分析与成本管控" },
  { name: "Codey", role: "CTO", desc: "技术选型、架构与研发规范，基础设施与难点攻坚" },
  { name: "Ally", role: "CPO", desc: "产品路线图、需求分析与体验设计，推进迭代落地" },
  { name: "Testy", role: "测试负责人", desc: "测试策略与验收标准，全流程质量保障与报告" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function Team() {
  return (
    <section
      id="team"
      className="relative z-10 scroll-mt-24 px-4 py-10 sm:scroll-mt-28 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
            Team
          </p>
          <h2 className="font-display text-pretty text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            核心团队
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-zinc-400">
            专业分工、协同高效：从战略到落地全流程闭环，保障每一项交付精准可控。
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((m) => (
            <motion.li
              key={m.name}
              variants={item}
              className="glass-panel rounded-2xl p-5 transition hover:border-[#9D50BB]/30 sm:p-6"
            >
              <p className="font-display text-lg font-bold text-white">
                {m.name}{" "}
                <span className="text-sm font-medium text-[#00D2FF]">· {m.role}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
