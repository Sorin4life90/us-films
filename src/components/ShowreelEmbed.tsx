import { siteContent } from "../content/siteContent";

function getBackgroundEmbedSrc(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.replace("www.", "");

    if (host.includes("vimeo.com")) {
      const segments = url.pathname.split("/").filter(Boolean);
      const videoId = segments[segments.length - 1];

      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&controls=0&byline=0&title=0&portrait=0&quality=1080p`;
      }
    }

    if (host.includes("youtube.com") || host.includes("youtu.be")) {
      const segments = url.pathname.split("/").filter(Boolean);
      const videoId =
        host.includes("youtu.be")
          ? segments[0]
          : segments[0] === "embed"
            ? segments[1]
            : url.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`;
      }
    }
  } catch {
    return rawUrl;
  }

  return rawUrl;
}

export function ShowreelEmbed() {
  const embedSrc = getBackgroundEmbedSrc(siteContent.featuredFilm.embedSrc);

  return (
    <section className="section section--showreel" id="home" aria-label="Wedding videography hero">
      <div className="showreel showreel--hero-video">
        <div className="showreel__background">
          <iframe
            className="showreel__background-iframe"
            src={embedSrc}
            title={siteContent.featuredFilm.embedTitle}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="eager"
            allowFullScreen
          />
        </div>

        <div className="showreel__overlay" aria-hidden="true" />

        <div className="showreel__floating-ui">
          <a className="showreel__scroll-hint" href="#films">
            Vezi wedding films
          </a>
        </div>
      </div>
    </section>
  );
}
