import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import { education, experience } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import "./EducationExperience.css";

export default function EducationExperience() {
  return (
    <section className="section section--soft experience" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="04 · Education & Experience"
          title="My academic and professional journey"
          sub="A solid software engineering education plus hands-on professional training."
        />

        <div className="experience__grid">
          {/* ---------------- Education ---------------- */}
          <article className="exp-card card reveal">
            <div className="exp-card__top">
              <span className="exp-card__icon" aria-hidden="true">
                <GraduationCap size={22} />
              </span>
              <span className="exp-card__badge">
                {education.badge} · {education.date}
              </span>
            </div>

            <h3 className="exp-card__title">{education.degree}</h3>
            <p className="exp-card__org">{education.school}</p>
            <p className="exp-card__note">{education.note}</p>
          </article>

          {/* ---------------- Training ---------------- */}
          <article
            className="exp-card card reveal"
            style={{ "--reveal-delay": "130ms" }}
          >
            <div className="exp-card__top">
              <span className="exp-card__icon exp-card__icon--alt" aria-hidden="true">
                <Briefcase size={22} />
              </span>
              <span className="exp-card__badge exp-card__badge--blue">
                {experience.duration}
              </span>
            </div>

            <h3 className="exp-card__title">{experience.role}</h3>
            <p className="exp-card__org">{experience.org}</p>

            <ul className="exp-card__points">
              {experience.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
