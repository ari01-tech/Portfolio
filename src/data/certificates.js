/* =====================================================================
   CERTIFICATES 
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
    file: "certificates/NASA 2025.png",
    description:
      "Placeholder sample for anything that does not fit the other categories. Replace or delete it freely.",
  },
];

export default certificates;
