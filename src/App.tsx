// Layout
import { Header } from "./components/layout/Header";
// Secciones
import { HeroSection } from "./sections/Hero";
import { ExperienceSection } from "./sections/Experience";
import { WorkflowSection } from "./sections/Workflow";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Header />
        <main className="flex flex-col gap-16">
          <HeroSection />
          <ExperienceSection />
          <WorkflowSection />
        </main>
      </div>
    </>
  );
}
