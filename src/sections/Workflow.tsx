import { Section } from "@/components/common/Section";
import { WORKFLOW_STEPS } from "@/lib/constants";
import { WorkflowCard } from "@/components/workflow/WorkflowCard";

export function WorkflowSection() {
  return (
    <Section
      id="workflow"
      title="Mi Flujo de Trabajo"
      subtitle="Descubre cómo abordo cada proyecto desde la idea hasta la implementación"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 mt-8 mb-4 gap-6 lg:min-h-[750px] 2xl:min-h-[900px]">
        {WORKFLOW_STEPS.map((step) => (
          <WorkflowCard key={step.step} {...step} />
        ))}
      </div>
    </Section>
  );
}
