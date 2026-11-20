import {
  BrainCircuit,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  ScanFace,
  Server,
  Workflow,
} from "lucide-react";
import { aboutParagraphs, education, interests } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import "./About.css";

/* Central icon registry — one place to map icon names used in the data file */
const icons = {
  Workflow,
  Layers,
  Server,
  BrainCircuit,
  Cpu,
  ScanFace,
  Database,
};

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="01 · About"
          title="A software engineer who builds things that work"
          sub="From full-stack platforms to computer-vision systems — a quick look at who I am and what drives my work."
        />

        <div className="about__grid">
          {/* ---------- Left: story ---------- */}
          <div className="about__story reveal">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="about__paragraph">
                {paragraph}
              </p>
            ))}

            {/* Education mini-card */}
            <div className="about__edu card">
              <div className="about__edu-icon" aria-hidden="true">
                <GraduationCap size={24} />
              </div>
              <div className="about__edu-body">
                <p className="about__edu-degree">{education.degree}</p>
                <p className="about__edu-school">{education.school}</p>
              </div>
              <span className="about__edu-badge">
                {education.badge} · {education.date}
              </span>
            </div>
          </div>

          {/* ---------- Right: interests ---------- */}
          <div className="about__interests reveal" style={{ "--reveal-delay": "140ms" }}>
            <p className="about__interests-title">What I love working on</p>
            <ul className="about__interest-list">
              {interests.map((interest) => {
                const Icon = icons[interest.icon];
                return (
                  <li className="about__interest card" key={interest.label}>
                    <span className="about__interest-icon" aria-hidden="true">
                      {Icon && <Icon size={19} />}
                    </span>
                    {interest.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
