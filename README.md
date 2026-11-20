# Ariam Al Hasani — Software Engineer Portfolio

A modern, responsive, single-page developer portfolio designed and developed using **React 18 and Vite 6**.

The portfolio features a clean, light-themed interface with navy and blue accents, subtle animations, and a consistent design system. It showcases my technical background, selected projects, professional experience, certifications, and achievements.

## Overview

The portfolio is organized into the following sections:

- **Hero** — Professional introduction and primary navigation.
- **About** — Background and professional profile.
- **Featured Projects** — Interactive project gallery with category filtering and detailed project modals.
- **Technical Skills** — Technologies, tools, and technical competencies.
- **Education & Experience** — Academic background and professional experience.
- **Certifications & Achievements** — Certificate gallery, awards, and research highlights.
- **Contact** — Professional contact information and social links.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI development |
| Vite 6 | Development server and build tooling |
| JavaScript (ES6+) | Application logic |
| CSS3 | Custom styling and responsive layouts |
| Lucide React | Interface icons |
| Google Fonts | Sora, Inter, and JetBrains Mono |

The project uses a custom CSS design system without relying on external CSS frameworks. No backend is required.

## Development & Build

### Prerequisites
- Node.js
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Production Preview

```bash
npm run preview
```

The production-ready output is generated in the `dist/` directory.

## Project Architecture

The application follows a modular React architecture, separating content, UI components, styling, and application logic.

```text
ariam-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── cv/
│   │   └── Ariam-Al-Hasani-CV.pdf
│   ├── certificates/
│   └── images/
│       └── projects/
├── docs/
│   └── USER_MANUAL.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   ├── portfolio.js
    │   └── certificates.js
    ├── hooks/
    │   └── useReveal.js
    ├── styles/
    │   └── global.css
    └── components/
        ├── Navbar/
        ├── Hero/
        ├── About/
        ├── Projects/
        ├── ProjectModal/
        ├── Skills/
        ├── EducationExperience/
        ├── Certifications/
        ├── CertificateModal/
        ├── Contact/
        ├── Footer/
        └── SectionHeading/
```

## Content Management & Configuration

Portfolio content is maintained separately from presentation components to keep the application modular and maintainable.

| Resource | Location |
|---|---|
| Portfolio information, projects, skills, and links | `src/data/portfolio.js` |
| Certification records | `src/data/certificates.js` |
| CV document | `public/cv/` |
| Certificate assets | `public/certificates/` |
| Project screenshots | `public/images/projects/` |
| Global styles and design tokens | `src/styles/global.css` |
| Page metadata and SEO | `index.html` |
| UI components | `src/components/` |

### Project Configuration

Project entries are defined in `src/data/portfolio.js` using a structured data model.

```js
{
  id: "my-new-app",
  title: "My New App",
  tagline: "A brief overview of the project.",
  description: "Detailed project description.",
  highlights: ["Key feature", "Technical implementation"],
  tech: ["React", "Node.js"],
  categories: ["Full-Stack"],
  image: "images/projects/my-app.jpg",
  repoUrl: "https://github.com/username/my-app",
  demoUrl: "https://example.com",
}
```

Project cards support technology labels, category filtering, detailed project views, GitHub repository links, and live demonstrations when available.

### Certification Configuration

Certification records are maintained in `src/data/certificates.js`, with supporting documents stored in `public/certificates/`.

```js
{
  id: "my-certificate",
  name: "Certificate Title",
  organization: "Issuing Organization",
  issueDate: "Month 2026",
  category: "Technical Certifications",
  file: "certificates/my-certificate.pdf",
}
```

The certification gallery supports category filtering, document previews, and certificate downloads.

## Design & User Experience

- Fully responsive layouts across desktop, tablet, and mobile devices.
- Consistent typography and color system.
- Reusable React components.
- Scroll-reveal animations.
- Interactive project and certification galleries.
- Accessible navigation and clear content hierarchy.
- Optimized production builds through Vite.


## Author

**Ariam Al Hasani**

Software Engineer

[GitHub](https://github.com/ari01-tech)

---

Developed with React, JavaScript, and CSS3.