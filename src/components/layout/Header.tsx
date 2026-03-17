// Hooks
import { useState } from "react";
// Constantes
import { NAV_ITEMS } from "@/lib/constants";
// Motion
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/common/Button";
import { Icon } from "@iconify/react";

export function Header() {
  // Estados
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("#");

  const handleSetActiveTab = (href: string) => {
    setActiveTab(href);
  };

  return (
    <header className="h-20 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <picture>
          <img className="w-16" src="/logo.svg" alt="Logo de Orlando López" />
        </picture>
        <nav>
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map(({ label, href }, index) => (
              <li key={label + index}>
                <a
                  onMouseEnter={() => setHoveredTab(label)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => handleSetActiveTab(href)}
                  className={`text-lg relative py-2 px-3 ${activeTab === href ? "text-primary-500 font-medium" : ""}`}
                  href={href}
                >
                  {label}
                  <AnimatePresence>
                    {hoveredTab === label && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-1 bg-primary-500 rounded-full pointer-en"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              </li>
            ))}
            <li className="pl-2">
              <Button variant="dark">
                <Icon icon="tabler:message-plus" width={20} height={20} />{" "}
                ¡Hablemos!
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
