import { useEffect, useState } from "react";
import "./styles.css";

const navigation = [
  { id: "home", label: "Acasa" },
  { id: "learning", label: "Model Educational" },
  { id: "programs", label: "Cicluri" },
  { id: "events", label: "Evenimente" },
  { id: "admissions", label: "Inscrieri" },
  { id: "contact", label: "Contact" },
] as const;

const impactStats = [
  { value: "18", label: "elevi in medie / clasa" },
  { value: "42", label: "cluburi si ateliere optionale" },
  { value: "1:9", label: "raport profesor - elev" },
  { value: "96%", label: "familii care recomanda scoala" },
];

const pillars = [
  {
    title: "Curriculum bilingv si relevant",
    text: "Invatarea combina standarde academice solide, proiecte interdisciplinare si evaluare clara, astfel incat elevii sa stie unde sunt si ce urmeaza.",
  },
  {
    title: "Campus activ, nu doar sali de clasa",
    text: "Laboratoare STEAM, studio media, zone outdoor si spatii pentru cluburi care transforma programul scolii intr-o experienta completa.",
  },
  {
    title: "Mentorat si wellbeing",
    text: "Fiecare copil este insotit de un profesor coordonator, iar dezvoltarea emotionala este lucrata la fel de atent ca performanta academica.",
  },
  {
    title: "Orientare pentru etapele urmatoare",
    text: "De la adaptarea la scoala pana la alegerea profilului de liceu si a traseului universitar, familia primeste repere concrete si predictibile.",
  },
];

const programs = [
  {
    stage: "Early Years",
    age: "2 - 6 ani",
    title: "Gradinita care construieste incredere si autonomie",
    text: "Rutine clare, invatare prin joc, limba engleza in mod natural si un program echilibrat intre explorare, creativitate si siguranta emotionala.",
    highlights: ["grupe mici", "teacher assistant", "outdoor daily"],
  },
  {
    stage: "Primary",
    age: "6 - 11 ani",
    title: "Scoala primara axata pe fundatii puternice",
    text: "Citire, matematica, stiinte si exprimare creativa intr-un ritm atent calibrat, cu feedback frecvent pentru elevi si parinti.",
    highlights: ["literacy labs", "matematica aplicata", "clubs after-school"],
  },
  {
    stage: "Middle School",
    age: "11 - 14 ani",
    title: "Gimnaziu cu proiecte, dezbatere si curaj academic",
    text: "Elevii invata sa argumenteze, sa lucreze in echipa si sa faca legaturi intre discipline prin proiecte reale si competitii tematice.",
    highlights: ["robotica", "public speaking", "science challenge"],
  },
  {
    stage: "High School",
    age: "14 - 18 ani",
    title: "Liceu cu orientare internationala si portofoliu clar",
    text: "Programe academice riguroase, consiliere pentru universitati si experiente care dezvolta initiativa, leadershipul si independenta.",
    highlights: ["career advising", "internships", "student ventures"],
  },
];

const events = [
  {
    date: "18 aprilie",
    audience: "Pentru familii noi",
    title: "Open Campus Day",
    text: "Tur ghidat, demonstratii in laboratoare, intalniri cu profesorii si mini-ateliere pentru copii organizate pe cicluri de varsta.",
  },
  {
    date: "10 mai",
    audience: "Clasele IV - VIII",
    title: "Festival Arts & Science",
    text: "Expozitii de proiecte, experimente live, recitaluri si zone interactive gandite impreuna de elevi si profesori.",
  },
  {
    date: "24 iunie",
    audience: "Viitori liceeni",
    title: "Future Ready Week",
    text: "Saptamana de orientare cu workshopuri de antreprenoriat, design thinking si simulare de interviuri pentru burse.",
  },
  {
    date: "iulie - august",
    audience: "Preschool - Middle School",
    title: "Summer School in Campus",
    text: "Program intensiv cu limbi straine, sport, experimente si activitati outdoor pentru elevii care vor sa ramana conectati la invatare.",
  },
];

