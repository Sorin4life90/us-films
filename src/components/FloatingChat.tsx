import { useEffect, useState, type MouseEvent } from "react";

type FloatingChatProps = {
  phone: string;
};

function getWhatsAppHref(phone: string) {
  const normalizedPhone = phone.replace(/[^\d]/g, "");
  const whatsappPhone = normalizedPhone.startsWith("0") ? `4${normalizedPhone}` : normalizedPhone;
  return `https://wa.me/${whatsappPhone}`;
}

function isMobileDevice() {
  if (typeof navigator === "undefined") {
    return false;
  }

  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

export function FloatingChat({ phone }: FloatingChatProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const normalizedPhone = phone.replace(/[^\d]/g, "");
  const whatsappPhone = normalizedPhone.startsWith("0") ? `4${normalizedPhone}` : normalizedPhone;

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (isMobileDevice()) {
      return;
    }

    try {
      if (!navigator.onLine) {
        event.preventDefault();
        await navigator.clipboard.writeText(whatsappPhone);
        setCopied(true);
      }
    } catch {
      event.preventDefault();
      window.prompt("Copiaza numarul pentru WhatsApp:", whatsappPhone);
    }
  }

  return (
    <>
      <a
        className="floating-chat"
        href={getWhatsAppHref(phone)}
        aria-label="Deschide WhatsApp"
        title="Deschide WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <span className="floating-chat__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path
              d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 17.5H9.2L5.6 20a.6.6 0 0 1-.94-.49V17.5H5A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11h8M8 14h5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="floating-chat__label">CHAT</span>
      </a>

      {copied ? <div className="floating-chat__toast">Numarul pentru WhatsApp a fost copiat.</div> : null}
    </>
  );
}
