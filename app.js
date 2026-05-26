const workGrid = document.querySelector("#work-grid");
const articleGrid = document.querySelector("#article-grid");

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
    <a href="${work.link}" target="_blank" rel="noreferrer" data-analytics-event="${work.eventName}">${work.linkText}</a>
  `;

  return card;
}

if (workGrid && Array.isArray(window.portfolioWorks)) {
  window.portfolioWorks.forEach((work) => {
    workGrid.appendChild(createWorkCard(work));
  });
}

function createArticleCard(article) {
  const card = document.createElement("article");
  card.className = "article-card";

  card.innerHTML = `
    <p class="tag">${article.label}</p>
    <h4>${article.title}</h4>
    <p>${article.description}</p>
    <a href="${article.link}" target="_blank" rel="noreferrer" data-analytics-event="${article.eventName}">記事を読む</a>
  `;

  return card;
}

if (articleGrid && Array.isArray(window.featuredArticles)) {
  window.featuredArticles.forEach((article) => {
    articleGrid.appendChild(createArticleCard(article));
  });
}
