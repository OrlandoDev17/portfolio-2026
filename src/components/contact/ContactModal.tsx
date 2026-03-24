import { Modal } from "@/components/common/Modal";
import { ContactForm } from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Hablemos de tu proyecto"
    >
      <div className="flex flex-col gap-4">
        <p className="text-dark/60 text-lg">
          ¿Tienes una idea en mente o simplemente quieres saludar? Completa el
          siguiente formulario y me pondré en contacto contigo lo antes
          posible.
        </p>
        <ContactForm />
      </div>
    </Modal>
  );
}
