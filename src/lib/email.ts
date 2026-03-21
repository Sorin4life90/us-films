import type { ContactFormData } from "../types";

type SendContactFormResult = {
  mode: "whatsapp";
};

function normalizePhone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return digits.startsWith("0") ? `4${digits}` : digits;
}

function buildWhatsAppUrl(data: ContactFormData, recipientPhone: string) {
  const fallback = (value: string) => value.trim() || "(necompletat)";
  const timelineLabel = data.timeline.trim() || "Nu stiu exact";
  const body = [
    "Cerere noua US Films",
    "",
    `Nume: ${fallback(data.name)}`,
    `Email: ${fallback(data.email)}`,
    `Telefon: ${fallback(data.phone)}`,
    `Prenume: ${fallback(data.company)}`,
    `Tip eveniment: ${fallback(data.projectType)}`,
    `Cand are loc: ${timelineLabel}`,
    "",
    "Mesaj:",
    fallback(data.message),
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
