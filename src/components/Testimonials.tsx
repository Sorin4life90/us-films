import { siteContent, testimonials } from "../content/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Reveal>
        <SectionHeading
          eyebrow={siteContent.testimonials.eyebrow}
          title={siteContent.testimonials.title}
          titleAccent={siteContent.testimonials.titleAccent}
          body={siteContent.testimonials.description}
        />
      </Reveal>

      <div className="testimonials-grid testimonials-grid--editorial">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.id} delay={index * 70}>
            <article className="testimonial-card">
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__footer">
                <div>
                  <strong className="testimonial-card__name">{testimonial.name}</strong>
                  <div className="testimonial-card__meta">
                    {testimonial.role} / {testimonial.company}
                  </div>
                </div>
                {testimonial.placeholder ? (
                  <span className="placeholder-badge">Demo replace</span>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
