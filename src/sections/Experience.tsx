// Hooks
import { useState } from "react";
// Componentes
import { Section } from "@/components/common/Section";
import { Modal } from "@/components/common/Modal";
import { ExperienceDetails } from "@/components/experience/ExperienceDetails";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
// Constantes
import { EXPERIENCE_LIST } from "@/lib/constants";

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof EXPERIENCE_LIST)[0] | null
  >(null);

  return (
    <Section
      id="experience"
      title="Experiencia & Proyectos"
      subtitle="Trayectoria y proyectos de alto impacto tecnológico"
    >
      <div className="mt-8 flex flex-col gap-12 mb-4">
        {EXPERIENCE_LIST.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            index={index}
            onOpenDetails={setSelectedExperience}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={
          selectedExperience
            ? `${selectedExperience.company} — Ingeniería & Arquitectura`
            : ""
        }
      >
        {selectedExperience && (
          <ExperienceDetails experience={selectedExperience} />
        )}
      </Modal>
    </Section>
  );
}
