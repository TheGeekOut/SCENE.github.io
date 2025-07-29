// Gestion de la modale
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalContent.innerHTML = `
      <span class="close">&times;</span>
      <h2>${card.dataset.title}</h2>
      <p><strong>Résumé :</strong> ${card.dataset.description}</p>
      <p><strong>Avis :</strong> ${card.dataset.reviews}</p>
      <p><strong>Note :</strong> ${card.dataset.rating}/5</p>
      <div class="trailer">
        <iframe width="100%" height="315" src="${card.dataset.trailer}" allowfullscreen></iframe>
      </div>
    `;
    modal.style.display = "flex";
    document.querySelector(".close").onclick = () => modal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Filtrage par genre
const genreTags = document.querySelectorAll(".genre-tag");

genreTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    const selectedGenre = tag.dataset.genre;
    cards.forEach((card) => {
      if (selectedGenre === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.dataset.genre === selectedGenre ? "block" : "none";
      }
    });
  });
});
