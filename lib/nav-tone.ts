const stops: [string, string][] = [
  [".page-hero", "night"],
  [".plain-page", "light"],
  [".plain-hero", "light"],
  [".band-paper", "light"],
  [".band-ink", "dark"],
  [".band-connect", "dark"],
  [".band-build", "gold"],
  [".band-opportunity", "sky"],
  [".band-sky", "sky"],
  [".harbor-footer", "sunset"],
];

/** Which header treatment sits over the content at the top of the viewport. */
export function currentNavTone() {
  let bestTop = -Infinity;
  let best = "dark";
  for (const [selector, tone] of stops) {
    for (const node of document.querySelectorAll(selector)) {
      const rect = node.getBoundingClientRect();
      if (rect.top <= 56 && rect.bottom > 56 && rect.top >= bestTop) {
        bestTop = rect.top;
        best = tone;
      }
    }
  }
  return best;
}
