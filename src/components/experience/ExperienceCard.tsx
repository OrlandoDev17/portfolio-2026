import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/common/Button";
import type { ExperienceItem } from "@/lib/types";
import { fadeUp } from "@/lib/animations";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  onOpenDetails: (experience: ExperienceItem) => void;
}

export function ExperienceCard({
  experience,
  onOpenDetails,
}: ExperienceCardProps) {
  return (
    <motion.div variants={fadeUp} aria-hidden="true">
      <article className="group relative flex flex-col lg:flex-row bg-white border-2 border-dark/5 rounded-[2.5rem] overflow-hidden hover:border-primary-500/30 transition-all duration-500 shadow-xl shadow-dark/5 hover:shadow-primary-500/10 min-h-[400px]">
        {/* Visual Header / Figure */}
        <header className="lg:w-2/5 relative overflow-hidden bg-linear-to-br from-primary-600/20 via-accent-400/10 to-primary-900/30">
          <picture className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={experience.mockup}
              alt=""
            />
            {experience.logo && (
              <img
                className="absolute top-2 right-2 size-32 object-contain"
                src={experience.logo}
                alt={`Logo de ${experience.company}`}
              />
            )}
          </picture>

          {/* Periodo Semántico */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider shadow-lg flex items-center gap-1.5 w-fit">
              <Icon icon="lucide:award" className="w-3 h-3" />
              Primer Sistema Implementado
            </span>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent lg:hidden"></div>
        </header>

        {/* Main Content Area */}
        <section className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center gap-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-3xl lg:text-4xl font-black text-dark tracking-tighter leading-tight">
                {experience.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-primary-600 font-bold text-base tracking-tight">
                  {experience.company} — {experience.role}
                </p>
                <time className="text-[10px] font-black uppercase tracking-widest text-dark/30 bg-dark/5 px-2 py-0.5 rounded-md">
                  {experience.period}
                </time>
              </div>
            </div>

            <nav className="flex gap-3" aria-label="Enlaces del proyecto">
              <a
                href={experience.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark/5 rounded-2xl hover:bg-dark text-dark/40 hover:text-white transition-all duration-300"
                title="Ver código en GitHub"
              >
                <Icon icon="lucide:github" className="w-6 h-6" />
              </a>
              <a
                href={experience.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-500/10 rounded-2xl hover:bg-primary-500 text-primary-500 hover:text-white transition-all duration-300"
                title="Ver demo en vivo"
              >
                <Icon icon="lucide:external-link" className="w-6 h-6" />
              </a>
            </nav>
          </header>

          <p className="text-lg text-dark/70 leading-relaxed font-medium">
            {experience.shortDesc}
          </p>

          {/* Tech Stack Summary */}
          <footer className="flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <div
                key={tech.name}
                className="p-3 bg-dark/5 rounded-2xl hover:bg-dark/95 text-dark/40 hover:text-white transition-all duration-300"
              >
                <Icon icon={tech.icon} className="w-6 h-6" />
              </div>
            ))}
          </footer>

          {/* CTA Button */}
          <footer className="mt-4">
            <Button
              variant="dark"
              size="md"
              onClick={() => onOpenDetails(experience)}
              className="w-full md:w-fit text-sm! py-4 px-10 rounded-[1.2rem] group/btn overflow-hidden relative shadow-xl shadow-dark/10"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explorar Ingeniería
                <Icon
                  icon="lucide:arrow-right"
                  className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300"
                />
              </span>
              <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
            </Button>
          </footer>
        </section>
      </article>
    </motion.div>
  );
}
