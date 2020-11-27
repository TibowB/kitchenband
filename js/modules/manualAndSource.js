// MANUAL

const manual = document.getElementById("manual");
const helpButton = document.getElementById("help_outline");

export function toggleManual() {
  manual.toggleAttribute("hidden");
  helpButton.classList.toggle("clicked");
}

// SOURCE

const source = document.getElementById("source");
const sourceButton = document.getElementById("folder");

export function toggleSource() {
  source.toggleAttribute("hidden");
  sourceButton.classList.toggle("clicked");
}
