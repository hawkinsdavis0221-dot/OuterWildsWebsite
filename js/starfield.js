/**
 * Twinkling star field — same idea as hawk_css StarField.tsx
 * Fills every .star-field container (page background and/or nav).
 */
(function () {
  function fillStarField(container) {
    if (!container || container.dataset.starfieldInit === "true") return;
    container.dataset.starfieldInit = "true";

    var isNav = container.classList.contains("star-field--nav");
    var count = isNav ? 42 : 80;

    for (var i = 0; i < count; i++) {
      var star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--duration", 2 + Math.random() * 4 + "s");
      star.style.setProperty("--delay", Math.random() * 3 + "s");
      var size = 1 + Math.random() * 2;
      star.style.width = size + "px";
      star.style.height = size + "px";
      container.appendChild(star);
    }
  }

  function init() {
    document.querySelectorAll(".star-field").forEach(fillStarField);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
