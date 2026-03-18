import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import type { ExperienceItem, ExperienceChallenge } from "@/lib/types";

interface ExperienceDetailsProps {
  experience: ExperienceItem;
}

export function ExperienceDetails({ experience }: ExperienceDetailsProps) {
  return (
    <div className="flex flex-col gap-12">
      <ExperienceIntro description={experience.fullDesc} />

      <ExperienceChallenges challenges={experience.challenges} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-dark/5">
        <ExperienceImpact items={experience.impact} />
        <ExperienceRoadmap items={experience.roadmap} />
      </div>
    </div>
  );
}

function ExperienceIntro({ description }: { description: string }) {
  return (
    <section>
      <header className="flex items-center gap-4 mb-6">
        <div className="h-px bg-primary-500/20 flex-1" />
        <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full">
          Arquitectura del Proyecto
        </span>
        <div className="h-px bg-primary-500/20 flex-1" />
      </header>
      <p className="text-2xl text-dark/80 leading-relaxed font-semibold tracking-tight text-center max-w-3xl mx-auto">
        {description}
      </p>
    </section>
  );
}

function ExperienceChallenges({
  challenges,
}: {
  challenges: ExperienceChallenge[];
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {challenges.map((item, idx) => {
        const isOfflineChallenge =
          item.title.toLowerCase().includes("offline") ||
          item.title.toLowerCase().includes("redes");

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div
              key={idx}
              className="group relative p-8 bg-white rounded-4xl border border-dark/5 shadow-sm hover:shadow-xl hover:border-primary-500/20 transition-all duration-500"
            >
              <header className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 rounded-xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500">
                    <Icon
                      icon={isOfflineChallenge ? "lucide:wifi" : "lucide:zap"}
                      className="w-5 h-5"
                    />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-dark/80">
                    {item.title}
                  </h4>
                </div>

                {isOfflineChallenge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-1.5 px-3 py-1 bg-accent-50 rounded-full border border-accent-200"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: ["#f2b904", "#22c55e"],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 1.5, repeat: 0 }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-[9px] font-black text-accent-700 uppercase tracking-tighter"
                    >
                      Sincronizado
                    </motion.span>
                  </motion.div>
                )}
              </header>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-black text-red-400 uppercase tracking-widest block">
                    El Desafío
                  </span>
                  <p className="text-sm font-bold italic text-dark/90 leading-snug">
                    "{item.problem}"
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-accent-500 uppercase tracking-widest block">
                    La Solución
                  </span>
                  <p className="text-dark/60 font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
                <Icon
                  icon={
                    isOfflineChallenge ? "lucide:database" : "lucide:code-2"
                  }
                  className="w-24 h-24"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

function ExperienceImpact({ items }: { items: string[] }) {
  return (
    <section className="relative p-10 bg-dark/95 rounded-[2.5rem] overflow-hidden group">
      {/* Chart Background Sample */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-between px-10 gap-2">
          {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="flex-1 bg-accent-400 rounded-t-lg"
            />
          ))}
        </div>
      </div>

      <header className="relative z-10 flex items-center gap-3 mb-10">
        <div className="p-2 bg-accent-400/20 rounded-xl text-accent-400">
          <Icon icon="lucide:trending-up" className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-black text-white tracking-tight uppercase">
          Métricas de Impacto
        </h4>
      </header>

      <ul className="relative z-10 space-y-6">
        {items.map((text, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1.5 p-1 bg-accent-400/10 rounded-lg">
              <Icon
                icon="lucide:check"
                className="w-3.5 h-3.5 text-accent-400"
              />
            </div>
            <span className="text-gray-300 font-medium leading-relaxed">
              {text}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceRoadmap({ items }: { items: string[] }) {
  return (
    <section className="relative p-10 bg-primary-500/5 rounded-[2.5rem] border border-primary-500/10 overflow-hidden group">
      {/* Efecto Glassmorphism / Blur BG */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-primary-500/40 transition-colors duration-700" />

      <header className="relative z-10 flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary-500/10 rounded-xl text-primary-500">
            <Icon icon="lucide:milestone" className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-black text-dark tracking-tight uppercase">
            Próximos Pasos
          </h4>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-md rounded-full border border-dark/5 shadow-sm">
          <Icon icon="lucide:lock" className="w-3 h-3 text-dark/40" />
          <span className="text-[9px] font-black text-dark/40 uppercase tracking-widest">
            En Desarrollo
          </span>
        </div>
      </header>

      <ul className="relative z-10 space-y-6">
        {items.map((text, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="group/item flex items-start gap-4"
          >
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500/40 shrink-0 group-hover/item:bg-primary-500 transition-colors duration-300" />
            <span className="text-dark/60 font-medium leading-relaxed italic group-hover/item:text-dark transition-colors duration-300">
              {text}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Overlay "Glass" inferior */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </section>
  );
}
