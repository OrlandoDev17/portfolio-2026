// Motion
import { motion } from "motion/react";
import { fadeRight, containerVariants } from "@/lib/animations";
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
}: SectionProps) {
  return (
    <section id={id} className={`${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto w-full flex flex-col gap-4"
      >
        {title || subtitle ? (
          <header className="flex flex-col gap-2 w-fit">
            <motion.h2
              variants={fadeRight}
              className="text-4xl text-primary-500 font-bold"
            >
              {title}
            </motion.h2>
            <motion.p variants={fadeRight} className="text-lg text-gray-400">
              {subtitle}
            </motion.p>
            <motion.span
              variants={fadeRight}
              className="w-[120%] h-1 bg-accent-400 rounded-full"
            ></motion.span>
          </header>
        ) : null}
        {children}
      </motion.div>
    </section>
  );
}
