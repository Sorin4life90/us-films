import type { ContactFormData } from "../types";

type SendContactFormResult = {
  mode: "whatsapp";
};

function normalizePhone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return digits.startsWith("0") ? `4${digits}` : digits;
}

function buildWhatsAppUrl(data: ContactFormData, recipientPhone: string) {
  const body = [
    "Cerere noua US Films",
    "",
    `Nume: ${data.name}`,
    `Email: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Prenume: ${data.company}`,
    `Tip eveniment: ${data.projectType}`,
    `Cand are loc: ${data.timeline}`,
    "",
    "Mesaj:",
    data.message,
    "",
    `Trimis la: ${new Date().toLocaleString("ro-RO")}`,
  ].join("\n");

  return `https://wa.me/${normalizePhone(recipientPhone)}?text=${encodeURIComponent(body)}`;
}

export async function sendContactForm(
  data: ContactFormData,
  recipientPhone: string,
): Promise<SendContactFormResult> {
  const whatsappUrl = buildWhatsAppUrl(data, recipientPhone);
  const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = whatsappUrl;
  }

  return { mode: "whatsapp" };
}
