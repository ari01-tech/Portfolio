import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", ...navLinks.map((l) => l.id)];

    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // Scroll-spy: the last section whose top has passed the navbar.
      const probe = 120;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      // Bottom of page always highlights the last link (Contact).
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sections[sections.length - 1];
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={() => setOpen(false)}
          aria-label="Ariam Al Hasani — back to top"
        >
          <span className="navbar__logo" aria-hidden="true">
            AA
          </span>
          <span className="navbar__name">
            Ariam Al Hasani
            <span className="navbar__role">Software Engineer</span>
          </span>
        </a>

        <nav
          className={`navbar__links${open ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link${active === link.id ? " is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvPath}
            download="Ariam-Al-Hasani-CV.pdf"
            className="btn btn--primary btn--sm navbar__cta"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
