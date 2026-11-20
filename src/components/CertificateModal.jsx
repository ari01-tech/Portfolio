import { useEffect, useRef } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";

/* ---------- small helpers (exported for reuse) ---------- */

/** True when the certificate file is a PDF (type is derived from the ending). */
export function isPdf(file) {
  return typeof file === "string" && file.toLowerCase().endsWith(".pdf");
}

/** Suggests a clean file name for the "Download certificate" button. */
export function certDownloadName(certificate) {
  const ext = certificate.file.split(".").pop().toLowerCase() || "pdf";
  const base = certificate.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${base}.${ext}`;
}


export default function CertificateModal({ certificate, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!certificate) return;

    // Lock page scroll while the modal is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog for keyboard users.
    dialogRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const pdf = isPdf(certificate.file);

  return (
    <div
      className="cmodal"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="cmodal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cmodal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          className="cmodal__close"
          onClick={onClose}
          aria-label="Close certificate preview"
        >
          <X size={20} />
        </button>

        <div className="cmodal__body">
          {/* ---------- Header ---------- */}
          <div className="cmodal__head">
            <span className="cert-card__cat">{certificate.category}</span>
            <h3 className="cmodal__title" id="cmodal-title">
              {certificate.name}
            </h3>
            <p className="cmodal__meta">
              {certificate.organization} · Issued {certificate.issueDate}
            </p>
          </div>

          {/* ---------- Large preview ---------- */}
          <div className="cmodal__preview">
            {pdf ? (
              <>
                <iframe
                  src={`${certificate.file}#toolbar=0&navpanes=0`}
                  title={`${certificate.name} — PDF preview`}
                />
                <p className="cmodal__hint">
                  If the PDF preview does not load in your browser, use
                  &ldquo;Open in new tab&rdquo; below.
                </p>
              </>
            ) : (
              <img
                src={certificate.file}
                alt={`${certificate.name} — full certificate`}
              />
            )}
          </div>

          {certificate.description && (
            <p className="cmodal__desc">{certificate.description}</p>
          )}

          {/* ---------- Actions ---------- */}
          <div className="cmodal__actions">
            <a
              className="btn btn--primary btn--sm"
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Open in new tab
            </a>
            <a
              className="btn btn--ghost btn--sm"
              href={certificate.file}
              download={certDownloadName(certificate)}
            >
              <Download size={15} aria-hidden="true" />
              Download certificate
            </a>
            <span className="cmodal__format" aria-hidden="true">
              <FileText size={14} />
              {pdf ? "PDF" : certificate.file.split(".").pop().toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
