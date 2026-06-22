import projects from '../data/projects.js';

export const projectPage=()=>{
  const slug = document.body.dataset.project;
const current = projects.find(p => p.slug === slug);

// render title and tags
document.querySelector('.project-title').textContent = current.title;

document.querySelector('.project-tags').innerHTML = current.tags
  .map(tag => `<span class="project-tag">${tag}</span>`)
  .join('');

// render more projects — exclude current, show 3
const more = projects
  .filter(p => p.slug !== slug)
  .slice(0, 3);

document.querySelector('.more-projects-grid').innerHTML = more
  .map(project => `
    <a href="${project.url}" class="project-card">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-card-footer">
        <div class="project-card-tags">
          ${project.tags
            .map(tag => `<span class="project-card-tag">${tag}</span>`)
            .join('')}
        </div>
        <h3 class="project-card-title">${project.title}</h3>
      </div>
    </a>
  `)
  .join('');
}

