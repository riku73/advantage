import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Veuillez entrer une adresse e-mail valide"),
  phone: z
    .string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres")
    .optional()
    .or(z.literal("")),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
