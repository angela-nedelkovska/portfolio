import '../styles/global.css';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/hero.css';
import '../styles/process.css';
import '../styles/about.css';
import '../styles/projects.css';
import '../styles/contact.css';
import '../styles/skills.css';
import '../styles/ssd-banner.css';
import '../styles/single-project.css';

import './nav.js';
import './hero-parallax.js';
import './projects.js';
// import './projectPage.js';
import projects from '../data/projects.js'
import { projectPage } from './projectPage.js';

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

if(document.querySelector(".projects-page")){
    projectPage();
}