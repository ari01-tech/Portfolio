# Ariam Al Hasani — Software Engineer Portfolio

A modern, fully responsive, single-page developer portfolio built with **React + Vite**.
Light theme, navy & blue accents, subtle animations, and a clean design system.

**Live sections:** Hero · About · Featured Projects (filterable + detail modal) · Technical Skills · Education & Experience · Certifications & Achievements (certificate gallery + awards & research) · Contact

---

## Quick Start

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the development server
npm run dev

# 3. Open the site
# → http://localhost:3000
```

Other commands:

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Starts the live-reload development server       |
| `npm run build`   | Creates the production build in `dist/`         |
| `npm run preview` | Serves the production build locally on port 3000 |

---

## Where Things Live

| I want to change...                | Edit this                                                  |
| ---------------------------------- | ---------------------------------------------------------- |
| Projects, skills, bio, links, CV   | `src/data/portfolio.js` (the single source of truth)        |
| Certificates (add / edit / remove) | `src/data/certificates.js` + `public/certificates/`         |
| My CV PDF                          | `public/cv/Ariam-Al-Hasani-CV.pdf`                          |
| Project screenshots                | `public/images/projects/`                                   |
| Page title & SEO description       | `index.html`                                                |
| Colors, fonts, design tokens       | `src/styles/global.css`                                     |
| Section layout & markup            | `src/components/*.jsx`                                      |

**The full beginner guide — running, editing, GitHub, and Vercel deployment — is in
[`docs/USER_MANUAL.md`](docs/USER_MANUAL.md).**

---

## Tech Stack

- React 18 + Vite 6 (plain JavaScript, no backend required)
- Hand-written CSS3 with a design-token system (no CSS framework)
- [Lucide React](https://lucide.dev) icons
- Google Fonts: Sora (headings), Inter (body), JetBrains Mono (tags & code)

---

## Project Structure

```
ariam-portfolio/
├── index.html                  # Page shell, SEO meta tags, fonts
├── package.json                # Dependencies and scripts
├── vite.config.js              # Build config (relative base → deploys anywhere)
├── public/                     # Files served as-is (no processing)
│   ├── favicon.svg
│   ├── cv/Ariam-Al-Hasani-CV.pdf
│   ├── certificates/           # Your certificate files go here (PDF/JPG/PNG)
│   └── images/projects/        # Your project screenshots go here
├── docs/USER_MANUAL.md         # Beginner-friendly management guide
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Section order lives here
    ├── data/portfolio.js       # ★ ALL site content — edit this file
    ├── data/certificates.js    # ★ Certificate gallery content — edit this file
    ├── hooks/useReveal.js      # Scroll-reveal animation hook
    ├── styles/global.css       # Design system (colors, buttons, cards)
    └── components/             # One folder per section + its CSS
        ├── Navbar / Hero / About / Projects / ProjectModal
        ├── Skills / EducationExperience / Certifications / CertificateModal
        └── Contact / Footer / SectionHeading
```

---

## Adding a Project in 30 Seconds

Open `src/data/portfolio.js`, copy any block inside `projects`, and edit it:

```js
{
  id: "my-new-app",
  title: "My New App — What It Does",
  tagline: "One impressive sentence about the project.",
  description: "The full story shown in the details modal.",
  highlights: ["What it does", "How you built it"],
  tech: ["React", "Node.js"],
  categories: ["Full-Stack"],
  image: null,                    // or "images/projects/my-app.jpg"
  repoUrl: null,                  // or "https://github.com/ari01-tech/my-app"
  demoUrl: null,                  // or a live URL when deployed
},
```

Buttons for GitHub / Live Demo appear automatically **only** when a real URL is set —
nothing is ever faked.

---

## Adding a Certificate in 30 Seconds

The **Certifications & Achievements** section works the same way:

1. Drop the certificate file (PDF, JPG, JPEG, or PNG) into `public/certificates/`.
2. Open `src/data/certificates.js`, copy any block inside `certificates`, and edit it:

```js
{
  id: "my-certificate",
  name: "My Certificate Title",
  organization: "Issuing Organization",
  issueDate: "Month 2026",
  category: "Technical Certifications",
  file: "certificates/my-certificate.pdf",
},
```

3. Save. The card, its category filter, the large **View Certificate** preview, and the
   **Download Certificate** button all appear automatically.

The entries that ship with the project are clearly-labeled SAMPLE placeholders — replace
them with your real certificates. Full walkthrough (upload, replace, delete, publish):
[`docs/USER_MANUAL.md`](docs/USER_MANUAL.md), Chapter 4.

## Deployment

The production build is fully static, so it deploys free on Vercel, Netlify, or
GitHub Pages. Step-by-step Vercel instructions (with custom-domain setup) are in
`docs/USER_MANUAL.md`, Chapter 7.

---

© Ariam Al Hasani · Built with React & Vite