const admissionSteps = [
  {
    step: "01",
    title: "Discutie initiala si tur de campus",
    text: "Stabilim obiectivele familiei, ciclul potrivit si participarea la o zi deschisa sau la o vizita privata.",
  },
  {
    step: "02",
    title: "Dosar de inscriere",
    text: "Completati formularul online si trimiteti documentele scolare si recomandarea educationala, acolo unde este cazul.",
  },
  {
    step: "03",
    title: "Intalnire de evaluare",
    text: "Pentru fiecare etapa folosim o combinatie de observare, testare academica si discutie cu elevul si familia.",
  },
  {
    step: "04",
    title: "Oferta si confirmare loc",
    text: "Comunicam rezultatul, apoi rezervam locul pe baza contractului si a taxei de confirmare.",
  },
];

const enrollmentWindows = [
  {
    label: "Etapa prioritara",
    period: "25 martie - 31 mai 2026",
    details: "Recomandata familiilor care vor sa beneficieze de toate locurile disponibile si de planificare completa pentru anul 2026 - 2027.",
  },
  {
    label: "Etapa de vara",
    period: "3 iunie - 19 iulie 2026",
    details: "Inscrieri in limita locurilor ramase, cu calendar accelerat pentru evaluare si contractare.",
  },
  {
    label: "Locuri de completare",
    period: "20 august - 5 septembrie 2026",
    details: "Disponibila doar pentru ciclurile in care mai exista locuri libere dupa reconfirmarile interne.",
  },
];

const campusFeatures = [
  "Biblioteca si reading lounge pentru studiu ghidat",
  "Makerspace pentru robotica, design si prototipare",
  "Studio pentru arte vizuale, muzica si productie media",
  "Teren multisport si program zilnic de miscare",
];

