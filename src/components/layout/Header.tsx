// Hooks
import { useState } from "react";
// Constantes
import { NAV_ITEMS } from "@/lib/constants";
// Motion
import { AnimatePresence, motion } from "motion/react";
import { containerVariants, fadeDown, fadeRight } from "@/lib/animations";
// Componentes
import { Button } from "@/components/common/Button";
import { Icon } from "@iconify/react";
import { ContactModal } from "../contact/ContactModal";

export function Header() {
  // Estados
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("#");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSetActiveTab = (href: string) => {
    setActiveTab(href);
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-16 2xl:h-20 flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-between max-w-5xl 2xl:max-w-7xl mx-auto w-full">
        <motion.picture variants={fadeRight}>
          <img
            className="w-12 2xl:w-16"
            src="/logo.svg"
            alt="Logo de Orlando López"
          />
        </motion.picture>
        <nav>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2"
          >
            {NAV_ITEMS.map(({ label, href }, index) => (
              <motion.li variants={fadeDown} key={label + index}>
                <a
                  onMouseEnter={() => setHoveredTab(label)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => handleSetActiveTab(href)}
                  className={`2xl:text-lg relative py-2 px-3 ${activeTab === href ? "text-primary-500 font-medium" : ""}`}
                  href={href}
                >
                  {label}
                  <AnimatePresence>
                    {hoveredTab === label && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-1 bg-primary-500 rounded-full"
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
              </motion.li>
            ))}
            <motion.li variants={fadeDown} className="pl-2">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                variant="dark"
              >
                <Icon icon="tabler:message-plus" width={20} height={20} />{" "}
                ¡Hablemos!
              </Button>
            </motion.li>
          </motion.ul>
        </nav>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.header>
  );
}
