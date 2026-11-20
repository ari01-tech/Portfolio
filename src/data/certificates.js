/* =====================================================================
   CERTIFICATES — SINGLE SOURCE OF TRUTH
   =====================================================================
   This ONE file controls every certificate shown in the
   "Certifications & Achievements" section of the website.

   ADD A CERTIFICATE — the 3-step recipe:
     1. Copy your certificate file (PDF, JPG, JPEG, or PNG) into:
            public/certificates/
     2. Copy one { ... } block below, paste it at the TOP of the list,
        and fill in your details.
     3. Save the file — the certificate appears on the website
        automatically. Nothing else to touch.

   FILE PATH RULE
     `file` is written relative to the `public/` folder.
     If your file is public/certificates/my-certificate.pdf
     then you write:   file: "certificates/my-certificate.pdf"

   SUPPORTED FILE TYPES
     .pdf  .jpg  .jpeg  .png  (lower-case endings are safest)
     The website detects the type from the ending automatically:
       • Images are shown as the card thumbnail and in the preview.
       • PDFs get a clean "PDF" tile and open in the built-in preview.

   FULL WALKTHROUGH (upload, replace, delete, publish to GitHub):
     docs/USER_MANUAL.md  →  Chapter 4 — Managing Certificates
   ===================================================================== */

/* The filter buttons shown above the gallery, in this exact order. */
export const certificateCategories = [
  "Technical Certifications",
  "AI & Machine Learning",
  "Programming & Software Development",
  "Workshops & Training",
  "Competitions & Awards",
  "Other Certificates",
];

/* ---------------------------------------------------------------------
   THE CERTIFICATES LIST
   ---------------------------------------------------------------------
   Every certificate is one { ... } block:

       {
         id: "short-unique-name",        // must be unique, no spaces
         name: "Certificate name",       // shown as the card title
         organization: "Who issued it",  // shown under the name
         issueDate: "Month Year",        // shown as a small label
         category: "One of the six categories above",
         file: "certificates/your-file.pdf",
       }

   The entries below are CLEARLY-LABELED SAMPLE PLACEHOLDERS so every
   card, filter, preview and download works out of the box. They are NOT
   real certificates — replace or delete each one as soon as you add
   your own (see docs/USER_MANUAL.md, Chapter 4).
   --------------------------------------------------------------------- */

const certificates = [
  {
    id: "sample-technical",
    name: "Certificate of Participation in the NASA Space Apps Hackathon 2026",
    organization: "NASA",
    issueDate: "NOV 2026",
    category: "Certificate of Participation",
    file: "certificates/NASA 2026.png",
    description:
      "-",
  },
  {
    id: "sample-ai-ml",
    name: "Machine Learning with Tabular Dataset Workshop",
    organization: "UTAS",
    issueDate: "March 2026",
    category: "AI & Machine Learning",
    file: "certificates/ML.png",
    description:
      "Placeholder sample in JPG format. Replace it with your real AI / machine learning certificate.",
  },
  {
    id: "sample-programming",
    name: "Sample Certificate — Programming (Replace Me)",
    organization: "Issuing Organization (Placeholder)",
    issueDate: "Month 20XX",
    category: "Programming & Software Development",
    file: "certificates/sample-certificate-programming.png",
    description:
      "Placeholder sample in PNG format. Replace it with your real programming or software development certificate.",
  },
  {
    id: "sample-workshops",
    name: "International Conference: Smart Solutions for Modern Design, Business and Computer Innovations OCMT’2025",
    organization: "OCMT",
    issueDate: "APRIL 2025",
    category: "Conference",
    file: "certificates/OCMT.png",
    description:
      "Placeholder sample for a workshop or training attendance certificate. Replace it with a real one.",
  },
  {
    id: "sample-competitions",
    name: "Sample Certificate — Competition (Replace Me)",
    organization: "UTAS-SHINAS",
    issueDate: "NOV 2024",
    category: "Conference",
    file: "certificates/sh.png",
    description:
      "Placeholder sample for a competition or award certificate — for example a hackathon participation or winner certificate.",
  },
  {
    id: "sample-other",
    name: "Sample Certificate — Other (Replace Me)",
    organization: "Issuing Organization (Placeholder)",
    issueDate: "Month 20XX",
    category: "Other Certificates",
    file: "certificates/sample-certificate-other.png",
    description:
      "Placeholder sample for anything that does not fit the other categories. Replace or delete it freely.",
  },
];

export default certificates;