const testimonials = [
  {
    quote: "Am cautat o scoala care sa fie serioasa academic, dar calda in relatia cu familia. Aici am gasit ambele lucruri.",
    author: "Ioana M.",
    role: "Parinte, scoala primara",
  },
  {
    quote: "Programul de evenimente ne-a ajutat sa vedem cum lucreaza copiii in mod real, nu doar cum arata o prezentare de marketing.",
    author: "Vlad T.",
    role: "Parinte, admitere gimnaziu",
  },
  {
    quote: "Profesorii cer mult, dar explica bine si urmaresc progresul. Se vede clar ca exista un sistem si o cultura a feedbackului.",
    author: "Maria A.",
    role: "Parinte, liceu",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const offset = 180;
      let nextSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();

        if (top <= offset) {
          nextSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="school-page">
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <a className="brand" href="#home" aria-label="Arcadia International School">
            <span className="brand__eyebrow">Bucuresti | admitere deschisa</span>
            <span className="brand__name">Arcadia International School</span>
          </a>

          <nav className="site-nav" aria-label="Navigatie principala">
            {navigation.map((item) => (
              <a
                key={item.id}
                className={item.id === activeSection ? "site-nav__link is-active" : "site-nav__link"}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--solid site-header__cta" href="#admissions">
            Programeaza o vizita
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="site-shell hero__layout">
            <div className="hero__content">
              <span className="section-tag">Admitere 2026 - 2027</span>
              <h1 className="hero__title">
                O scoala construita pentru copii curiosi, familii exigente si etape de crestere
                bine ghidate.
              </h1>
              <p className="hero__body">
                Arcadia este un concept de scoala premium cu focus pe rigoare academica, bilingvism,
                wellbeing si o comunitate activa. Structura site-ului urmareste directiile observate
                la Avenor: mesaj clar, repere concrete, cicluri educationale distincte si accent pe
                experienta din campus.
              </p>

              <div className="hero__actions">
                <a className="button button--solid" href="#events">
                  Vezi evenimentele
                </a>
                <a className="button button--ghost" href="#programs">
                  Exploreaza ciclurile
                </a>
              </div>

              <ul className="hero__signals" aria-label="Avantaje principale">
                <li>curriculum bilingv</li>
                <li>mentorat individual</li>
                <li>cluburi dupa scoala</li>
                <li>campus modern</li>
              </ul>
            </div>

            <aside className="hero-stage" aria-label="Calendar si repere">
              <div className="hero-stage__panel hero-stage__panel--accent">
                <p className="hero-stage__label">Calendar prioritar</p>
                <h2>Inscrierile sunt deschise acum pentru toate ciclurile.</h2>
                <ul className="hero-stage__list">
                  <li>
                    <strong>18 aprilie</strong>
                    <span>Open Campus Day cu ateliere pentru parinti si copii</span>
                  </li>
                  <li>
                    <strong>31 mai</strong>
                    <span>Ultima zi pentru etapa prioritara de admitere</span>
                  </li>
                  <li>
                    <strong>iunie</strong>
                    <span>Sesiuni de evaluare si intalniri individuale cu echipa academica</span>
                  </li>
                </ul>
              </div>

              <div className="hero-stage__row">
                <div className="hero-stage__panel">
                  <p className="hero-stage__label">Ce urmareste pagina</p>
                  <p className="hero-stage__text">
                    Sa prezinte scoala intr-un mod premium si clar, cu informatie usor de parcurs si
                    CTA-uri orientate spre vizita si inscriere.
                  </p>
                </div>

                <div className="hero-stage__panel hero-stage__panel--grid">
                  {impactStats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="metrics">
          <div className="site-shell metrics__grid">
            {impactStats.map((stat) => (
              <article className="metric-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="learning">
          <div className="site-shell">
            <div className="section-heading">
              <span className="section-tag">Model educational</span>
              <h2 className="section-heading__title">Structura, incredere si un ritm de invatare vizibil.</h2>
              <p className="section-heading__body">
                Inspiratia Avenor se vede in felul in care informatia este organizata: pornim de la
                viziune si rezultate, apoi coboram in detalii concrete despre cum invata copiii si cum
                interactioneaza familia cu scoala.
              </p>
            </div>

            <div className="pillars">
              {pillars.map((pillar) => (
                <article className="pillar-card" key={pillar.title}>
                  <span className="pillar-card__index" aria-hidden="true">
                    {pillar.title.slice(0, 2).toUpperCase()}
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--sand" id="programs">
          <div className="site-shell">
            <div className="section-heading section-heading--split">
              <div>
                <span className="section-tag">Cicluri educationale</span>
                <h2 className="section-heading__title">Un traseu complet, din primii ani pana la liceu.</h2>
              </div>
              <p className="section-heading__body">
                Fiecare ciclu are propriul ritm, propriile spatii si obiective clare. Pagina separa
                etapele pentru a reduce ambiguitatea si pentru a ajuta familiile sa gaseasca rapid ceea
                ce conteaza pentru varsta copilului.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.title}>
                  <div className="program-card__meta">
                    <span>{program.stage}</span>
                    <span>{program.age}</span>
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <ul className="program-card__tags" aria-label={`Repere ${program.stage}`}>
                    {program.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="events">
          <div className="site-shell">
            <div className="section-heading">
              <span className="section-tag">Evenimente organizate</span>
              <h2 className="section-heading__title">Evenimente care lasa familiile sa vada scoala in actiune.</h2>
              <p className="section-heading__body">
                Pentru un site de prezentare educational, evenimentele nu sunt un detaliu secundar.
                Ele functioneaza ca dovada de cultura scolii si ca punct de intrare pentru viitoarele
                familii.
              </p>
            </div>

            <div className="events-layout">
              <article className="featured-event">
                <span className="featured-event__eyebrow">Eveniment recomandat</span>
                <h3>Open Campus Day | 18 aprilie 2026</h3>
                <p>
                  Program de o jumatate de zi cu tururi ghidate, demo lessons, sesiune Q&amp;A despre
                  admitere si ateliere separate pentru early years, primary si middle school.
                </p>
                <a className="button button--solid" href="#contact">
                  Solicita invitatia
                </a>
              </article>

              <div className="events-grid">
                {events.map((event) => (
                  <article className="event-card" key={event.title}>
                    <p className="event-card__meta">
                      <span>{event.date}</span>
                      <span>{event.audience}</span>
                    </p>
                    <h3>{event.title}</h3>
                    <p>{event.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--night" id="admissions">
          <div className="site-shell admissions">
            <div className="section-heading section-heading--light">
              <span className="section-tag section-tag--light">Program de inscriere</span>
              <h2 className="section-heading__title">
                Procesul este simplu de inteles, dar suficient de riguros incat sa creeze potrivirea buna.
              </h2>
              <p className="section-heading__body">
                Aici pagina devine foarte practica: pasi clari, intervale calendaristice si raspuns la
                intrebarea pe care orice familie o are imediat, si anume ce trebuie facut si pana cand.
              </p>
            </div>

            <div className="admissions__content">
              <div className="steps-list">
                {admissionSteps.map((item) => (
                  <article className="step-card" key={item.step}>
                    <span className="step-card__number">{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="enrollment-panel">
                <h3>Calendar orientativ 2026</h3>
                <div className="enrollment-panel__list">
                  {enrollmentWindows.map((item) => (
                    <article className="window-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.period}</strong>
                      <p>{item.details}</p>
                    </article>
                  ))}
                </div>

                <div className="enrollment-panel__note">
                  <p className="enrollment-panel__label">Ce poate fi personalizat usor</p>
                  <p>
                    Numele scolii, contactele, datele exacte ale calendarului si continutul pentru fiecare
                    ciclu pot fi actualizate rapid fara sa schimbam structura vizuala.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section--sand">
          <div className="site-shell community">
            <div className="community__intro">
              <span className="section-tag">Campus si comunitate</span>
              <h2 className="section-heading__title">Un mediu care sustine atat performanta, cat si apartenenta.</h2>
              <p className="section-heading__body">
                Zona aceasta continua logica site-urilor educationale puternice: nu doar ce promitem,
                ci si cum arata concret viata de zi cu zi in campus.
              </p>
            </div>

            <div className="community__layout">
              <article className="campus-panel">
                <p className="campus-panel__eyebrow">Spatii si experiente</p>
                <div className="campus-panel__grid">
                  {campusFeatures.map((feature) => (
                    <div className="campus-panel__item" key={feature}>
                      {feature}
                    </div>
                  ))}
                </div>
              </article>

              <div className="testimonial-grid">
                {testimonials.map((testimonial) => (
                  <article className="testimonial-card" key={testimonial.author}>
                    <p className="testimonial-card__quote">{testimonial.quote}</p>
                    <div className="testimonial-card__footer">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="site-shell footer__layout">
          <div className="footer__brand-block">
            <span className="section-tag">Contact</span>
            <h2>Viziteaza campusul si discuta direct cu echipa de admitere.</h2>
            <p>
              Continutul de mai sus este demonstrativ si poate fi adaptat pentru scoala reala, insa
              structura si stilul sunt deja pregatite pentru un site de prezentare premium.
            </p>
          </div>

          <div className="footer__contact-card">
            <a href="tel:+40730000000">+40 730 000 000</a>
            <a href="mailto:admissions@arcadia-school.ro">admissions@arcadia-school.ro</a>
            <p>Soseaua Erou Iancu Nicolae 00, Bucuresti</p>
            <p>Luni - Vineri | 08:00 - 18:00</p>
            <a className="button button--solid" href="mailto:admissions@arcadia-school.ro">
              Cere prezentarea completa
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
