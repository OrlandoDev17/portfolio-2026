import { Section } from "@/components/common/Section";

export function WorkflowSection() {
  return (
    <Section
      id="workflow"
      title="Mi Flujo de Trabajo"
      subtitle="Descubre cómo abordo cada proyecto desde la idea hasta la implementación"
    >
      <div className="grid grid-cols-3 grid-rows-2 m-4 gap-4"></div>
    </Section>
  );
}
