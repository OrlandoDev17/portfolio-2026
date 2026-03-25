// Hooks
import { useState, useEffect } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
      <div className="flex items-center justify-between px-6 lg:px-0 max-w-6xl 2xl:max-w-7xl mx-auto w-full">
        <motion.picture variants={fadeRight}>
          <img
            className="w-12 2xl:w-16"
            src="/logo.svg"
            alt="Logo de Orlando López"
          />
        </motion.picture>
        <nav className="hidden lg:flex">
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

        {/* Hamburger Button */}
        <motion.button
          variants={fadeRight}
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-primary-500 z-50"
          aria-label="Toggle Menu"
        >
          <Icon
            icon={isMobileMenuOpen ? "tabler:x" : "tabler:menu-2"}
            width={32}
            height={32}
          />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {NAV_ITEMS.map(({ label, href }, index) => (
                  <motion.li
                    key={label + index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      onClick={() => {
                        handleSetActiveTab(href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-2xl font-bold ${activeTab === href ? "text-primary-500" : "text-dark"}`}
                      href={href}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: NAV_ITEMS.length * 0.1 }}
            >
              <Button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                variant="dark"
                className="text-lg py-4 px-8"
              >
                <Icon icon="tabler:message-plus" width={24} height={24} />{" "}
                ¡Hablemos!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.header>
  );
}
