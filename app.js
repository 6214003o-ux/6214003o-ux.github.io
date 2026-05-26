const workGrid = document.querySelector("#work-grid");

function createWorkCard(work) {
  const card = document.createElement("article");
  card.className = "work-card";

  card.innerHTML = `
    <div class="work-card-header">
      <p class="tag">${work.label}</p>
      <span>${work.status}</span>
    </div>
    <h3>${work.title}</h3>
    <p>${work.description}</p>
    <a href="${work.link}" target="_blank" rel="noreferrer">${work.linkText}</a>
  `;

  return card;
}

if (workGrid && Array.isArray(window.portfolioWorks)) {
  window.portfolioWorks.forEach((work) => {
    workGrid.appendChild(createWorkCard(work));
  });
}
