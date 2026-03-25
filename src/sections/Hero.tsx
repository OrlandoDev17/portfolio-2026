// Componentes
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { Icon } from "@iconify/react";
// Motion
import { motion } from "motion/react";
import {
  containerVariants,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "@/lib/animations";
// Constantes
import { SOCIAL_ITEMS, BRAND_LIST } from "@/lib/constants";

export function HeroSection() {
  return (
    <Section className="2xl:mt-6" id="#">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col gap-3">
          <motion.h1
            variants={fadeRight}
            className="text-6xl 2xl:text-7xl font-black"
          >
            Hola, Soy <br />{" "}
            <span className="text-primary-500">Orlando López</span>
          </motion.h1>
          <motion.h2
            variants={fadeRight}
            className="text-3xl 2xl:text-4xl text-accent-400 font-semibold"
          >
            Desarrollador Frontend
          </motion.h2>
          <motion.h2
            variants={fadeRight}
            className="text-xl 2xl:text-2xl text-primary-500 font-bold"
          >
            Técnico Superior Universitario en Informática
          </motion.h2>
          <motion.p
            variants={fadeRight}
            className="text-sm 2xl:text-lg max-w-lg "
          >
            Desarrollador Frontend{" "}
            <span className="text-primary-500 font-medium">
              apasionado por construir
            </span>{" "}
            soluciones web que van más allá de lo visual. Mi enfoque es técnico
            y funcional: transformar{" "}
            <span className="text-primary-500 font-medium">
              problemas complejos
            </span>{" "}
            en herramientas digitales{" "}
            <span className="text-primary-500 font-medium">
              robustas, intuitivas y eficientes
            </span>{" "}
            que generan un impacto real en la operatividad de los usuarios.
          </motion.p>
          <motion.aside
            variants={containerVariants}
            className="flex items-center gap-4 mt-4"
          >
            <motion.div variants={fadeUp} aria-hidden="true">
              <Button href="#projects">
                <Icon icon="tabler:folder" /> Ver Proyectos
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} aria-hidden="true">
              <Button variant="secondary">
                <Icon icon="tabler:download" /> Descargar CV
              </Button>
            </motion.div>
          </motion.aside>
          <motion.ul
            variants={containerVariants}
            className="flex items-center gap-4 mt-4"
          >
            {SOCIAL_ITEMS.map(({ id, icon, href, animation }) => (
              <motion.li variants={animation} key={id}>
                <a
                  className="flex items-center justify-center"
                  href={href}
                  target="_blank"
                >
                  <Icon
                    className="size-12 text-accent-400 p-2 rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300"
                    icon={icon}
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.picture
          className="flex items-center justify-center lg:items-end lg:justify-end"
          variants={fadeLeft}
        >
          <img
            className="w-full lg:w-[80%] 2xl:w-full"
            src="/avatar.webp"
            alt="Avatar de Orlando López"
          />
        </motion.picture>
      </motion.div>
      <ul className="flex items-center justify-between mt-4 2xl:mt-8 h-20 2xl:h-30 max-w-5xl 2xl:max-w-7xl  mx-auto w-full relative wrapper">
        {BRAND_LIST.map(({ name, icon }, index) => (
          <li
            className="item"
            key={name}
            style={{
              animationDelay: `calc(30s / ${BRAND_LIST.length} * (${BRAND_LIST.length} - ${index}) * -1)`,
              left: "100%",
            }}
          >
            <Icon
              icon={icon}
              className="size-10 sm:size-12 md:size-16 text-primary-400"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
