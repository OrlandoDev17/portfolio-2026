// Layout
import { Header } from "./components/layout/Header";
// Secciones
import { HeroSection } from "./sections/Hero";
import { ExperienceSection } from "./sections/Experience";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Header />
        <main className="flex flex-col gap-12">
          <HeroSection />
          <ExperienceSection />
        </main>
      </div>
    </>
  );
}
