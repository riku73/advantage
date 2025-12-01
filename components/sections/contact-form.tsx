"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact-form";
import { submitContactForm } from "@/app/actions/submit-contact-form";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    const result = await submitContactForm(data);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setErrorMessage(result.message);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border bg-card p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
        >
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-2xl font-bold"
        >
          Message envoyé !
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-muted-foreground"
        >
          Merci pour votre message. Notre équipe vous contactera dans les plus
          brefs délais.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-sm font-semibold text-primary hover:underline transition-all hover:scale-105"
        >
          Envoyer un autre message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name & E-mail - 2 columns on desktop */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom complet <span className="text-destructive">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
            placeholder="Marc Schmit"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail <span className="text-destructive">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
            placeholder="marc.schmit@example.lu"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Company - 2 columns on desktop */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Téléphone
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
            placeholder="+352 621 123 456 (optionnel)"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium">
            Entreprise
          </label>
          <input
            {...register("company")}
            type="text"
            id="company"
            className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
            placeholder="Nom de votre entreprise (optionnel)"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50 resize-none"
          placeholder="Décrivez votre projet ou posez-nous vos questions..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          {...register("privacy")}
          type="checkbox"
          id="privacy"
          className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          J'accepte que mes données soient collectées et traitées dans le
          cadre de ma demande de contact. <span className="text-destructive">*</span>
        </label>
      </div>
      {errors.privacy && (
        <p className="text-sm text-destructive">{errors.privacy.message}</p>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="rounded-md bg-destructive/10 p-4 text-sm text-destructive">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Envoi en cours...
          </span>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
