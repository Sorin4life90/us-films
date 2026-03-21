import { useEffect, useRef, useState, type MouseEvent } from "react";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDesktopAudio, setShowDesktopAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  useEffect(() => {
    const isDesktop = !isMobileDevice() && window.matchMedia("(min-width: 561px)").matches;
    setShowDesktopAudio(isDesktop);

    if (!isDesktop) {
      return undefined;
    }

    const audio = audioRef.current;

    if (!audio) {
      return undefined;
    }

    audio.volume = 0.38;

    const syncAudioState = () => {
      setIsPlaying(!audio.paused);
    };

    const attemptAutoplay = async () => {
      if (userPausedRef.current) {
        return;
      }

      try {
        await audio.play();
        syncAudioState();
      } catch {
        syncAudioState();
      }
    };

    const handleFirstInteraction = () => {
      void attemptAutoplay();
    };

    void attemptAutoplay();

    window.addEventListener("pointerdown", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction);
    audio.addEventListener("play", syncAudioState);
    audio.addEventListener("pause", syncAudioState);

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      audio.removeEventListener("play", syncAudioState);
      audio.removeEventListener("pause", syncAudioState);
    };
  }, []);

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

  async function handleAudioToggle() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      userPausedRef.current = false;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }

      return;
    }

    userPausedRef.current = true;
    audio.pause();
    setIsPlaying(false);
  }

  return (
    <>
      <audio ref={audioRef} src="/media/background-music.mp3" preload="auto" loop aria-hidden="true" />

      <div className="floating-chat-wrap">
        {showDesktopAudio ? (
          <button
            className="floating-audio-toggle"
            type="button"
            onClick={handleAudioToggle}
            aria-label={isPlaying ? "Opreste muzica de fundal" : "Porneste muzica de fundal"}
            title={isPlaying ? "Opreste muzica de fundal" : "Porneste muzica de fundal"}
          >
            <span className="floating-chat__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                {isPlaying ? (
                  <>
                    <path d="M5 10h4l5-4v12l-5-4H5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <path d="M5 10h4l5-4v12l-5-4H5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M18 9l-6 6M12 9l6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </span>
            <span className="floating-chat__label">{isPlaying ? "SOUND OFF" : "SOUND ON"}</span>
          </button>
        ) : null}

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
      </div>

      {copied ? <div className="floating-chat__toast">Numarul pentru WhatsApp a fost copiat.</div> : null}
    </>
  );
}
