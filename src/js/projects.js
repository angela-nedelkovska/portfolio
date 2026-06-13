import projects from '../data/projects.js';

const grid = document.querySelector('.projects-grid');
const filter = document.querySelector('.projects-filter');


if (grid) {
  const sorted = [...projects].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );

  const tags = ['All', ...new Set(projects.flatMap(({ tags }) => tags))];

  let activeTag = 'All';

  function renderFilters() {
    filter.innerHTML = tags
      .map(tag => `
        <button
          class="projects-tag ${tag === activeTag ? 'active' : ''}"
          data-tag="${tag}">
          ${tag}
        </button>
      `)
      .join('');
  }

  

  function renderCards() {
    let projectsToShow = activeTag === 'All'
      ? sorted
      : sorted.filter(p => p.tags.includes(activeTag));

      const isHomepage = grid.classList.contains('projects-grid-home');

      if (isHomepage) {
        projectsToShow = projectsToShow.slice(0, 3);
      }

    grid.innerHTML = projectsToShow
      .map(project => `
        <a href="${project.url}" class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-card-footer">
            <div class="project-card-tags">
              ${project.tags.map(tag => `<span class="project-card-tag">${tag}</span>`).join('')}
            </div>
            <h3 class="project-card-title">${project.title}</h3>
          </div>
        </a>
      `)
      .join('');
  }

  renderCards();

if (filter) {
  filter.addEventListener('click', e => {
    const button = e.target.closest('[data-tag]');
    if (!button) return;

    activeTag = button.dataset.tag;
    renderFilters();
    renderCards();
  });

  renderFilters();
}

  // if(filter){
  //   const sorted = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date))
  // };

  // renderFilters();
}