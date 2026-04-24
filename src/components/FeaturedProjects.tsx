import { useEffect, useRef, useState, type MouseEvent } from "react";
import { portfolioItems, siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type VideoItem = (typeof portfolioItems)[number] & {
  embedSrc: string;
  mediaType: "video";
};

function getVideoId(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.replace("www.", "");

    if (host.includes("vimeo.com")) {
      const segments = url.pathname.split("/").filter(Boolean);
      return {
        platform: "vimeo" as const,
        id: segments[segments.length - 1] ?? "",
      };
    }

    if (host.includes("youtube.com") || host.includes("youtu.be")) {
      const segments = url.pathname.split("/").filter(Boolean);
      const id =
        host.includes("youtu.be")
          ? segments[0]
          : segments[0] === "embed"
            ? segments[1]
            : url.searchParams.get("v") ?? "";

      return {
        platform: "youtube" as const,
        id,
      };
    }
  } catch {
    return null;
  }

  return null;
}

function getPreviewEmbedSrc(rawUrl: string) {
  const parsed = getVideoId(rawUrl);

  if (!parsed?.id) {
    return rawUrl;
  }

  if (parsed.platform === "vimeo") {
    return `https://player.vimeo.com/video/${parsed.id}?background=1&autoplay=1&loop=1&muted=1&autopause=0&controls=0&byline=0&title=0&portrait=0`;
  }

  return `https://www.youtube.com/embed/${parsed.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${parsed.id}&playsinline=1&rel=0&modestbranding=1`;
}

function getPlayerEmbedSrc(rawUrl: string) {
  const parsed = getVideoId(rawUrl);

  if (!parsed?.id) {
    return rawUrl;
  }

  if (parsed.platform === "vimeo") {
    return `https://player.vimeo.com/video/${parsed.id}?autoplay=1&muted=0&loop=0&autopause=1&controls=1&byline=0&title=0&portrait=0`;
  }

  return `https://www.youtube.com/embed/${parsed.id}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`;
}

function getExternalUrl(rawUrl: string) {
  const parsed = getVideoId(rawUrl);

  if (!parsed?.id) {
    return rawUrl;
  }

  if (parsed.platform === "vimeo") {
    return `https://vimeo.com/${parsed.id}`;
  }

  return `https://www.youtube.com/watch?v=${parsed.id}`;
}

function getYouTubeThumbnailUrl(rawUrl: string) {
  const parsed = getVideoId(rawUrl);

  if (parsed?.platform !== "youtube" || !parsed.id) {
    return "";
  }

  return `https://i.ytimg.com/vi/${parsed.id}/hqdefault.jpg`;
}

function FilmPreviewMedia({ project }: { project: VideoItem }) {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const platform = getVideoId(project.embedSrc)?.platform;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 560px)");
    const syncMatch = () => setIsMobile(mediaQuery.matches);

    syncMatch();
    mediaQuery.addEventListener("change", syncMatch);

    return () => mediaQuery.removeEventListener("change", syncMatch);
  }, []);

  useEffect(() => {
    if (!isMobile || platform !== "youtube") {
      setIsInView(true);
      return undefined;
    }

    const node = mediaRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "180px 0px",
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isMobile, platform]);

  const shouldRenderIframe = platform !== "youtube" || !isMobile || isInView;
  const thumbnailUrl = getYouTubeThumbnailUrl(project.embedSrc);

  return (
    <div ref={mediaRef} className="film-preview__media">
      {shouldRenderIframe ? (
        <iframe
          className="film-preview__iframe"
          src={getPreviewEmbedSrc(project.embedSrc)}
          title={`${project.title} preview`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          tabIndex={-1}
        />
      ) : (
        <img
          className="film-preview__poster"
          src={thumbnailUrl}
          alt={`${project.title} poster`}
          loading="lazy"
        />
      )}
    </div>
  );
}

export function FeaturedProjects() {
  const videoItems = portfolioItems.filter(
    (project): project is VideoItem => project.mediaType === "video" && Boolean(project.embedSrc),
  );
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const targetScrollRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeVideo]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const stepStripScroll = () => {
    const strip = stripRef.current;

    if (!strip) {
      animationFrameRef.current = null;
      return;
    }

    const nextScrollLeft =
      strip.scrollLeft + (targetScrollRef.current - strip.scrollLeft) * 0.08;

    strip.scrollLeft = nextScrollLeft;

    if (Math.abs(targetScrollRef.current - nextScrollLeft) < 0.5) {
      strip.scrollLeft = targetScrollRef.current;
      animationFrameRef.current = null;
      return;
    }

    animationFrameRef.current = window.requestAnimationFrame(stepStripScroll);
  };

  const startStripScroll = () => {
    if (animationFrameRef.current === null) {
      animationFrameRef.current = window.requestAnimationFrame(stepStripScroll);
    }
  };

  const handleStripMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const strip = stripRef.current;

    if (!strip) {
      return;
    }

    const bounds = strip.getBoundingClientRect();
    const maxScroll = strip.scrollWidth - strip.clientWidth;

    if (maxScroll <= 0 || bounds.width <= 0) {
      return;
    }

    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const clampedX = Math.min(Math.max(relativeX, 0), 1);
    targetScrollRef.current = maxScroll * clampedX;
    startStripScroll();
  };

  const handleStripMouseLeave = () => {
    const strip = stripRef.current;

    if (!strip) {
      return;
    }

    targetScrollRef.current = strip.scrollLeft;
  };

  return (
    <section className="section section--films" id="films">
      <Reveal>
        <SectionHeading
          eyebrow={siteContent.selectedFilms.eyebrow}
          title={siteContent.selectedFilms.title}
          titleAccent={siteContent.selectedFilms.titleAccent}
          body={siteContent.selectedFilms.description}
        />
      </Reveal>

      <div
        ref={stripRef}
        className="films-strip"
        aria-label="Wedding films list"
        onMouseMove={handleStripMouseMove}
        onMouseLeave={handleStripMouseLeave}
      >
        {videoItems.map((project, index) => {
          const platform = getVideoId(project.embedSrc)?.platform;

          return (
            <Reveal
              key={project.id}
              delay={index * 70}
              className="film-preview"
            >
              <button
                className="film-preview__button"
                type="button"
                onClick={() => setActiveVideo(project)}
                aria-label={`Play ${project.title}`}
              >
                <div className="film-preview__label-wrap">
                  <span className="film-preview__label">{project.title}</span>
                  <span className="film-preview__meta">
                    {platform === "vimeo" ? "Vimeo" : "YouTube"} / {project.year}
                  </span>
                </div>

                <FilmPreviewMedia project={project} />
              </button>
            </Reveal>
          );
        })}
      </div>

      {activeVideo ? (
        <div
          className="film-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div className="film-modal__dialog" onClick={(event) => event.stopPropagation()}>
            <div className="film-modal__header">
              <div>
                <div className="film-modal__eyebrow">{activeVideo.category}</div>
                <h3 className="film-modal__title">{activeVideo.title}</h3>
              </div>

              <div className="film-modal__actions">
                <a
                  className="button button--secondary"
                  href={getExternalUrl(activeVideo.embedSrc)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deschide sursa
                </a>
                <button
                  className="film-modal__close"
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close player"
                >
                  Închide
                </button>
              </div>
            </div>

            <div className="film-modal__player">
              <iframe
                key={activeVideo.id}
                className="film-modal__iframe"
                src={getPlayerEmbedSrc(activeVideo.embedSrc)}
                title={activeVideo.title}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
