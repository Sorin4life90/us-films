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
        <a className="footer__link" href={instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a className="footer__link" href="#home">
          Inapoi sus
        </a>
      </div>
    </footer>
  );
}
