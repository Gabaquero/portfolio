console.log("expand-cards.js loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const expandableCards = document.querySelectorAll(".card.expandable");

  expandableCards.forEach((card) => {
    // Toggle on card click
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      if (card.classList.contains("expanded")) {
        // If you want a second click to close, do:
        // card.classList.remove("expanded");
      } else {
        card.classList.add("expanded");
      }
    });

    // 1) Find the close button, if any
    const closeBtn = card.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // don’t bubble up
        card.classList.remove("expanded");
      });
    }
  });

  // 2) Outside click closes any expanded card
  document.addEventListener("click", (e) => {
    const allExpanded = document.querySelectorAll(".card.expanded");
    allExpanded.forEach((expandedCard) => {
      if (!expandedCard.contains(e.target)) {
        expandedCard.classList.remove("expanded");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn")) {
      const card = e.target.closest(".card");
      if (card) {
        card.classList.remove("expanded");
      }
    }
  
    if (e.target.closest(".card.expandable") && !e.target.closest(".close-btn")) {
      const card = e.target.closest(".card");
      if (card) {
        card.classList.toggle("expanded");
      }
    }
  });
});