import { useEffect, useLayoutEffect, useState } from "react";
import { AboutSignature } from "./components/AboutSignature";
import { ContactForm } from "./components/ContactForm";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Footer } from "./components/Footer";
import { FloatingChat } from "./components/FloatingChat";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ShowreelEmbed } from "./components/ShowreelEmbed";
import { WeddingPhotography } from "./components/WeddingPhotography";
import { siteContent } from "./content/siteContent";
import "./styles.css";

function App() {
  const sectionIds = ["home", "films", "photography", "about", "contact"];
  const [activeSection, setActiveSection] = useState("home");

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const nextUrl = `${window.location.pathname}${window.location.search}#home`;
    window.history.replaceState(null, "", nextUrl);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const activationOffset = 160;
      let nextActiveSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();

        if (top <= activationOffset) {
          nextActiveSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection((currentSection) =>
        currentSection === nextActiveSection ? currentSection : nextActiveSection,
      );
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
    <div className="page-shell">
      <Navbar
        brandName={siteContent.brandName}
        brandTag={siteContent.brandTag}
        items={siteContent.navigation}
        activeSection={activeSection}
      />

      <ShowreelEmbed />
      <Hero hero={siteContent.hero} />

      <main className="main-content">
        <FeaturedProjects />
        <WeddingPhotography />
        <AboutSignature />
        <ContactForm />
      </main>

      <Footer
        brandName={siteContent.brandName}
        instagram={siteContent.contact.instagram}
      />

      <FloatingChat phone={siteContent.contact.phone} />
    </div>
  );
}

export default App;
