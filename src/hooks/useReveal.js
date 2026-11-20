import { useEffect } from "react";

/**
 * Adds `.is-visible` to every element carrying the `.reveal` class
 * the first time it scrolls into the viewport.
 *
 * Also watches the DOM: cards rendered LATER (for example when a
 * project or certificate filter button re-renders a grid) are picked
 * up automatically, so filtered items animate in instead of staying
 * invisible.
 *
 * Usage: give any element className="reveal" (optionally set
 * style={{ "--reveal-delay": "120ms" }} for a staggered entrance).
 */
export default function useReveal() {
  useEffect(() => {
    // Fallback for very old browsers: show everything immediately.
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    const observeElement = (el) => {
      if (el.classList.contains("reveal") && !el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    };

    // Observe everything that exists on first paint.
    document.querySelectorAll(".reveal").forEach(observeElement);

    // Observe anything added to the DOM later (filter re-renders, etc.).
    const mutation = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          observeElement(node);
          node.querySelectorAll?.(".reveal").forEach(observeElement);
        })
      );
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
