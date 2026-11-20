import { useEffect, useRef, useState } from "react";
import {
  CloudSun,
  Container,
  ExternalLink,
  Github,
  Globe,
  Hand,
  Newspaper,
  ScanFace,
  X,
} from "lucide-react";

/* Icon registry for the default project covers (used in src/data/portfolio.js) */
export const projectIcons = {
  Container,
  ScanFace,
  Hand,
  CloudSun,
  Globe,
  Newspaper,
};

/**
 * Full-screen dialog with the extended project details.
 * Closes on: X button, Escape key, or a click on the backdrop.
 */
export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Lock page scroll while the modal is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the dialog for keyboard users.
    dialogRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = projectIcons[project.icon];

  return (
    <div
      className="pmodal"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="pmodal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pmodal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          className="pmodal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Cover strip */}
        <div className={`pmodal__cover pcover--${project.id}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
            />
          ) : (
            <span className="pcover__icon" aria-hidden="true">
              {Icon && <Icon size={52} strokeWidth={1.6} />}
            </span>
          )}
        </div>

        <div className="pmodal__body">
          <div className="pmodal__cats">
            {project.categories.map((category) => (
              <span className="pmodal__cat" key={category}>
                {category}
              </span>
            ))}
          </div>

          <h3 className="pmodal__title" id="pmodal-title">
            {project.title}
          </h3>
          <p className="pmodal__tagline">{project.tagline}</p>

          <p className="pmodal__description">{project.description}</p>

          {project.highlights.length > 0 && (
            <div className="pmodal__section">
              <h4 className="pmodal__section-title">Key highlights</h4>
              <ul className="pmodal__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <svg
                      className="pmodal__check"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <circle cx="10" cy="10" r="9" fill="#e7f0fd" />
                      <path
                        d="M6 10.2l2.6 2.6L14 7.4"
                        fill="none"
                        stroke="#1e5eff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pmodal__section">
            <h4 className="pmodal__section-title">Technologies used</h4>
            <div className="pmodal__tech">
              {project.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pmodal__links">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                <Github size={16} aria-hidden="true" />
                View on GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn--sm"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            )}
            {!project.repoUrl && !project.demoUrl && (
              <p className="pmodal__note">
                Repository and live-demo links will appear here once this
                project is published publicly.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
