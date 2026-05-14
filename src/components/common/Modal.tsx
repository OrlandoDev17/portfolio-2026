import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { fade } from "@blaze-motion/motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            variants={fade({ direction: "none", distance: 0 })}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-dark/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            variants={fade({
              direction: "up",
              distance: 20,
              ease: "backOut",
            })}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-dark/5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-dark/5 bg-gray-50/50">
              <h3 className="text-2xl font-bold text-dark">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-dark/5 transition-colors text-dark/50 hover:text-dark"
              >
                <Icon icon="lucide:x" className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
