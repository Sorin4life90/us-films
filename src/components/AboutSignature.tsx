import { siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";

export function AboutSignature() {
  const hasCardContent = Boolean(
    siteContent.aboutSignature.cardLabel.trim() ||
      siteContent.aboutSignature.note.trim() ||
      siteContent.aboutSignature.quoteText.trim(),
  );

  return (
    <section className="section section--about" id="about">
      <Reveal>
        <div className="about-signature-wrap">
          <div className={`about-signature${hasCardContent ? "" : " about-signature--single"}`}>
            <div className="about-signature__content">
              <span className="eyebrow">{siteContent.aboutSignature.eyebrow}</span>
              <h2 className="section-heading__title">
                {siteContent.aboutSignature.title}{" "}
                <span className="section-heading__title-accent">
                  {siteContent.aboutSignature.titleAccent}
                </span>
              </h2>
              <p className="about-signature__body">{siteContent.aboutSignature.body}</p>
            </div>

            {hasCardContent ? (
              <div className="about-signature__card">
                {siteContent.aboutSignature.cardLabel.trim() ? (
                  <span className="about-signature__label">{siteContent.aboutSignature.cardLabel}</span>
                ) : null}
                {siteContent.aboutSignature.note.trim() ? (
                  <p className="about-signature__note">{siteContent.aboutSignature.note}</p>
                ) : null}
                {siteContent.aboutSignature.quoteText.trim() ? (
                  <div className="about-signature__quote">
                    {siteContent.aboutSignature.quoteIndex.trim() ? (
                      <span className="about-signature__quote-mark">
                        {siteContent.aboutSignature.quoteIndex}
                      </span>
                    ) : null}
                    <p className="about-signature__quote-text">{siteContent.aboutSignature.quoteText}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
