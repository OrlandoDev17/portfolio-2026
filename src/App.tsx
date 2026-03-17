// Layout
import { Header } from "./components/layout/Header";
// Secciones
import { HeroSection } from "./sections/Hero";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Header />
        <main className="flex flex-col gap-8">
          <HeroSection />
        </main>
      </div>
    </>
  );
}
