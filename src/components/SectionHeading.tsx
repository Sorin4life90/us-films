type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  body: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  body,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">
        {title} <span className="section-heading__title-accent">{titleAccent}</span>
      </h2>
      <p className="section-heading__body">{body}</p>
    </header>
  );
}

