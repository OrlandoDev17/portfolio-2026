import type { SkillItem } from "@/lib/types";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion"; // Asegúrate de usar framer-motion o motion/react según tu setup

// Variantes para el logo grande
const bigBrandVariants: Variants = {
  initial: {
    y: 0,
    rotate: 0,
    scale: 1,
  },
  hover: {
    y: -25,
    rotate: -12,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export function SkillCard({
  title,
  description,
  brands,
  color,
  bigBrand: BigBrand,
  shadow,
}: SkillItem) {
  return (
    <motion.article
      initial="initial"
      whileHover="hover"
      variants={{
        initial: {
          scale: 1,
          boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0)`,
        },
        hover: {
          scale: 1.02,
          boxShadow: `0px 20px 40px ${shadow}`,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        },
      }}
      className={`flex flex-col gap-4 p-6 rounded-xl w-full min-h-[600px] overflow-hidden relative ${color}`}
    >
      <header className="flex flex-col gap-2 z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-white/90">{description}</p>
      </header>

      <div className="flex flex-col gap-4 z-10">
        <h4 className="text-lg font-regular opacity-80">
          Tecnologías/Herramientas
        </h4>
        <ul className="grid grid-cols-3 gap-y-6 gap-x-2">
          {brands.map((brand) => (
            <li
              className="flex flex-col items-center justify-center text-white"
              key={brand.name}
            >
              <Icon icon={brand.icon} className="size-12" />
              <span className="text-center font-medium">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenedor animado para el BigBrand */}
      <motion.div variants={bigBrandVariants} className="absolute -bottom-25">
        <BigBrand className="size-64" />
      </motion.div>
    </motion.article>
  );
}
