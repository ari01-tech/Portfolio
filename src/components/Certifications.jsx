import { useState } from "react";
import {
  Award,
  Code2,
  Eye,
  Download,
  FileText,
  Image as ImageIcon,
  Rocket,
  Satellite,
  Trophy,
} from "lucide-react";
import certificates, { certificateCategories } from "../data/certificates.js";
import { achievements, research } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import CertificateModal, {
  certDownloadName,
  isPdf,
} from "./CertificateModal.jsx";
import "./Certifications.css";

/* Icon registry for the awards & research subsection (src/data/portfolio.js) */
const awardIcons = { Trophy, Award, Code2, Satellite, Rocket };

function AwardIcon({ name, size = 26 }) {
  const Icon = awardIcons[name];
  return Icon ? <Icon size={size} /> : <Award size={size} />;
}

/* =====================================================================
   CERTIFICATIONS & ACHIEVEMENTS
   ---------------------------------------------------------------------
   • Certificate gallery  → driven entirely by src/data/certificates.js
   • Awards & research    → driven by src/data/portfolio.js
   ===================================================================== */
export default function Certifications() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible =
    filter === "All"
      ? certificates
      : certificates.filter((c) => c.category === filter);

  return (
    <section className="section section--soft certifications" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="06 · Certifications & Achievements"
          title="A gallery of my certificates"
          sub="Certifications, awards and honors collected along the journey. Filter by category, click any certificate to preview it in full size, or download a copy."
        />

        {/* ---------------- Category filters ---------------- */}
        <div
          className="certs__filters reveal"
          role="group"
          aria-label="Filter certificates by category"
        >
          {["All", ...certificateCategories].map((category) => {
            const count =
              category === "All"
                ? certificates.length
                : certificates.filter((c) => c.category === category).length;

            return (
              <button
                key={category}
                className={`certs__filter${filter === category ? " is-active" : ""}`}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
                <span className="certs__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* ---------------- Certificate gallery ---------------- */}
        {visible.length > 0 ? (
          <div className="certs__grid" key={filter}>
            {visible.map((certificate, index) => {
              const pdf = isPdf(certificate.file);

              return (
                <article
                  className="cert-card card reveal"
                  style={{ "--reveal-delay": `${index * 60}ms` }}
                  key={certificate.id}
                >
                  {/* Clickable thumbnail — opens the large preview */}
                  <button
                    className="cert-card__thumb"
                    onClick={() => setSelected(certificate)}
                    aria-label={`Preview ${certificate.name}`}
                    title="Click to preview"
                  >
                    {pdf ? (
                      <span className="cert-card__pdftile" aria-hidden="true">
                        <span className="cert-card__pdftile-icon">
                          <FileText size={40} strokeWidth={1.6} />
                        </span>
                        <span className="cert-card__pdftile-label">
                          PDF Certificate
                        </span>
                        <span className="cert-card__pdftile-hint">
                          Click to preview
                        </span>
                      </span>
                    ) : (
                      <img
                        src={certificate.file}
                        alt={`${certificate.name} — certificate preview`}
                        loading="lazy"
                      />
                    )}
                    <span className="cert-card__ext" aria-hidden="true">
                      {pdf ? (
                        <FileText size={12} />
                      ) : (
                        <ImageIcon size={12} />
                      )}
                      {certificate.file.split(".").pop().toUpperCase()}
                    </span>
                  </button>

                  {/* Body */}
                  <div className="cert-card__body">
                    <div className="cert-card__meta">
                      <span className="cert-card__cat">{certificate.category}</span>
                      <span className="cert-card__date">{certificate.issueDate}</span>
                    </div>

                    <h3 className="cert-card__title">{certificate.name}</h3>
                    <p className="cert-card__org">{certificate.organization}</p>

                    <div className="cert-card__actions">
                      <button
                        className="btn btn--primary btn--sm cert-card__btn"
                        onClick={() => setSelected(certificate)}
                      >
                        <Eye size={15} aria-hidden="true" />
                        View Certificate
                      </button>
                      <a
                        className="btn btn--ghost btn--sm cert-card__btn"
                        href={certificate.file}
                        download={certDownloadName(certificate)}
                      >
                        <Download size={15} aria-hidden="true" />
                        Download Certificate
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="certs__empty">
            No certificates in this category yet — new ones are added as they
            are earned.
          </p>
        )}

        

        {/* ---------------- Awards, competitions & honors ---------------- */}
        <div className="certs__subhead reveal">
          <h3>Awards, competitions &amp; honors</h3>
        </div>

        <div className="achv__grid">
          {/* Featured NASA card */}
          {achievements
            .filter((a) => a.highlight)
            .map((featured) => (
              <article className="achv-card achv-card--featured reveal" key={featured.id}>
                <span className="achv-card__icon" aria-hidden="true">
                  <AwardIcon name={featured.icon} />
                </span>
                <div className="achv-card__text">
                  <h4 className="achv-card__title">{featured.title}</h4>
                  <p className="achv-card__detail">{featured.detail}</p>
                </div>
              </article>
            ))}

          {achievements
            .filter((a) => !a.highlight)
            .map((achievement, index) => (
              <article
                className="achv-card card reveal"
                style={{ "--reveal-delay": `${(index + 1) * 70}ms` }}
                key={achievement.id}
              >
                <span className="achv-card__icon achv-card__icon--plain" aria-hidden="true">
                  <AwardIcon name={achievement.icon} size={22} />
                </span>
                <div className="achv-card__text">
                  <h4 className="achv-card__title">{achievement.title}</h4>
                  <p className="achv-card__detail">{achievement.detail}</p>
                </div>
              </article>
            ))}
        </div>

        {/* ---------------- Research ---------------- */}
        <div className="research reveal">
          <p className="research__label">Published research papers</p>
          <div className="research__grid">
            {research.papers.map((paper) => (
              <article className="research-card card" key={paper.id}>
                <span className="research-card__icon" aria-hidden="true">
                  <FileText size={21} />
                </span>
                <div className="research-card__body">
                  <span className="research-card__tag">Published paper</span>
                  <h4 className="research-card__title">{paper.title}</h4>
                </div>
              </article>
            ))}
          </div>
          <p className="research__note">{research.note}</p>
        </div>
      </div>

      {/* ---------------- Large preview modal ---------------- */}
      {selected && (
        <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
