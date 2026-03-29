type BrandLogoProps = {
  className?: string;
};

/** 与站点渐变氛围一致的字标渐变 */
const wordmark =
  "font-display bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-cyan)] bg-clip-text font-semibold tracking-tight text-transparent";

function cx(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** 首屏主视觉：文字标识 + 标语 */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <div className={cx("flex flex-col items-center gap-3 text-center", className)}>
      <span className={cx(wordmark, "text-5xl leading-none sm:text-6xl md:text-7xl")}>
        Chrisma
      </span>
      <span className="max-w-md text-sm font-medium leading-relaxed text-zinc-300/90 sm:text-base">
        用 AI 让一切变得更有魅力
      </span>
    </div>
  );
}

/** 导航栏：紧凑字标 */
export function BrandLogoNav({ className }: { className?: string }) {
  return (
    <span className={cx(wordmark, "text-xl leading-none sm:text-2xl", className)}>Chrisma</span>
  );
}

/** 页脚 */
export function BrandLogoFooter({ className }: { className?: string }) {
  return (
    <span className={cx(wordmark, "text-2xl leading-tight sm:text-[1.65rem]", className)}>
      Chrisma
    </span>
  );
}
