# Portfolio User Manual — Ariam Al Hasani

**A complete beginner's guide to running, editing, publishing, and maintaining your React portfolio website.**

Version 1.2 · Prepared for the Ariam Al Hasani portfolio project (React + Vite 6)

---

## About This Manual

This manual assumes you have **never deployed a website before**. Every step includes the exact commands to type, the exact files to open, and full code examples taken directly from *your* project — not generic examples.

**How to read this manual:**

- Text inside a gray code box is a **command** — type it exactly as shown in your terminal (also called "command prompt", "Terminal", "Git Bash", or "PowerShell" depending on your system).
- **File paths** like `src/data/portfolio.js` are files inside your project folder.
- Notes marked **Important** prevent the most common beginner mistakes.

**Table of Contents**

1. [Chapter 1 — Understanding the Project](#chapter-1--understanding-the-project)
2. [Chapter 2 — Running the Website Locally](#chapter-2--running-the-website-locally)
3. [Chapter 3 — Adding and Editing Projects](#chapter-3--adding-and-editing-projects)
4. [Chapter 4 — Managing Certificates](#chapter-4--managing-certificates)
5. [Chapter 5 — Uploading Your Projects to GitHub](#chapter-5--uploading-your-projects-to-github)
6. [Chapter 6 — Adding Your CV and Updating Personal Information](#chapter-6--adding-your-cv-and-updating-personal-information)
7. [Chapter 7 — Publishing Your Portfolio Online (Vercel)](#chapter-7--publishing-your-portfolio-online-vercel)
8. [Chapter 8 — Troubleshooting](#chapter-8--troubleshooting)

---

# Chapter 1 — Understanding the Project

## 1.1 The big picture

Your portfolio is a **single-page application (SPA)**: one HTML page whose content is rendered by JavaScript. There is **no backend, no database, and no server code** — the entire website is a folder of files that any static host (Vercel, Netlify, GitHub Pages) can serve for free.

The most important thing to understand:

> **Almost everything visitors see is controlled by ONE file: `src/data/portfolio.js`.**
> You can rename projects, change your phone number, add skills, and attach screenshots — all without touching any other file.

## 1.2 Every folder and file explained

```
ariam-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.cjs
├── .gitignore
├── README.md
├── docs/
│   └── USER_MANUAL.md          ← this manual
├── public/                     ← files copied to the site EXACTLY as they are
│   ├── favicon.svg
│   ├── cv/
│   │   └── Ariam-Al-Hasani-CV.pdf
│   ├── certificates/           ← your certificate files go here (PDF / JPG / PNG)
│   └── images/
│       └── projects/           ← your project screenshots go here
└── src/                        ← source code (React builds the site from this)
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   ├── portfolio.js        ← ★ THE CONTROL ROOM — all your content
    │   └── certificates.js     ← ★ the certificate gallery — one block per certificate
    ├── hooks/
    │   └── useReveal.js
    ├── styles/
    │   └── global.css
    └── components/
        ├── Navbar.jsx + Navbar.css
        ├── Hero.jsx + Hero.css
        ├── About.jsx + About.css
        ├── Projects.jsx + Projects.css
        ├── ProjectModal.jsx
        ├── Skills.jsx + Skills.css
        ├── EducationExperience.jsx + EducationExperience.css
        ├── Certifications.jsx + Certifications.css   ← certificate gallery
        ├── CertificateModal.jsx                      ← large certificate preview
        ├── Contact.jsx + Contact.css
        ├── Footer.jsx + Footer.css
        └── SectionHeading.jsx
```

| File | What it is | Do you need to touch it? |
| --- | --- | --- |
| `index.html` | The single page shell. Contains the browser tab title and the SEO description that Google and LinkedIn read. | Only to change the SEO text (Chapter 6.4). |
| `package.json` | The project's ingredient list — which libraries are used and which commands exist (`dev`, `build`, `preview`). | No. |
| `vite.config.js` | Build configuration. `base: "./"` makes the built site work on any host. | No. |
| `postcss.config.cjs` | An empty CSS config that keeps the build independent from other projects on your machine. | No. |
| `.gitignore` | Tells GitHub which files NOT to upload (`node_modules`, the `dist` build folder). | No. |
| `public/` | Files served exactly as they are: your CV PDF, certificate files, screenshots, favicon. Anything here is reachable by its path, e.g. `cv/Ariam-Al-Hasani-CV.pdf`. | Yes — you put CV, certificates, and screenshots here. |
| `src/main.jsx` | The first line of JavaScript: it mounts React into the page. | No. |
| `src/App.jsx` | The page skeleton — lists the sections in display order (Hero → About → Projects → Skills → Experience → Certifications → Contact). | Only to reorder sections (advanced). |
| `src/data/portfolio.js` | **All content**: your name, links, six projects, skills, education, training, awards, research papers. | **Yes — this is your file.** |
| `src/data/certificates.js` | The certificate gallery: every certificate's name, organization, date, category, and file. | **Yes — for certificates (Chapter 4).** |
| `src/hooks/useReveal.js` | The scroll animation engine — elements gently fade in as you scroll. | No. |
| `src/styles/global.css` | The design system: every color, font, button style, and card style as reusable "tokens". | Only to change colors/fonts (advanced). |
| `src/components/*.jsx` | One building block per section. Each `.jsx` file is the structure; its matching `.css` file is the styling. | Rarely — only for layout redesigns. |

## 1.3 How the React components work (in plain language)

Think of React components as **LEGO bricks**:

1. `App.jsx` stacks the bricks in order: `<Hero />`, `<About />`, `<Projects />`, and so on. Each brick fills itself from the data file.
2. Example: `Projects.jsx` reads the `projects` list from `src/data/portfolio.js` and renders one card per project with a `map()` loop — that is why the cards always match the data file, even after you add ten more projects.
3. When you save a file, **Vite hot-reloads** the browser automatically (usually under one second). You never need to refresh manually while developing.

Data flow, in one picture:

```
src/data/portfolio.js  ──►  components (Navbar, Hero, Projects, ...)
         │                            │
         └── imported by every section  └── rendered into the page
```

## 1.4 Where the main website content is stored

| Content | Location inside `src/data/portfolio.js` |
| --- | --- |
| Name, title, location, phone, email, LinkedIn, GitHub | `profile` (top of the file) |
| The four highlight numbers under the hero | `stats` |
| Your professional introduction (About section) | `aboutParagraphs` |
| The seven interest chips | `interests` |
| The six projects | `projects` (Chapter 3 covers this in depth) |
| Skill categories and chips | `skillCategories` |
| Degree and university | `education` |
| OCMT training and its five responsibilities | `experience` |
| NASA award, honor list, competitions | `achievements` |
| The two published papers | `research` |
| The certificate gallery | `src/data/certificates.js` (Chapter 4 covers this in depth) |
| Your CV file path | `profile.cvPath` (default: `cv/Ariam-Al-Hasani-CV.pdf`) |

---

# Chapter 2 — Running the Website Locally

## 2.1 Install Node.js (one time)

Node.js runs the development tools and the Vite build system.

1. Go to **https://nodejs.org**.
2. Download the **LTS** version (the green button, left side) for Windows or macOS.
3. Run the installer. Accept the defaults — importantly, keep the option **"Automatically install the necessary tools"** checked if it appears (Windows).
4. Verify it worked. Open a **new** terminal and type:

```bash
node -v
```

You should see something like `v22.14.0` (any version 20 or higher is fine). Also check npm (comes with Node):

```bash
npm -v
```

**Important:** If you get "command not found" or "not recognized", close the terminal completely and open a new one. If it still fails, restart your computer — Windows sometimes needs this after the first install.

## 2.2 Install VS Code (one time)

Visual Studio Code is the free code editor recommended for this project.

1. Go to **https://code.visualstudio.com** and download it.
2. Install it with default options. On Windows, keep **"Add to PATH"** and **"Add 'Open with Code' context menu"** checked — they make the next steps easier.
3. Recommended (optional) extensions: click the Extensions icon in the left sidebar and search for **Prettier** (auto-formatting) and **ES7+ React snippets**. Nothing else is required.

## 2.3 Open the project

1. Unzip `ariam-portfolio.zip` anywhere you like, e.g. `Documents\projects\ariam-portfolio`.
   - **Important:** Make sure the folder you open in VS Code is the one that directly contains `package.json` — not the folder above it.
2. In VS Code: **File → Open Folder…** and select the `ariam-portfolio` folder.
3. Open the built-in terminal: **View → Terminal** (shortcut **Ctrl + `** on Windows/Linux, **⌃ + `** on Mac). The prompt should end with `ariam-portfolio`. If it does not, navigate there:

```bash
cd path/to/ariam-portfolio
```

## 2.4 Install the dependencies (one time per copy)

This downloads React, Vite, and the icon library into a `node_modules` folder (about 60 MB — it exists only on your machine and is never uploaded to GitHub).

```bash
npm install
```

Expected result: a progress bar, then `added 6x packages`. Takes 1–3 minutes depending on your internet speed.

## 2.5 Start the development server and preview the site

```bash
npm run dev
```

Expected result:

```
VITE v6.4.x  ready in xxx ms
➜  Local:   http://localhost:3000/
```

Open **http://localhost:3000** in your browser (Ctrl/Cmd + click the link in the terminal also works). The website is now running on your machine.

**While the server is running:**

- Edit any file (try changing your name in `src/data/portfolio.js`) and save — the browser updates instantly.
- Stop the server: click inside the terminal and press **Ctrl + C**. (To run it again later: `npm run dev`.)

## 2.6 Production build (what the world will see)

The development server is for editing. The real website is the optimized build:

```bash
npm run build     # creates the dist/ folder — the deployable website
npm run preview   # serves the built version at http://localhost:3000
```

`npm run preview` shows exactly what visitors will get after you deploy. If it looks right here, it will look right on Vercel.

---

# Chapter 3 — Adding and Editing Projects

Every project lives in the `projects` list in `src/data/portfolio.js`. One "block" = one project card. This chapter walks through every field.

## 3.1 Understand one project block

Here is the Aleef block exactly as it appears in your file:

```js
{
  id: "aleef",
  title: "Aleef — Full-Stack Web Application",
  tagline:
    "A full-stack platform with structured data, a design-first workflow, and containerized delivery.",
  description:
    "Aleef is a full-stack web application built with React on the front end and Node.js on the back end, backed by MongoDB. ...",
  highlights: [
    "Designed the complete UI/UX in Figma before development started",
    "Structured MongoDB collections for clean, scalable data organization",
    "React front end with a Node.js backend",
    "Functionality tested across core user flows",
    "Containerized with Docker and taken through deployment",
  ],
  tech: ["React", "Node.js", "MongoDB", "Docker", "Figma"],
  categories: ["Full-Stack", "Web"],
  image: null,
  repoUrl: null,
  demoUrl: null,
  icon: "Container",
  featured: true,
},
```

| Field | What it does |
| --- | --- |
| `id` | Internal name. Must be **unique**, lowercase, no spaces. Used to pick the cover gradient. |
| `title` | The card and modal heading. |
| `tagline` | The one-line summary on the card. Keep it to one sentence. |
| `description` | The full paragraph shown when a visitor clicks **Details**. |
| `highlights` | Bullet list in the details modal. 2–5 items look best. |
| `tech` | Technology tags. First 4 show on the card; all show in the modal. |
| `categories` | Which filter buttons catch this project. Choose from: `"Full-Stack"`, `"Web"`, `"AI & Machine Learning"`, `"Computer Vision"`. |
| `image` | Screenshot path, or `null` for the automatic gradient cover. |
| `repoUrl` | Full GitHub repository URL — the GitHub button appears **only** when this is a real URL. |
| `demoUrl` | Full live-demo URL — same rule. |
| `icon` | Fallback icon name for the gradient cover: `"Container"`, `"ScanFace"`, `"Hand"`, `"CloudSun"`, `"Globe"`, or `"Newspaper"`. |
| `featured` | `true` = shown in the featured order at the top. |

## 3.2 Add a new project (full walkthrough)

1. Open `src/data/portfolio.js` and scroll to `export const projects = [ ... ]`.
2. Click at the end of the last block (after its closing `},`) and press Enter.
3. Paste a new block and edit every field:

```js
{
  id: "graduation-project",
  title: "My Graduation Project — AI Attendance System",
  tagline: "Face recognition attendance tracking built for classrooms.",
  description:
    "Describe what the system does, how it works, and what you personally built. Two to five sentences is perfect.",
  highlights: [
    "What it does",
    "How you built it",
    "What makes it special",
  ],
  tech: ["Python", "OpenCV", "Flask"],
  categories: ["AI & Machine Learning", "Computer Vision"],
  image: "images/projects/attendance.jpg",
  repoUrl: "https://github.com/ari01-tech/attendance-system",
  demoUrl: null,
  icon: "ScanFace",
  featured: true,
},
```

4. Save (Ctrl + S). If `npm run dev` is running, the card appears instantly.
5. Check the browser: the new card should appear, and its category should appear inside the matching filter button.

**Important:** Keep the comma placement exactly like the example — every block ends with `},` and the last block in the list may end with `},` too (a trailing comma is allowed in JavaScript).

## 3.3 Edit an existing project

Change any text between the quotes. Examples:

- Change the title: `title: "Aleef — University Pet Care Platform",`
- Change the description: edit the text after `description:` (keep it inside the same quotes; if your text contains an apostrophe like `Oman's`, that is fine — JavaScript strings in this file use double quotes `"`).
- Change tags: edit the `tech` list, e.g. `tech: ["React", "Node.js", "MongoDB"],`.

## 3.4 Upload project screenshots and where to put images

1. Prepare a screenshot — JPG or PNG, roughly **1200 × 800** pixels (landscape). Crop the browser frame so it looks clean.
2. Copy the file into **`public/images/projects/`** (this folder already exists with a README inside).
3. Set the `image` field to the path **without** `public/` and **without** a leading slash:

```js
image: "images/projects/aleef.jpg",     // correct
image: "/images/projects/aleef.jpg",    // wrong — breaks on some hosts
image: "images/aleef.jpg",              // wrong — wrong folder
```

4. **Important:** File names are case-sensitive on real servers. `Aleef.jpg` and `aleef.jpg` are different files. Lowercase-with-dashes is the safest convention.

While `image` is `null`, the card shows a designed gradient cover with an icon — the site never looks broken while you gather screenshots.

## 3.5 Connect a GitHub repository to a project card

1. Push the project to GitHub (Chapter 5) and copy the repository URL, e.g. `https://github.com/ari01-tech/smart-gate-system`.
2. Set it in the project block:

```js
repoUrl: "https://github.com/ari01-tech/smart-gate-system",
```

3. Save — a **View on GitHub** button now appears in the card footer and the details modal. Buttons never appear for `null`, so nothing fake is ever shown to recruiters.

## 3.6 Add a Live Demo URL

Same pattern — any deployed URL works (Vercel, Streamlit, Hugging Face Spaces…):

```js
demoUrl: "https://smart-gate-system.vercel.app",
```

The **Live Demo** button appears automatically. Until you have a real deployment, leave it `null`.

## 3.7 Remove a project

Delete the whole block — from the opening `{` to its closing `},` — and save. The card, its tags, and its modal entry all disappear. Nothing else needs cleaning up.

## 3.8 Reorder projects

Projects render top-to-bottom in file order. Move a whole block (cut and paste) higher in the `projects` list to make it appear first. The four cards marked `featured: true` are the ones most worth showing first.

---

# Chapter 4 — Managing Certificates

The **Certifications & Achievements** section shows a gallery of certificate cards. Visitors can filter the gallery by category, click any certificate (or its **View Certificate** button) to open a large preview, and save a copy with **Download Certificate**.

Everything in that gallery is controlled by exactly two things — you never touch a component or a CSS file:

| What | Where |
| --- | --- |
| The certificate **files** (PDF, JPG, JPEG, PNG) | `public/certificates/` |
| The certificate **information** (name, organization, date, category) | `src/data/certificates.js` |

**About the samples that ship with the project:** the six entries currently in the gallery are clearly-labeled placeholders — each name says "Sample … (Replace Me)", the organization is "Issuing Organization (Placeholder)", the date is "Month 20XX", and the files themselves carry a SAMPLE watermark. They exist so that every filter, preview, and download works out of the box. Replace or delete them as soon as you add your real certificates.

## 4.1 Upload your certificate file

1. Export or scan your certificate as **PDF, JPG, JPEG, or PNG**.
   - A clear photo is fine — crop it so only the certificate is visible and keep the orientation upright (landscape certificates look best).
   - Keep the file below ~5 MB so the page loads fast.
2. Copy the file into the folder **`public/certificates/`** (it already exists, with the six sample files inside).
3. Name it lowercase-with-dashes, e.g. `nasa-space-apps-2025.pdf` or `python-data-science-course.jpg`. File names are case-sensitive on real servers, so `Certificate.pdf` and `certificate.pdf` are two different files.

## 4.2 Add its information to certificates.js

Open `src/data/certificates.js`. Every certificate is one `{ ... }` block inside the `certificates` list. Copy an existing block, paste it where you want it (the first block is shown first), and edit every value:

```js
{
  id: "nasa-space-apps",
  name: "NASA Space Apps Challenge — Winner Certificate",
  organization: "NASA Space Apps",
  issueDate: "October 2025",
  category: "Competitions & Awards",
  file: "certificates/nasa-space-apps-2025.pdf",
},
```

Field-by-field rules:

| Field | Rule |
| --- | --- |
| `id` | Unique, lowercase, no spaces — used internally by React as the card key. |
| `name` | The card title. Use the exact title printed on the certificate. |
| `organization` | Who issued it — university, platform, competition organizer. |
| `issueDate` | A small label on the card; "October 2025" style reads best. |
| `category` | Must be one of the six categories in the list `certificateCategories` — copy-paste the exact text, including capitals and the `&`. |
| `file` | The path **relative to `public/`**, without a leading slash and without `public/`: `certificates/your-file.pdf`. |

The six categories are: **Technical Certifications · AI & Machine Learning · Programming & Software Development · Workshops & Training · Competitions & Awards · Other Certificates**.

> To add your own category: add a line to `certificateCategories` at the top of the same file, e.g. `"Language Certificates",` — a new filter button appears automatically. Just make sure every certificate's `category` matches one of the entries exactly.

Save the file (Ctrl + S). With `npm run dev` running, the new card appears in the gallery instantly.

## 4.3 How it displays automatically

There is nothing else to do. When the page loads, `Certifications.jsx` reads the list in `certificates.js` and, for every entry, renders:

- a **card** — image files (JPG/JPEG/PNG) show a real thumbnail of the certificate; PDF files get a clean navy "PDF Certificate" tile. The format badge (PDF/JPG/PNG), your category chip, and the issue date are generated automatically.
- a **View Certificate** button — opens the large preview window. Images are shown directly; PDFs are rendered in an embedded viewer, with an **Open in new tab** button as a safe fallback for browsers that block embedded PDFs.
- a **Download Certificate** button — saves a copy, with a clean file name generated from the certificate name.
- the **filter counts** — the little number on each category button updates by itself, and an empty category shows a friendly "No certificates yet" message instead of a broken layout.

## 4.4 Replace an existing certificate

Two typical situations:

**Same certificate, better file** (sharper scan, smaller size): save the new file **over the old one using the exact same file name** and refresh the browser. Nothing else changes. If the dev server was running while you copied the file, restart it (Ctrl + C → `npm run dev`).

**A different certificate:** edit the existing block's fields (`name`, `organization`, `issueDate`, `category`, `file`) — or delete the block and add a fresh one (4.5). Editing the block keeps its position in the gallery.

## 4.5 Delete a certificate

1. Remove its block from `src/data/certificates.js` — from the opening `{` to its closing `},`.
2. Optionally delete the file from `public/certificates/` as well, to keep the project tidy.
3. The card, its filter count, and its preview disappear automatically.

**Important:** after deleting a block, the remaining blocks must still be separated by commas exactly as before. If the whole gallery vanishes, you almost certainly broke a comma — undo and re-check.

## 4.6 Publish the changes to GitHub and update the live website

Certificates are ordinary files plus one data file, so publishing uses the normal Git flow (first-time setup in Chapter 5, deployment in Chapter 7):

```bash
git add .
git commit -m "Add competition certificate to gallery"
git push
```

Vercel sees the push, rebuilds automatically, and the live gallery is updated in about a minute. Replacing or deleting certificates uses the same three commands.

Final checklist for every new certificate:

- [ ] File inside `public/certificates/` (PDF, JPG, JPEG, or PNG)
- [ ] Block added in `src/data/certificates.js` with a unique `id`
- [ ] `category` copied exactly from the allowed category list
- [ ] Card, filter count, preview, and download all tested at `http://localhost:3000`
- [ ] Committed and pushed → live on Vercel

---

# Chapter 5 — Uploading Your Projects to GitHub

You will use GitHub twice: once for the **portfolio website itself**, and once for each **individual project**. The steps are identical.

## 5.1 Create the GitHub account (if needed)

1. Go to **https://github.com** and click **Sign up**.
2. Choose a professional username — recruiters will see it. Yours is already `ari01-tech`.
3. Verify your email address.

## 5.2 Create a repository for the portfolio

1. While logged in, click the **+** icon (top-right) → **New repository**.
2. Fill it in exactly like this:

   | Field | Value |
   | --- | --- |
   | Repository name | `portfolio` (or `ariam-portfolio`) |
   | Description | `Personal portfolio website — React + Vite` |
   | Visibility | **Public** (recruiters can browse it; private repos cannot be linked on cards) |
   | Add a README file | **Leave unchecked** — your project already has one |

3. Click **Create repository**. GitHub now shows a page with a "Quick setup" URL — keep it open.

## 5.3 Upload the portfolio with Git commands (recommended)

Install Git once from **https://git-scm.com/downloads** (default options are fine), then in the VS Code terminal, inside the `ariam-portfolio` folder:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/ari01-tech/portfolio.git
git push -u origin main
```

When a login window appears, sign in with GitHub in the browser popup (this is the easiest path on Windows). If the terminal asks for a password, GitHub no longer accepts account passwords — you need a **Personal Access Token**:

1. GitHub → click your avatar → **Settings** → **Developer settings** (bottom of the left sidebar) → **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**.
2. Give it a name like `portfolio-laptop`, check the **repo** scope, generate, and copy the long token.
3. Paste the token into the terminal password prompt (it will be invisible while typing — that is normal).

Refresh the repository page on GitHub — all your files should now be visible.

> Tip: the `node_modules` and `dist` folders will NOT be uploaded because `.gitignore` already excludes them. That is correct and desirable.

**Alternative without any commands:** on the empty repository page click **"uploading an existing file"**, drag the *contents* of your `ariam-portfolio` folder (not the outer zip), and click **Commit changes**. Slower for future updates, but works without Git.

## 5.4 Upload each individual project repository

For every project you want to link from a card (e.g. Smart Gate System):

1. Create a new empty repository named after the project, e.g. `smart-gate-system` (public, no README).
2. In a terminal, go **inside that project's own folder** and run the same six commands:

```bash
cd path/to/smart-gate-system
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ari01-tech/smart-gate-system.git
git push -u origin main
```

3. Repeat per project. A good habit: include a small `README.md` in each project repo describing what it does and how to run it — recruiters read these.

**Important:** Never upload a project *inside* the portfolio repository. One repository = one project. This keeps the portfolio repo clean and lets each card link to a dedicated repo.

## 5.5 Copy repository URLs and connect them to cards

1. Open the repository on GitHub.
2. Click the green **Code** button → copy the HTTPS URL, e.g. `https://github.com/ari01-tech/smart-gate-system.git`. Remove the trailing `.git` — the card link should be `https://github.com/ari01-tech/smart-gate-system`.
3. Paste it into `repoUrl` in `src/data/portfolio.js` (Chapter 3.5) and save.

## 5.6 Keep your repositories organized

- Name repositories in lowercase with dashes: `smart-gate-system`, `dryad-drought-detection`.
- Add a one-line description to every repository (shown next to its name).
- Pin your best repositories: your profile page → **Customize your pins**.
- Add topics on each repo page (e.g. `python`, `opencv`, `react`) — this is how GitHub search finds you.
- Consider a profile README: create a repository with the exact same name as your username (`ari01-tech/ari01-tech`), add a README, and it renders on your profile front page.

---

# Chapter 6 — Adding Your CV and Updating Personal Information

## 6.1 Replace the CV PDF

The **Download CV** buttons (navbar, hero, contact) all point to one file:

```
public/cv/Ariam-Al-Hasani-CV.pdf
```

The project ships with a starter CV generated from your portfolio information, so the button works from day one. To use your own designed CV:

1. Export your CV as a PDF.
2. Name the file exactly `Ariam-Al-Hasani-CV.pdf`.
3. Replace the file inside `public/cv/` (delete the old one, drop yours in).
4. Done — no code change needed, because the path stays the same.

If you prefer to keep a different file name, update the path in `src/data/portfolio.js`:

```js
cvPath: "cv/My-Newest-CV.pdf",
```

**Important:** After adding or replacing files in `public/`, restart the dev server (Ctrl + C, then `npm run dev`) so Vite picks them up.

## 6.2 Update your phone number and email

Open `src/data/portfolio.js` and edit the `profile` object at the top:

```js
phone: "+968 9452 7894",              // shown as text
phoneHref: "tel:+96894527894",        // what the click dials — digits only
email: "aryamalhsny4@gmail.com",      // shown as text
emailHref: "mailto:aryamalhsny4@gmail.com",
```

Note the two fields per item: `phone` is what people read, `phoneHref` is what the browser does on click. Keep them consistent — no spaces inside `tel:` links.

## 6.3 Update LinkedIn and GitHub

Same object:

```js
linkedin: "https://linkedin.com/in/ariam-al-hasani-331275389",
github: "https://github.com/ari01-tech",
```

These flow into the hero buttons, the contact cards, and the footer automatically — you change them in one place only.

## 6.4 Change your professional introduction and headline

- The hero headline text lives in `Hero.jsx` (it is styled in two colored parts, so it stays in the component): `src/components/Hero.jsx`, look for the `hero__headline` span.
- The paragraph under it (`profile.intro`) and the three About paragraphs (`aboutParagraphs`) live in `src/data/portfolio.js` — edit the text freely.
- **SEO text** (what Google shows in search results) is in `index.html`:

```html
<title>Ariam Al Hasani | Software Engineer — Portfolio</title>
<meta name="description" content="Portfolio of Ariam Al Hasani, a Software Engineer based in Oman, ..." />
```

Update the `<meta name="description">` whenever your focus changes — recruiters do read search snippets.

## 6.5 Update location, skills, education, training, awards

All in `src/data/portfolio.js`:

- Location: `profile.location`
- Skills: edit `skillCategories` — add `{ name: "FastAPI" }` to a list, or mark basics with `{ name: "Rust (Basic)", basic: true }`
- Degree/university: `education`
- Training bullets: `experience.points`
- Awards: `achievements` (the NASA entry has `highlight: true` which gives it the big gradient card — keep exactly one highlighted entry)
- Papers: `research.papers`

---

# Chapter 7 — Publishing Your Portfolio Online (Vercel)

Vercel is free, takes about five minutes, and gives you a public HTTPS URL that you can put on your CV and LinkedIn.

## 7.1 Put the portfolio on GitHub first

Vercel deploys from a GitHub repository, so complete **Chapter 5.2 and 5.3** first. When your code is visible on `github.com/ari01-tech/portfolio`, continue.

## 7.2 Create a Vercel account and connect GitHub

1. Go to **https://vercel.com** → **Sign Up** → choose **Continue with GitHub**.
2. Authorize Vercel to access your GitHub account. You can grant access to all repositories (simplest) or only the `portfolio` repo.

## 7.3 Import the portfolio repository

1. On the Vercel dashboard click **Add New… → Project**.
2. Find `portfolio` in the repository list and click **Import**.

## 7.4 Configure the build settings

Vercel detects Vite automatically. Verify it looks like this (it normally pre-fills):

| Setting | Value |
| --- | --- |
| Framework Preset | **Vite** |
| Build Command | `npm run build` (or leave the default `npm run build`) |
| Output Directory | `dist` |
| Install Command | `npm install` |

No environment variables are needed — this project has none.

## 7.5 Deploy

Click **Deploy** and wait about a minute. Vercel runs `npm install` and `npm run build` on their servers and publishes the `dist` folder. You will land on a celebration screen with your live URL:

```
https://portfolio-<random>.vercel.app
```

Click it. Your portfolio is now on the internet.

## 7.6 Update the website after making changes

This is the beautiful part — **pushing to GitHub redeploys automatically**:

```bash
# after editing files locally:
git add .
git commit -m "Add Smart Gate repo link and screenshot"
git push
```

Vercel sees the push, rebuilds, and your live site is updated in about a minute. You can watch the progress on your Vercel dashboard, where every deployment is listed with its own preview URL.

## 7.7 Custom domain (optional, later)

Once you own a domain — bought from any registrar (Namecheap, GoDaddy, or Omani providers) — you can serve the portfolio from `www.yourname.com`:

1. In Vercel, open your project → **Settings** → **Domains** → enter your domain → **Add**.
2. Vercel shows you DNS records to create at your registrar. Typical values:
   - Apex domain (`yourname.com`): an **A record** pointing to `76.76.21.21`
   - Subdomain (`www.yourname.com`): a **CNAME record** pointing to `cname.vercel-dns.com`
3. Create the records in your registrar's DNS panel and wait — anywhere from 10 minutes to 48 hours.
4. Vercel detects the DNS change, issues a free HTTPS certificate automatically, and starts serving your site on the new domain.
5. Optional finishing touch: update the `og:url`-style tags and any absolute references in `index.html` to your new domain.

---

# Chapter 8 — Troubleshooting

## 8.1 `npm install` fails

| Symptom | Cause | Fix |
| --- | --- | --- |
| `EACCES` / permission errors | Trying to install globally or wrong folder rights | Never use `sudo npm install` in this project. On Windows run VS Code as your normal user; delete `node_modules` and retry. |
| `ENOENT package.json` | Terminal is in the wrong folder | `cd` into the folder that contains `package.json` (check with `ls` / `dir`). |
| Hangs at a random package / network error | Unstable connection or registry issue | Press Ctrl + C, then delete `node_modules` and `package-lock.json` and run `npm install` again. |
| `engine` / Node version warnings | Node too old | Update Node.js from nodejs.org (LTS). The site needs Node 18+ (20+ recommended). |

The universal reset recipe:

```bash
rm -rf node_modules package-lock.json   # Windows: rmdir /s /q node_modules & del package-lock.json
npm install
```

## 8.2 Website not starting

- **Port already in use** (`Port 3000 is already in use`): another terminal still runs the server. Close it, or start on another port: `npm run dev -- --port 5173`.
- **Blank white page:** open the browser console (F12 → Console) and read the red error. Nine times out of ten it points to a syntax error in a file you just edited — common causes: a missing comma between project blocks, an unclosed quote, or an extra parenthesis. Undo your last edit if unsure.
- **`vite: command not found` / `Unknown command`:** dependencies were never installed or were deleted. Run `npm install` again.
- **Weird half-broken styling after an edit:** stop the server (Ctrl + C) and start it again — Vite sometimes needs a restart after CSS changes.

## 8.3 Missing images

1. The file must be in `public/images/projects/` and the `image` field must read `images/projects/<name>.jpg` — no leading slash, no `public/` in the path.
2. Check the exact file name and case: `aleef.jpg` and `Aleef.JPG` are different on servers.
3. Confirm the image opens in a browser at `http://localhost:3000/images/projects/aleef.jpg` while the dev server runs. If that 404s, the file name or folder is wrong.
4. After adding files to `public/`, restart `npm run dev`.

## 8.4 Broken links

- External URLs must include `https://` — `repoUrl: "github.com/ari01-tech/x"` opens a dead relative path; `repoUrl: "https://github.com/ari01-tech/x"` is correct.
- Section links (`#projects`, `#contact`) depend on section ids in `App.jsx` and `navLinks` in the data file. If you rename a section id, update both places.
- Test every link after editing: click each project button, the four contact cards, and both social buttons.

## 8.5 Deployment failures on Vercel

1. Open the failed deployment in Vercel and read the **Build Logs** — the first red error is the real one.
2. `Module not found` → a file was renamed or deleted but still imported; the log names the exact path.
3. `Command failed: npm run build` → reproduce locally first: run `npm run build` on your machine and fix the error it prints.
4. Wrong output folder → make sure the setting is `dist` (not `build` — that is for Create React App, not Vite).
5. Nothing works? **Redeploy from a known-good state:** on the Vercel Deployments page, use the "..." menu on the last successful deployment → **Promote to Production**.

## 8.6 CV download not working

1. Confirm the file exists at exactly `public/cv/Ariam-Al-Hasani-CV.pdf` (check spelling and case).
2. Test it directly in a browser at `http://localhost:3000/cv/Ariam-Al-Hasani-CV.pdf`.
3. If you renamed the file, update `cvPath` in `src/data/portfolio.js` to match, including the `cv/` prefix.
4. On the live site, remember: CV changes only go live after you `git push` (Chapter 7.6).

## 8.7 The site looks wrong on my phone

Open the site in a desktop browser, press **F12**, and click the phone/tablet icon (device toolbar). The site is built mobile-first and tested at 360 px, 768 px, and 1440 px widths. If something is off at one width, it is usually a CSS rule inside a `@media` block in the matching component's `.css` file.

## 8.8 Certificate preview or download not working

1. Test the file path directly: with the dev server running, open `http://localhost:3000/certificates/your-file.pdf` in the browser. If it 404s, the file name or folder is wrong — the file must be inside `public/certificates/` and the `file` field must read `certificates/your-file.pdf` (no leading slash, no `public/` in the path).
2. Check spelling and case of the file extension: `Certificate.PDF` and `certificate.pdf` are different on servers. Supported types: `.pdf`, `.jpg`, `.jpeg`, `.png` (lowercase endings are safest).
3. The preview window opens but the PDF area is empty: some browsers block embedded PDF viewers — use the **Open in new tab** button inside the preview (visitors get the same button as a fallback).
4. Clicking a card does nothing and the whole page misbehaves: open the browser console (F12 → Console) and read the red error — almost always a missing comma between blocks in `src/data/certificates.js`. Undo your last edit if unsure.
5. The certificate looks sideways or upside down in the preview: rotate the image before uploading (Windows Photos → Rotate → Save as copy), or re-export the PDF in the correct orientation.
6. The change is not on the live website yet: it goes live only after `git push` (Chapter 7.6).

## 8.9 `npm install` shows "found 27 vulnerabilities" (or similar)

Do not panic — this message looks scary but is almost always harmless for this project. Here is what it means and what to do:

**What the message actually is.** `npm install` automatically runs a security scan called `npm audit`. It compares every downloaded package against a public database of known security advisories. Many of these advisories apply to **development tools** — programs that run only on *your* laptop while you are coding (the dev server, the build tool). They do **not** travel with your finished website: when you run `npm run build`, the output in `dist/` is plain HTML, CSS, and JavaScript with none of those tools inside. Visitors to your portfolio download only that clean output, so these advisories never affect the live site or its visitors.

**What to do, in order:**

1. **First, try the safe update:** run `npm update vite` and then `npm run dev`. If the site starts normally, you are done — the warning was about an outdated version of the build tool, and updating fixed it.
2. **Still warned?** Run `npm audit fix` (without `--force`). This applies safe, compatible updates only, then re-run `npm run dev` to confirm the site still works.
3. **If the message itself suggests `npm audit fix --force`:** do **not** run it. The `--force` flag upgrades to a major new version that can break the project's build. The advisories it wants to clear affect only the dev server, never the finished website, so the risk is not worth it.

**Golden rules:**

- The only check that matters is: does `npm run dev` start, and does `npm run build` finish without errors? If yes, your project is healthy.
- Never run `npm audit fix --force` on this project unless a future version of this manual tells you to.
- This project ships with a `package-lock.json` that pins tested, compatible package versions — you normally do not need to touch any of this at all.

> **Note:** As of the v1.2 project update, the project uses Vite 6.4+ and `npm install` reports **0 vulnerabilities**. If you downloaded the project earlier (v1.1 or below), update your copy: delete `node_modules` and `package-lock.json`, change `"vite": "^5.4.11"` to `"vite": "^6.4.4"` in `package.json`, then run `npm install` again.

---

# Quick Reference Card

| I want to... | I do this |
| --- | --- |
| Start editing | `npm run dev` → edit `src/data/portfolio.js` |
| Add a project | Copy a block in `projects`, edit it (Chapter 3.2) |
| Add a screenshot | Drop file in `public/images/projects/`, set `image: "images/projects/<file>"` |
| Link a repo | `repoUrl: "https://github.com/ari01-tech/<repo>"` |
| Add a certificate | Drop the file in `public/certificates/`, add a block in `src/data/certificates.js` (Chapter 4) |
| Replace a certificate | Overwrite the file with the same name, or edit its block |
| Delete a certificate | Remove its block from `certificates.js` (and the file) |
| Replace my CV | Swap the file in `public/cv/`, keep the name |
| Change contact info | Edit `profile` in the data file |
| Publish updates | `git add . && git commit -m "..." && git push` (Vercel auto-deploys) |
| Test the production build | `npm run build` then `npm run preview` |
| Something broke | Chapter 8 — read the terminal first, then the browser console (F12) |
| Scared by a "vulnerabilities" warning | Chapter 8.9 — usually harmless; never use `npm audit fix --force` |

---

*Manual prepared for Ariam Al Hasani's portfolio. Keep this file in the repo — it is your future self's best friend.*
