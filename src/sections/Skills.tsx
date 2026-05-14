import { Section } from "@/components/common/Section";
import { SKILLS_LIST } from "@/lib/constants";
import { SkillCard } from "@/components/skills/SkillCard";
import { motion } from "motion/react";
import { fade, parentVariants } from "@blaze-motion/motion";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Habilidades Técnicas"
      subtitle="Herramientas y tecnologías que utilizo en mi día a día"
    >
      <motion.div
        variants={parentVariants({ delayChildren: 0.1 })}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 mb-12"
      >
        {SKILLS_LIST.map((skill) => (
          <motion.div
            key={skill.title}
            variants={fade({
              direction: "up",
              distance: 30,
              excludeDelay: true,
              ease: "backOut",
            })}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
