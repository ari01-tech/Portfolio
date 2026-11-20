import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { heroTech, profile, stats } from "../data/portfolio.js";
import "./Hero.css";

/* One line of the fake "profile file" shown in the code card. */
const codeLines = [
  { n: 1, html: '<span class="c-purple">const</span> <span class="c-blue">engineer</span> = {' },
  { n: 2, html: '&nbsp;&nbsp;name: <span class="c-green">"Ariam Al Hasani"</span>,' },
  { n: 3, html: '&nbsp;&nbsp;role: <span class="c-green">"Software Engineer"</span>,' },
  { n: 4, html: '&nbsp;&nbsp;location: <span class="c-green">"Muscat, Oman"</span>,' },
  { n: 5, html: '&nbsp;&nbsp;focus: [<span class="c-green">"full-stack"</span>, <span class="c-green">"AI"</span>, <span class="c-green">"computer vision"</span>],' },
  { n: 6, html: '&nbsp;&nbsp;shipQualityCode: <span class="c-orange">true</span>,' },
  { n: 7, html: '};' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Soft decorative glows + dot grid */}
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        {/* ------------ Left: copy ------------ */}
        <div className="hero__copy">
          <p className="hero__badge reveal">
            <span className="hero__pulse" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="hero__name reveal" style={{ "--reveal-delay": "60ms" }}>
            {profile.name}
          </h1>

          <p className="hero__title reveal" style={{ "--reveal-delay": "120ms" }}>
            <span className="hero__title-role">{profile.title}</span>
            <span className="hero__headline">
              Building <em>Intelligent Solutions</em> Through Software Engineering.
            </span>
          </p>

          <p className="hero__intro reveal" style={{ "--reveal-delay": "180ms" }}>
            {profile.intro}
          </p>

          <div
            className="hero__actions reveal"
            style={{ "--reveal-delay": "240ms" }}
          >
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              href={profile.cvPath}
              download="Ariam-Al-Hasani-CV.pdf"
              className="btn btn--ghost"
            >
              <Download size={17} aria-hidden="true" />
              Download My CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub profile: github.com/ari01-tech"
              title="GitHub — github.com/ari01-tech"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile of Ariam Al Hasani"
              title="LinkedIn — ariam-al-hasani"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>

          <ul
            className="hero__meta reveal"
            style={{ "--reveal-delay": "300ms" }}
          >
            <li>
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </li>
            <li>
              <a href={profile.emailHref}>
                <Mail size={15} aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref}>
                <Phone size={15} aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* ------------ Right: code card ------------ */}
        <div className="hero__visual reveal" style={{ "--reveal-delay": "200ms" }}>
          <div className="hero__glow" aria-hidden="true" />

          <div className="code-card" role="img" aria-label="Code card introducing Ariam Al Hasani">
            <div className="code-card__bar" aria-hidden="true">
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__file">engineer.js</span>
            </div>
            <pre className="code-card__body">
              {codeLines.map((line) => (
                <div className="code-card__line" key={line.n}>
                  <span className="code-card__num" aria-hidden="true">
                    {line.n}
                  </span>
                  <code dangerouslySetInnerHTML={{ __html: line.html }} />
                </div>
              ))}
            </pre>
          </div>

          {/* Floating tech chips */}
          <ul className="hero__chips" aria-hidden="true">
            {heroTech.map((tech, i) => (
              <li
                key={tech}
                className="hero__chip"
                style={{ "--i": i, "--float-delay": `${i * 0.9}s` }}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------ Stats strip ------------ */}
      <div className="container reveal" style={{ "--reveal-delay": "150ms" }}>
        <dl className="hero__stats">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-value">{stat.value}</dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
