console.log("expand-cards.js loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const expandableCards = document.querySelectorAll(".card.expandable");

  expandableCards.forEach((card) => {
    // Expand the card on click
    card.addEventListener("click", (e) => {
      if (!card.classList.contains("expanded")) {
        e.stopPropagation();
        card.classList.add("expanded");
        document.body.classList.add("overlay-active");
      }
    });

    // Handle the close button
    const closeButton = card.querySelector(".close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", (e) => {
        e.stopPropagation();
        card.classList.remove("expanded");
        if (!document.querySelector(".card.expanded")) {
          document.body.classList.remove("overlay-active");
        }
      });
    }
  });

  // Close only the current card when clicking outside
  document.addEventListener("click", (e) => {
    const expandedCards = document.querySelectorAll(".card.expanded");
    expandedCards.forEach((card) => {
      if (!card.contains(e.target)) {
        card.classList.remove("expanded");
        if (!document.querySelector(".card.expanded")) {
          document.body.classList.remove("overlay-active");
        }
      }
    });
  });
});
