const hero = document.querySelector('.hero-section');
const grid = document.querySelector('.grid-image');
const content = document.querySelector('.hero-content');

if (hero && grid && content) {
  hero.addEventListener('mousemove', (e) => {
    const { innerWidth: w, innerHeight: h } = window;

    const x = (e.clientX / w - 0.5) * 2;
    const y = (e.clientY / h - 0.5) * 2;

    grid.style.transform = `translate(-50%, -50%) rotate(${x * 1.5}deg) translateY(${y * 6}px)`;
    content.style.transform = `translateX(${x * 10}px) translateY(${y * 6}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    grid.style.transform = 'translate(-50%, -50%)';
    content.style.transform = '';
  });
}