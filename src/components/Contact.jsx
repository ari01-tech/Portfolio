import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { profile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import "./Contact.css";

/* Small helper: a contact card with an optional copy-to-clipboard button. */
function ContactCard({ href, icon, label, value, external = false, copyValue = null }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const text = copyValue ?? value;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / non-secure contexts.
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="contact-card card">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="contact-card__main"
        aria-label={`${label}: ${value}`}
      >
        <span className="contact-card__icon" aria-hidden="true">
          {icon}
        </span>
        <span className="contact-card__text">
          <span className="contact-card__label">{label}</span>
          <span className="contact-card__value">{value}</span>
        </span>
        <ArrowUpRight
          size={16}
          className="contact-card__arrow"
          aria-hidden="true"
        />
      </a>

      {copyValue !== null && (
        <button
          className={`contact-card__copy${copied ? " is-copied" : ""}`}
          onClick={onCopy}
          aria-label={`Copy ${label.toLowerCase()}`}
          title={copied ? "Copied" : "Copy"}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="section section--soft contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="07 · Contact"
          title="Have an opportunity or a project in mind?"
          sub="I'm always happy to talk about software engineering roles, collaborations, or new ideas. The fastest way to reach me is email — I reply quickly."
          center
        />

        <div className="contact__grid reveal">
          <ContactCard
            href={profile.emailHref}
            icon={<Mail size={21} />}
            label="Email"
            value={profile.email}
            copyValue={profile.email}
          />
          <ContactCard
            href={profile.phoneHref}
            icon={<Phone size={21} />}
            label="Phone"
            value={profile.phone}
            copyValue={profile.phone.replace(/\s/g, "")}
          />
          <ContactCard
            href={profile.linkedin}
            icon={<Linkedin size={21} />}
            label="LinkedIn"
            value="ariam-al-hasani"
            external
          />
          <ContactCard
            href={profile.github}
            icon={<Github size={21} />}
            label="GitHub"
            value="github.com/ari01-tech"
            external
          />
        </div>

        <div className="contact__cta reveal">
          <a href={profile.emailHref} className="btn btn--primary">
            <Mail size={17} aria-hidden="true" />
            Email me directly
          </a>
          <a
            href={profile.cvPath}
            download="Ariam-Al-Hasani-CV.pdf"
            className="btn btn--ghost"
          >
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
}
