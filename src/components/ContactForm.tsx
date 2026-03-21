import { FormEvent, useRef, useState } from "react";
import { siteContent } from "../content/siteContent";
import { sendContactForm } from "../lib/email";
import type { ContactFormData } from "../types";
import { Reveal } from "./Reveal";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;
type FormStatus = "idle" | "loading" | "success" | "error";
const MIN_COMPLETION_TIME_MS = 2500;
const SUBMISSION_COOLDOWN_MS = 60_000;
const LAST_SUBMISSION_KEY = "us-films:last-contact-submit";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  timeline: "",
  message: "",
};

function validateForm(data: ContactFormData) {
  const errors: FieldErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Introdu un nume valid.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Introdu o adresa de email valida.";
  }

  if (data.company.trim().length < 2) {
    errors.company = "Introdu cateva detalii de identificare.";
  }

  if (!data.projectType) {
    errors.projectType = "Selecteaza tipul de poveste.";
  }

  if (!data.timeline) {
    errors.timeline = "Selecteaza cand are loc evenimentul.";
  }

  if (data.message.trim().length < 20) {
    errors.message = "Mesajul trebuie sa aiba cel putin 20 de caractere.";
  }

  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [website, setWebsite] = useState("");
  const startedAtRef = useRef(Date.now());

  function getLastSubmissionAt() {
    try {
      return Number(window.localStorage.getItem(LAST_SUBMISSION_KEY) ?? 0);
    } catch {
      return 0;
    }
  }

  function setLastSubmissionAt(timestamp: number) {
    try {
      window.localStorage.setItem(LAST_SUBMISSION_KEY, String(timestamp));
    } catch {
      // Ignore storage errors and continue without client-side cooldown persistence.
    }
  }

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (website.trim().length > 0) {
      setStatus("success");
      setStatusMessage("Mesajul a fost inregistrat.");
      return;
    }

    if (Date.now() - startedAtRef.current < MIN_COMPLETION_TIME_MS) {
      setStatus("error");
      setStatusMessage("Te rog incearca din nou peste cateva secunde.");
      return;
    }

    const lastSubmissionAt = getLastSubmissionAt();
    if (Date.now() - lastSubmissionAt < SUBMISSION_COOLDOWN_MS) {
      setStatus("error");
      setStatusMessage("Te rog asteapta aproximativ un minut inainte de un nou mesaj.");
      return;
    }

    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setStatusMessage("Te rog corecteaza campurile marcate si incearca din nou.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Trimitem mesajul...");

    try {
      const result = await sendContactForm(formData, siteContent.contact.recipientEmail);
      setStatus("success");
      setStatusMessage(
        result.mode === "emailjs"
          ? siteContent.contact.successMessage
          : "Am deschis un email precompletat catre adresa afisata. Trimite-l din aplicatia ta de mail.",
      );
      setLastSubmissionAt(Date.now());
      setFormData(initialFormData);
      setErrors({});
      setWebsite("");
      startedAtRef.current = Date.now();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "A aparut o eroare. Incearca din nou.",
      );
    }
  }

  return (
    <section className="section" id="contact">
      <Reveal>
        <div className="contact-grid">
          <aside className="contact-panel">
            <span className="contact-panel__eyebrow">{siteContent.contact.eyebrow}</span>
            <h2 className="contact-panel__title">{siteContent.contact.title}</h2>
            <p className="contact-panel__body">{siteContent.contact.body}</p>

            <div className="contact-panel__list">
              <div className="contact-panel__item">
                <span className="contact-panel__label">Email</span>
                <a className="contact-panel__value" href={`mailto:${siteContent.contact.email}`}>
                  {siteContent.contact.email}
                </a>
              </div>
              <div className="contact-panel__item">
                <span className="contact-panel__label">Telefon</span>
                <a className="contact-panel__value" href={`tel:${siteContent.contact.phone}`}>
                  {siteContent.contact.phone}
                </a>
              </div>
              <div className="contact-panel__item">
                <span className="contact-panel__label">Instagram</span>
                <a
                  className="contact-panel__value"
                  href={siteContent.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @us_films_wedding_videography
                </a>
              </div>
              <div className="contact-panel__item">
                <span className="contact-panel__label">Locatie</span>
                <span className="contact-panel__value">{siteContent.contact.location}</span>
              </div>
            </div>

            <p className="contact-panel__notice">{siteContent.contact.notice}</p>
          </aside>

          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field field--honeypot" aria-hidden="true">
                <label className="field__label" htmlFor="website">
                  Website
                </label>
                <input
                  className="field__control"
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <div className="field">
                <label className="field__label" htmlFor="name">
                  Nume
                </label>
                <input
                  className="field__control"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(event) => updateField("name", event.target.value)}
                />
                {errors.name ? (
                  <p className="field__error" id="name-error">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="field__control"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={(event) => updateField("email", event.target.value)}
                />
                {errors.email ? (
                  <p className="field__error" id="email-error">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="company">
                  Prenume
                </label>
                <input
                  className="field__control"
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                  onChange={(event) => updateField("company", event.target.value)}
                />
                {errors.company ? (
                  <p className="field__error" id="company-error">
                    {errors.company}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="projectType">
                  Tip eveniment
                </label>
                <select
                  className="field__control"
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                  onChange={(event) => updateField("projectType", event.target.value)}
                >
                  <option value="">Alege o optiune</option>
                  {siteContent.contact.projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
                {errors.projectType ? (
                  <p className="field__error" id="projectType-error">
                    {errors.projectType}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="timeline">
                  Cand are loc
                </label>
                <select
                  className="field__control"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  aria-invalid={Boolean(errors.timeline)}
                  aria-describedby={errors.timeline ? "timeline-error" : undefined}
                  onChange={(event) => updateField("timeline", event.target.value)}
                >
                  <option value="">Spune-mi aproximativ</option>
                  {siteContent.contact.timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
                {errors.timeline ? (
                  <p className="field__error" id="timeline-error">
                    {errors.timeline}
                  </p>
                ) : null}
              </div>

              <div className="field field--full">
                <label className="field__label" htmlFor="message">
                  Mesaj
                </label>
                <textarea
                  className="field__control"
                  id="message"
                  name="message"
                  value={formData.message}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="Spune-mi data, locatia si cateva detalii despre eveniment."
                />
                {errors.message ? (
                  <p className="field__error" id="message-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="contact-form__actions">
              <button
                className="button button--primary"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Trimitem..." : "Trimite mesajul"}
              </button>
              <a className="button button--secondary" href={`mailto:${siteContent.contact.email}`}>
                Scrie direct pe email
              </a>
            </div>

            <div
              className={`contact-form__status ${
                status === "error" ? "is-error" : status === "success" ? "is-success" : ""
              }`.trim()}
              aria-live="polite"
            >
              {statusMessage}
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
