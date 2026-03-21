type FooterProps = {
  brandName: string;
  instagram: string;
};

export function Footer({ brandName, instagram }: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <div className="footer__brand">{brandName}</div>
        <p className="footer__note">
          <a
            className="footer__link"
            href="https://www.maglas.ro/blog-avocat/protectia-fotografiilor-si-a-imaginilor-in-online-cine-detine-drepturile-si-cum-actionezi-impotriva-furtului-de-poze/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ne rezervam dreptul de a selecta si utiliza imagini foto si video realizate in cadrul
            evenimentelor, in scopuri de promovare si marketing, cu respectarea unei selectii atent
            curate, aliniate cu identitatea si standardele noastre estetice.
          </a>
        </p>
      </div>

      <div className="footer__actions">
        <a className="footer__link" href="#films">
          Vezi wedding films
        </a>
        <a className="footer__link footer__link--social" href={instagram} target="_blank" rel="noopener noreferrer">
          <span className="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
          </span>
          <span>Instagram</span>
        </a>
        <a className="footer__link" href="#home">
          Inapoi sus
        </a>
      </div>
    </footer>
  );
}
