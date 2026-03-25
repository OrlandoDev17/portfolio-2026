import { Section } from "@/components/common/Section";
import { StatCard } from "../components/about/StatsCard";
import { STATS_LIST } from "../lib/constants";
import { motion } from "motion/react";
import { containerVariants, fadeLeft, fadeRight } from "@/lib/animations";

export function AboutSection() {
  return (
    <Section>
      <div className="flex flex-col gap-6 mb-12 bg-gray-100 p-6 lg:p-12 rounded-3xl h-full">
        <header className="flex items-center gap-2">
          <h2 className="text-3xl 2xl:text-4xl text-primary-500 font-bold">
            Sobre Mí
          </h2>
          <span className="w-28 h-2 bg-accent-300 rounded-full"></span>
        </header>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 w-full h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:max-w-[50%] [&>p]:text-pretty [&>p]:text-lg"
          >
            <motion.p variants={fadeRight}>
              Mi enfoque parte de una premisa clara:{" "}
              <span className="text-accent-400 font-medium">
                la escalabilidad nace de un código limpio
              </span>
              , pero el{" "}
              <span className="text-accent-400 font-medium">
                éxito de un producto depende de una experiencia de usuario que
                cautive
              </span>{" "}
              desde el primer segundo. Me especializo en construir interfaces
              modernas con{" "}
              <span className="text-primary-500 font-medium">Tailwind CSS</span>
              , priorizando el rendimiento y SEO mediante{" "}
              <span className="text-primary-500 font-medium">Next.js</span>.
              Para{" "}
              <span className="text-accent-400 font-medium">
                garantizar la consistencia
              </span>{" "}
              en aplicaciones de gran escala, aplico un estricto tipado con{" "}
              <span className="text-primary-500 font-medium">TypeScript</span> y
              un manejo de estados eficiente con{" "}
              <span className="text-primary-500 font-medium">React Hooks</span>.
            </motion.p>
            <motion.p variants={fadeRight}>
              Entiendo el desarrollo como un sistema resiliente; por ello,
              gestiono la comunicación con el backend mediante{" "}
              <span className="text-primary-500 font-medium">API REST</span> y
              <span className="text-primary-500 font-medium"> Axios</span>,
              utilizando{" "}
              <span className="text-primary-500 font-medium">try-catch</span>{" "}
              para un control de errores profesional. Mi formación me permite
              comprender el{" "}
              <span className="text-accent-400 font-medium">
                flujo integral de datos
              </span>
              , incluyendo el desarrollo de backend con{" "}
              <span className="text-primary-500 font-medium">Node.js</span> y{" "}
              <span className="text-primary-500 font-medium">Express</span>.
              Esta visión me ayuda a colaborar mejor en{" "}
              <span className="text-accent-400 font-medium">
                arquitecturas complejas
              </span>{" "}
              y optimizar procesos operativos.
            </motion.p>
            <motion.p variants={fadeRight}>
              Ante cualquier error, mi flujo es metódico: utilizo las{" "}
              <span className="text-primary-500 font-medium">DevTools</span>{" "}
              para trazar el fallo en el{" "}
              <span className="text-accent-400 font-medium">
                ciclo de vida del componente
              </span>{" "}
              y aplico soluciones definitivas que fortalezcan el sistema. Mi
              meta es masterizar las tecnologías que domino mientras aporto mi
              visión estratégica a equipos de alto rendimiento. Estoy listo para
              transformar problemas técnicos en{" "}
              <span className="text-accent-400 font-medium">
                soluciones digitales elegantes, funcionales y, sobre todo,
                altamente eficientes
              </span>
              .
            </motion.p>
          </motion.div>
          <motion.aside
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 items-center w-full lg:flex lg:flex-row lg:max-w-[42%] ml-auto"
          >
            <motion.div
              variants={fadeLeft}
              className="flex flex-col gap-4 w-full"
            >
              <StatCard {...STATS_LIST[0]} />
              <StatCard {...STATS_LIST[2]} />
            </motion.div>
            <motion.div
              variants={fadeLeft}
              className="flex flex-col gap-4 w-full lg:mt-16"
            >
              <StatCard {...STATS_LIST[1]} />
              <StatCard {...STATS_LIST[3]} />
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </Section>
  );
}
