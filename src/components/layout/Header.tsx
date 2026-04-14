/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { AnimatePresence, motion } from "motion/react";
import { containerVariants, fadeDown, fadeRight } from "@/lib/animations";
import { Button } from "@/components/common/Button";
import { Icon } from "@iconify/react";
import { ContactModal } from "../contact/ContactModal";

export function Header() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position for background effect and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const sections = [
        { id: "about", elem: document.getElementById("about") },
        { id: "skills", elem: document.getElementById("skills") },
        { id: "workflow", elem: document.getElementById("workflow") },
        { id: "experience", elem: document.getElementById("experience") },
        { id: "home", elem: document.getElementById("home") },
      ];

      for (const { id, elem } of sections) {
        if (elem) {
          const sectionTop = elem.offsetTop;
          if (scrollY >= sectionTop - 120) {
            setActiveSection("#" + id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const offset = 20;
      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-0 max-w-6xl 2xl:max-w-7xl mx-auto w-full h-16 2xl:h-20">
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className={`2xl:text-lg relative py-2 px-3 transition-colors ${
                    activeSection === href
                      ? "text-primary-500 font-medium"
                      : "text-dark hover:text-primary-500"
                  }`}
                  href={href}
                >
                  {label}
                  <AnimatePresence>
                    {activeSection === href && (
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
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-8 top-16"
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
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-2xl font-bold ${
                        activeSection === href
                          ? "text-primary-500"
                          : "text-dark"
                      }`}
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
