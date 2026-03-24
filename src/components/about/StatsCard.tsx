import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Icon } from "@iconify/react";
import type { StatItem } from "@/src/lib/types";

export function StatCard({
  label,
  value,
  icon,
  prefix,
  color,
  labelColor,
  boxShadow,
}: StatItem) {
  return (
    <motion.article
      initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }}
      whileHover={{ scale: 1.05, boxShadow: `0 0 20px 0 ${boxShadow}` }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center gap-2 p-12 rounded-2xl ${color}`}
    >
      <div className="flex items-center">
        {value ? (
          <AnimatedCounter
            className="text-4xl font-bold font-space-grotesk"
            value={value}
          />
        ) : (
          <Icon icon={icon || ""} className="size-16" />
        )}
        <span className="text-3xl font-black">{prefix}</span>
      </div>
      <p
        className={`text-center font-medium font-space-grotesk uppercase ${labelColor}`}
      >
        {label}
      </p>
    </motion.article>
  );
}
