import { useState } from "react";
import { ArrowUpRight, ExternalLink, FolderOpen, Github } from "lucide-react";
import { projectCategories, projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectModal, { projectIcons } from "./ProjectModal.jsx";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section className="section section--soft projects" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="02 · Projects"
          title="Featured work"
          sub="Real systems I designed and built — from full-stack platforms to AI-powered computer vision. Filter by area, then open a project for the full story."
        />

        {/* ---------------- Filter bar ---------------- */}
        <div
          className="projects__filters reveal"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.categories.includes(category)).length;

            return (
              <button
                key={category}
                className={`projects__filter${filter === category ? " is-active" : ""}`}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
                <span className="projects__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* ---------------- Card grid ---------------- */}
        <div className="projects__grid" key={filter}>
          {visible.map((project, index) => {
            const Icon = projectIcons[project.icon];
            const shownTech = project.tech.slice(0, 4);
            const extra = project.tech.length - shownTech.length;

            return (
              <article
                className="project-card card reveal"
                style={{ "--reveal-delay": `${index * 70}ms` }}
                key={project.id}
              >
                {/* Cover */}
                <div className={`project-card__cover pcover--${project.id}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="pcover__icon pcover__icon--card" aria-hidden="true">
                      {Icon && <Icon size={44} strokeWidth={1.6} />}
                    </span>
                  )}
                  <span className="project-card__category">
                    {project.categories[0]}
                  </span>
                </div>

                {/* Body */}
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>

                  <div className="project-card__tech">
                    {shownTech.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                    {extra > 0 && (
                      <span className="tag tag--more">+{extra}</span>
                    )}
                  </div>

                  <div className="project-card__footer">
                    <button
                      className="btn btn--ghost btn--sm"
                      onClick={() => setSelected(project)}
                    >
                      <FolderOpen size={15} aria-hidden="true" />
                      Details
                    </button>

                    <div className="project-card__links">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn icon-btn--sm"
                          aria-label={`${project.title} — GitHub repository`}
                          title="GitHub repository"
                        >
                          <Github size={17} aria-hidden="true" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn icon-btn--sm"
                          aria-label={`${project.title} — live demo`}
                          title="Live demo"
                        >
                          <ExternalLink size={17} aria-hidden="true" />
                        </a>
                      )}
                      <button
                        className="project-card__more"
                        onClick={() => setSelected(project)}
                      >
                        Read more
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        
      </div>

      {/* ---------------- Details modal ---------------- */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
