// Layout
import { Header } from "./components/layout/Header";
// Secciones
import { HeroSection } from "./sections/Hero";
import { ExperienceSection } from "./sections/Experience";
import { WorkflowSection } from "./sections/Workflow";
import { SkillsSection } from "./sections/Skills";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-4 2xl:gap-8">
        <Header />
        <main className="flex flex-col gap-16">
          <HeroSection />
          <ExperienceSection />
          <WorkflowSection />
          <SkillsSection />
        </main>
      </div>
    </>
  );
}
