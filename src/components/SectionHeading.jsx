/**
 * Shared section heading block: mono eyebrow + title + subtitle.
 * Set `center` to true for centered layouts (Contact, Skills, ...).
 */
export default function SectionHeading({ eyebrow, title, sub, center = false }) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
