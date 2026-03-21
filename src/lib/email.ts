import type { ContactFormData } from "../types";

const EMAIL_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

type SendContactFormResult =
  | { mode: "emailjs" }
  | { mode: "mailto" };

function buildMailtoUrl(data: ContactFormData, recipientEmail: string) {
  const subject = `Cerere Wedding Videography - ${data.name}`;
  const body = [
    `Nume: ${data.name}`,
    `Email: ${data.email}`,
    `Prenume: ${data.company}`,
    `Tip de poveste: ${data.projectType}`,
    `Cand are loc: ${data.timeline}`,
    "",
    "Cateva randuri despre voi:",
    data.message,
    "",
    `Trimis la: ${new Date().toLocaleString("ro-RO")}`,
  ].join("\n");

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendContactForm(
  data: ContactFormData,
  recipientEmail: string,
): Promise<SendContactFormResult> {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    window.location.href = buildMailtoUrl(data, recipientEmail);
    return { mode: "mailto" };
  }

  const response = await fetch(EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        ...data,
        submitted_at: new Date().toLocaleString("ro-RO"),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      "Cererea nu a putut fi trimisa. Verifica configurarea serviciului sau incearca din nou.",
    );
  }

  return { mode: "emailjs" };
}
