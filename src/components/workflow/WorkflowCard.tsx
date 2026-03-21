import { Icon } from "@iconify/react";
import type { WorkflowStep } from "@/lib/types";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

export function WorkflowCard({
  step,
  title,
  description,
  className,
  icon,
  iconClasses,
  color,
  layout = "vertical",
  extraContent,
  tags,
}: WorkflowStep) {
  const colorSchemes = {
    primary: {
      bg: "bg-primary-600 border-primary-500/20",
      tag: "bg-primary-500 text-white",
      pill: "bg-primary-500/20 border-white/20 text-white",
      icon: "text-white",
      title: "text-white",
      desc: "text-primary-100/80",
      glow: "group-hover:shadow-primary-600/30",
    },
    violet: {
      bg: "bg-violet-500/10 border-violet-500/20",
      tag: "bg-violet-600/30 text-violet-300 border border-violet-500/20",
      pill: "bg-violet-500/10 border-violet-500/20 text-violet-400",
      icon: "text-violet-400",
      title: "text-white",
      desc: "text-gray-400",
      glow: "group-hover:shadow-violet-500/20",
    },
    lime: {
      bg: "bg-accent-500/10 border-accent-500/20",
      tag: "bg-accent-600/30 text-accent-300 border border-accent-500/20",
      pill: "bg-accent-500/10 border-accent-500/20 text-accent-400",
      icon: "text-accent-400",
      title: "text-white",
      desc: "text-gray-400",
      glow: "group-hover:shadow-accent-500/20",
    },
    orange: {
      bg: "bg-orange-500/10 border-orange-500/20",
      tag: "bg-orange-600/30 text-orange-300 border border-orange-500/20",
      pill: "bg-orange-500/10 border-orange-500/20 text-orange-400",
      icon: "text-orange-400",
      title: "text-white",
      desc: "text-gray-400",
      glow: "group-hover:shadow-orange-500/20",
    },
    blue: {
      bg: "bg-blue-500/10 border-blue-500/20",
      tag: "bg-blue-600/30 text-blue-300 border border-blue-500/20",
      pill: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      icon: "text-blue-400",
      title: "text-white",
      desc: "text-gray-400",
      glow: "group-hover:shadow-blue-500/20",
    },
  };

  const scheme = colorSchemes[color] || colorSchemes.primary;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative flex flex-col items-center text-center justify-center ${
        layout === "horizontal"
          ? "lg:flex-row lg:text-left lg:justify-start"
          : ""
      } gap-6 p-8 rounded-[2.5rem] border backdrop-blur-sm transition-all duration-300 ${
        scheme.bg
      } ${scheme.glow} hover:shadow-2xl ${className}`}
    >
      <header
        className={`flex flex-col items-center gap-4 ${layout === "horizontal" ? "lg:flex-row lg:gap-6" : ""}`}
      >
        <div
          className={`p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 ${scheme.icon} transition-transform group-hover:scale-110 duration-500 shadow-xl`}
        >
          <Icon
            icon={icon}
            className={`text-4xl 2xl:text-5xl ${iconClasses}`}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span
            className={`px-4 py-1.5 rounded-full font-bold font-space-grotesk text-[10px] tracking-[0.2em] uppercase ${scheme.tag}`}
          >
            Paso {step < 10 ? `0${step}` : step}
          </span>
          {layout === "horizontal" && (
            <div className="hidden lg:flex flex-col items-start gap-1">
              <h3
                className={`text-2xl 2xl:text-3xl font-bold transition-colors ${scheme.title}`}
              >
                {title}
              </h3>
              <p
                className={`text-sm 2xl:text-base leading-relaxed font-medium max-w-lg ${scheme.desc}`}
              >
                {description}
              </p>
            </div>
          )}
        </div>
      </header>

      {layout === "vertical" && (
        <div className="flex flex-col items-center gap-4 relative z-10 w-full">
          <h3
            className={`text-2xl 2xl:text-4xl font-bold transition-colors ${scheme.title}`}
          >
            {title}
          </h3>
          <p
            className={`text-sm 2xl:text-base leading-relaxed font-medium ${scheme.desc}`}
          >
            {description}
          </p>
          {(extraContent || tags) && (
            <div
              className={`flex flex-wrap items-center justify-center gap-3 mt-4 ${layout === "vertical" ? "lg:justify-start" : ""}`}
            >
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-1 rounded-xl text-xs font-semibold border backdrop-blur-md ${scheme.pill}`}
                >
                  {tag}
                </span>
              ))}
              {extraContent}
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
}
