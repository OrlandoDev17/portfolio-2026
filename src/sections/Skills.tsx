import { Section } from "@/components/common/Section";
import { SKILLS_LIST } from "@/lib/constants";
import { SkillCard } from "@/components/skills/SkillCard";
import { motion } from "motion/react";
import { containerVariants } from "@/lib/animations";

export function SkillsSection() {
  return (
    <Section
      title="Habilidades Técnicas"
      subtitle="Herramientas y tecnologías que utilizo en mi día a día"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 mb-12"
      >
        {SKILLS_LIST.map((skill) => (
          <motion.div key={skill.title} variants={skill.variants}>
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
