import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "../data/portfolio.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" aria-label="Back to top">
              AA
            </a>
            <div>
              <p className="footer__name">{profile.name}</p>
              <p className="footer__tagline">
                Building intelligent solutions through software engineering.
              </p>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="GitHub profile"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.emailHref}
              className="footer__social-btn"
              aria-label="Send an email"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
         
          <p className="footer__built">Built with React & Vite</p>
        </div>
      </div>

      {/* Back-to-top floating button */}
      <a href="#home" className="footer__top-btn" aria-label="Back to top">
        <ArrowUp size={18} aria-hidden="true" />
      </a>
    </footer>
  );
}
