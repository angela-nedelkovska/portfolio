(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`navbar`);window.addEventListener(`scroll`,()=>{window.scrollY>10?e.classList.add(`nav-scrolled`):e.classList.remove(`nav-scrolled`)});var t=document.querySelector(`.hero-section`),n=document.querySelector(`.grid-image`),r=document.querySelector(`.hero-content`);t&&n&&r&&(t.addEventListener(`mousemove`,e=>{let{innerWidth:t,innerHeight:i}=window,a=(e.clientX/t-.5)*2,o=(e.clientY/i-.5)*2;n.style.transform=`translate(-50%, -50%) rotate(${a*1.5}deg) translateY(${o*6}px)`,r.style.transform=`translateX(${a*10}px) translateY(${o*6}px)`}),t.addEventListener(`mouseleave`,()=>{n.style.transform=`translate(-50%, -50%)`,r.style.transform=``}));var i=[{id:1,slug:`langford`,title:`Langford: Fashion E-commerce Website`,tags:[`UX/UI`,`HTML5`,`CSS3`],image:`/portfolio/assets/Langford-homepage-mockup-BG5cKAm9.png`,url:`/portfolio/pages/projects/langford.html`,date:`2026-06`},{id:2,slug:`kinetics`,title:`Kinetics Fitness Studio: A new website`,tags:[`UX/UI`,`WordPress`],image:`/portfolio/assets/kinetics-image-1-BE7D-0l4.png`,url:`/portfolio/pages/projects/kinetics.html`,date:`2026-06`},{id:3,slug:`mypace`,title:`MyPace: Fitness App`,tags:[`UX/UI`,`Figma`],image:`/portfolio/assets/mypace-image-1-CxnyTxS4.png`,url:`/portfolio/pages/projects/mypace.html`,date:`2026-06`},{id:4,slug:`och`,title:`Oncology Care Hospital: Website Development`,tags:[`Bootstrap`,`HTML5`,`SCSS`],image:`/portfolio/assets/OCH-image-1-AXEVTxo8.png`,url:`/portfolio/pages/projects/och.html`,date:`2026-06`},{id:5,slug:`valto`,title:`Valto: Mobile Banking Application`,tags:[`UX/UI`,`Figma`],image:`/portfolio/assets/valto-image-1-CW6gLGP7.png`,url:`/portfolio/pages/projects/valto.html`,date:`2026-06`}],a=document.querySelector(`.projects-grid`),o=document.querySelector(`.projects-filter`);if(a){let e=[...i].sort((e,t)=>new Date(t.date)-new Date(e.date)),t=[`All`,...new Set(i.flatMap(({tags:e})=>e))],n=`All`;function r(){o.innerHTML=t.map(e=>`
        <button
          class="projects-tag ${e===n?`active`:``}"
          data-tag="${e}">
          ${e}
        </button>
      `).join(``)}function s(){let t=n===`All`?e:e.filter(e=>e.tags.includes(n));a.classList.contains(`projects-grid-home`)&&(t=t.slice(0,3)),a.innerHTML=t.map(e=>`
        <a href="${e.url}" class="project-card">
          <img src="${e.image}" alt="${e.title}">
          <div class="project-card-footer">
            <div class="project-card-tags">
              ${e.tags.map(e=>`<span class="project-card-tag">${e}</span>`).join(``)}
            </div>
            <h3 class="project-card-title">${e.title}</h3>
          </div>
        </a>
      `).join(``)}s(),o&&(o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-tag]`);t&&(n=t.dataset.tag,r(),s())}),r())}var s=()=>{let e=document.body.dataset.project,t=i.find(t=>t.slug===e);document.querySelector(`.project-title`).textContent=t.title,document.querySelector(`.project-tags`).innerHTML=t.tags.map(e=>`<span class="project-tag">${e}</span>`).join(``);let n=i.filter(t=>t.slug!==e).slice(0,3);document.querySelector(`.more-projects-grid`).innerHTML=n.map(e=>`
    <a href="${e.url}" class="project-card">
      <img src="${e.image}" alt="${e.title}">
      <div class="project-card-footer">
        <div class="project-card-tags">
          ${e.tags.map(e=>`<span class="project-card-tag">${e}</span>`).join(``)}
        </div>
        <h3 class="project-card-title">${e.title}</h3>
      </div>
    </a>
  `).join(``)},c=document.getElementById(`hamburger`),l=document.querySelector(`.nav-links`);c&&l&&c.addEventListener(`click`,()=>{l.classList.toggle(`active`),c.classList.toggle(`active`)}),document.querySelectorAll(`.nav-links a`).forEach(e=>{e.addEventListener(`click`,()=>{l.classList.remove(`active`),c.classList.remove(`active`)})}),document.querySelector(`.projects-page`)&&s();