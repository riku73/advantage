"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact-form";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate data on server
    const validatedData = contactFormSchema.parse(data);

    // TODO: In production, you would:
    // 1. Send email notification using a service like Resend, SendGrid, etc.
    // 2. Store in database if needed
    // 3. Integrate with CRM

    // For now, we'll just log and simulate success
    console.log("Contact form submission:", validatedData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Merci pour votre message ! Nous vous contacterons rapidement.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
