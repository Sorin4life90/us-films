import type { NavItem } from "../types";

type NavbarProps = {
  brandName: string;
  brandTag: string;
  items: NavItem[];
  activeSection: string;
};

export function Navbar({
  brandName,
  brandTag,
  items,
  activeSection,
}: NavbarProps) {
  return (
    <nav className="site-nav" aria-label="Navigatie principala">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#home" aria-label={`${brandName} home`}>
          <span className="site-nav__brand-mark">{brandTag}</span>
          <span className="site-nav__brand-name">{brandName}</span>
        </a>

        <div className="site-nav__links">
          {items.map((item) => {
            const itemSection = item.href.slice(1);
            const isMobileOnly = item.href === "#contact";

            return (
              <a
                key={item.href}
                className={`site-nav__link ${
                  isMobileOnly ? "site-nav__link--mobile-only" : ""
                } ${
                  activeSection === itemSection ? "is-active" : ""
                }`.trim()}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a className="button button--primary site-nav__cta" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
