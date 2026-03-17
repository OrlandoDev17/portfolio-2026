// Componentes
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { Icon } from "@iconify/react";

// Constantes
import { SOCIAL_ITEMS, BRAND_LIST } from "@/lib/constants";

export function HeroSection() {
  return (
    <Section className="mt-6" id="#">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-7xl font-black">
            Hola, Soy <br />{" "}
            <span className="text-primary-500">Orlando López</span>
          </h1>
          <h2 className="text-4xl text-accent-400 font-semibold">
            Desarrollador Frontend
          </h2>
          <h2 className="text-2xl text-primary-500 font-bold">
            Técnico Superior Universitario en Informática
          </h2>
          <p className="text-lg max-w-lg ">
            Desarrollador Frontend{" "}
            <span className="text-primary-500 font-medium">
              apasionado por construir
            </span>{" "}
            soluciones web que van más allá de lo visual. Mi enfoque es técnico
            y funcional: transformar{" "}
            <span className="text-primary-500 font-medium">
              problemas complejos
            </span>{" "}
            en herramientas digitales{" "}
            <span className="text-primary-500 font-medium">
              robustas, intuitivas y eficientes
            </span>{" "}
            que generan un impacto real en la operatividad de los usuarios.
          </p>
          <aside className="flex items-center gap-4 mt-4">
            <Button>
              <Icon icon="tabler:folder" /> Ver Proyectos
            </Button>
            <Button variant="secondary">
              <Icon icon="tabler:download" /> Descargar CV
            </Button>
          </aside>
          <ul className="flex items-center gap-4 mt-4">
            {SOCIAL_ITEMS.map(({ id, icon, href }) => (
              <li key={id}>
                <a
                  className="flex items-center justify-center"
                  href={href}
                  target="_blank"
                >
                  <Icon
                    className="size-12 text-accent-400 p-2 rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300"
                    icon={icon}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <picture>
          <img src="/avatar.webp" alt="Avatar de Orlando López" />
        </picture>
      </div>
      <ul className="flex items-center justify-between mt-8 h-30 max-w-7xl  mx-auto w-full relative wrapper">
        {BRAND_LIST.map(({ name, icon }, index) => (
          <li
            className="item"
            key={name}
            style={{
              animationDelay: `calc(30s / ${BRAND_LIST.length} * (${BRAND_LIST.length} - ${index}) * -1)`,
              left: "100%",
            }}
          >
            <Icon
              icon={icon}
              className="size-10 sm:size-12 md:size-16 text-primary-400"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
