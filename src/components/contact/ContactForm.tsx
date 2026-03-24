import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/common/Button";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="size-20 bg-primary-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
          <Icon icon="tabler:check" className="text-white size-12" />
        </div>
        <h3 className="text-3xl font-bold mb-2">¡Mensaje Enviado!</h3>
        <p className="text-dark/60 max-w-sm">
          Gracias por contactarme. Te responderé lo antes posible a tu correo
          electrónico.
        </p>
        <Button
          onClick={() => setSubmitStatus("idle")}
          variant="secondary"
          className="mt-8"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-dark/70">
            Nombre Completo
          </label>
          <div className="relative group">
            <Icon
              icon="tabler:user"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/30 group-focus-within:text-primary-500 transition-colors"
            />
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Ej. Juan Pérez"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all placeholder:text-dark/20"
            />
          </div>
        </div>

        {/* Correo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-dark/70">
            Correo Electrónico
          </label>
          <div className="relative group">
            <Icon
              icon="tabler:mail"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/30 group-focus-within:text-primary-500 transition-colors"
            />
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="juan@ejemplo.com"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all placeholder:text-dark/20"
            />
          </div>
        </div>
      </div>

      {/* Asunto */}
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-semibold text-dark/70">
          Asunto
        </label>
        <div className="relative group">
          <Icon
            icon="tabler:notebook"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/30 group-focus-within:text-primary-500 transition-colors"
          />
          <input
            required
            type="text"
            name="subject"
            id="subject"
            placeholder="¿En qué puedo ayudarte?"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all placeholder:text-dark/20"
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-dark/70">
          Mensaje
        </label>
        <div className="relative group">
          <Icon
            icon="tabler:message-2"
            className="absolute left-4 top-6 text-dark/30 group-focus-within:text-primary-500 transition-colors"
          />
          <textarea
            required
            name="message"
            id="message"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all resize-none placeholder:text-dark/20"
          ></textarea>
        </div>
      </div>

      <AnimatePresence>
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3"
          >
            <Icon icon="tabler:alert-circle" className="size-5" />
            <p className="text-sm font-medium">
              Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="mt-2 w-full justify-center py-6 text-lg group"
      >
        <span>{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</span>
        {!isSubmitting && (
          <Icon
            icon="tabler:send"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        )}
      </Button>
    </form>
  );
}
