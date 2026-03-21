import { siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";

export function WeddingPhotography() {
  const section = siteContent.weddingPhotography;

  return (
    <section className="section section--photography" id="photography">
      <Reveal>
        <div className="photography-section">
          <div className="photography-section__content">
            <span className="eyebrow">{section.eyebrow}</span>
            <h2 className="section-heading__title">
              {section.title}
              {section.titleAccent ? (
                <>
                  {" "}
                  <span className="section-heading__title-accent">{section.titleAccent}</span>
                </>
              ) : null}
            </h2>
            <p className="about-signature__body">{section.body}</p>
          </div>

          <div className="photography-section__sources">
            {section.sources.map((source, sourceIndex) => (
              <div className="photography-source" key={source.site.href}>
                <div className="about-gallery__actions">
                  <a
                    className="button button--secondary about-gallery__site-link"
                    href={source.site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.site.label}
                  </a>
                </div>

                <div className="about-gallery about-gallery--photography" aria-label={source.site.label}>
                  {source.gallery.map((image, index) => (
                    <Reveal
                      key={image.src}
                      delay={sourceIndex * 120 + index * 80}
                      className="about-gallery__item"
                    >
                      <figure className="about-gallery__frame">
                        <img
                          className="about-gallery__image"
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                        />
                        {image.label.trim() ? (
                          <figcaption className="about-gallery__caption">
                            {image.href ? (
                              <a
                                className="about-gallery__link"
                                href={image.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {image.label}
                              </a>
                            ) : (
                              image.label
                            )}
                          </figcaption>
                        ) : null}
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
