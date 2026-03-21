import type { SiteContent } from "../types";
import { Reveal } from "./Reveal";

type HeroProps = {
  hero: SiteContent["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
        <span className="hero__orb hero__orb--three" />
        <span className="hero__grid" />
      </div>

      <div className="hero__inner">
        <div className="hero__layout">
          <Reveal className="hero__copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="hero__title">
              {hero.title}
              {hero.titleAccent ? (
                <>
                  {" "}
                  <span className="hero__title-accent">{hero.titleAccent}</span>
                </>
              ) : null}
            </h1>
            <p className="hero__description">{hero.description}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#films">
                {hero.primaryCta}
              </a>
              <a className="button button--secondary" href="#contact">
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal className="hero__aside" delay={140}>
            <aside className="hero-card hero-card--photo">
              <figure className="hero-card__media">
                <img
                  className="hero-card__image"
                  src="/media/fotolense/mihaela-razvan.jpg"
                  alt="Cadru wedding photography din portofoliul Fotolense"
                />
                <figcaption className="hero-card__caption">Wedding Photography / FotoLense</figcaption>
              </figure>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
