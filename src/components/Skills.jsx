import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Terminal,
  Workflow,
} from "lucide-react";
import { skillCategories } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import "./Skills.css";

const icons = {
  Code2,
  Layers,
  Database,
  Workflow,
  Terminal,
  BrainCircuit,
};

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="03 · Skills"
          title="Technical toolkit"
          sub="Organized by category — an honest picture of what I work with day to day."
          center
        />

        <div className="skills__grid">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <div
                className="skill-card card reveal"
                style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
                key={category.id}
              >
                <div className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden="true">
                    {Icon && <Icon size={21} />}
                  </span>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>

                <ul className="skill-card__list">
                  {category.skills.map((skill) => (
                    <li
                      className={`tag${skill.basic ? " tag--basic" : ""}`}
                      key={skill.name}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="skills__note reveal">
          Skills marked <span className="tag tag--basic">(Basic)</span> are at a
          foundational level — the rest I use confidently in real projects.
        </p>
      </div>
    </section>
  );
}
