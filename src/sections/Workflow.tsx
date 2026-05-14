import { Section } from "@/components/common/Section";
import { WORKFLOW_STEPS } from "@/lib/constants";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { fade, parentVariants, TextAnimate } from "@blaze-motion/motion";

export function WorkflowSection() {
  return (
    <Section
      id="workflow"
      className="bg-[#f9fafb] py-20 w-full border-y border-gray-100"
    >
      <div className="flex flex-col items-center w-full px-4 text-center">
        <TextAnimate
          as="h2"
          text="Mi Flujo de Trabajo"
          className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mb-12"
        />

        <motion.div
          variants={parentVariants({ delayChildren: 0.1 })}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 w-full"
        >
          {WORKFLOW_STEPS.map((workflow) => (
            <motion.div
              variants={fade({
                direction: "up",
                distance: 30,
                excludeDelay: true,
                ease: "backOut",
              })}
              className="flex flex-col items-center group"
              key={workflow.step}
            >
              <span className="text-sm text-[#8b5cf6] font-bold mb-3 tracking-widest uppercase">
                Paso 0{workflow.step}
              </span>

              <div className="relative mb-4">
                <div className="size-16 bg-[#8b5cf6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8b5cf6]/20 group-hover:scale-105 transition-all duration-300">
                  <Icon icon={workflow.icon} className="size-8 text-white" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                {workflow.title}
              </h4>

              <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed">
                {workflow.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
