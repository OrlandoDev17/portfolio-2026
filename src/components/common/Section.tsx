// Motion
import { motion } from "motion/react";
import { fade, parentVariants, TextAnimate } from "@blaze-motion/motion";
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
        variants={parentVariants({ delayChildren: 0.1 })}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 lg:px-0 max-w-6xl 2xl:max-w-7xl mx-auto w-full flex flex-col gap-4"
      >
        {title || subtitle ? (
          <header className="flex flex-col gap-2 w-fit">
            {title && (
              <TextAnimate
                as="h2"
                text={title}
                className="text-3xl 2xl:text-4xl text-primary-500 font-bold"
              />
            )}
            {subtitle && (
              <motion.p
                variants={fade({
                  direction: "right",
                  distance: 30,
                  excludeDelay: true,
                  ease: "backOut",
                })}
                className="2xl:text-lg text-gray-400"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.span
              variants={fade({
                direction: "right",
                distance: 30,
                excludeDelay: true,
                ease: "backOut",
              })}
              className="w-full lg:w-[120%] h-1 bg-accent-400 rounded-full"
            ></motion.span>
          </header>
        ) : null}
        {children}
      </motion.div>
    </section>
  );
}
