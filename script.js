// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Hamburger (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '72px';
  navLinks.style.right = '24px';
  navLinks.style.background = 'rgba(13,13,22,.95)';
  navLinks.style.padding = '16px 24px';
  navLinks.style.borderRadius = '16px';
  navLinks.style.border = '1px solid rgba(255,255,255,.08)';
  navLinks.style.backdropFilter = 'blur(20px)';
  navLinks.style.gap = '4px';
  navLinks.style.boxShadow = '0 20px 60px rgba(0,0,0,.4)';
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 640) navLinks.style.display = 'none';
  });
});

// Contact form
function handleForm(e) {
  e.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = '✓ Message sent! I\'ll get back to you soon.';
  e.target.reset();
  setTimeout(() => note.textContent = '', 4000);
}

// Scroll reveal with stagger
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.project-card, .skill-group, .timeline-item, .cert-item, .contact-item, .about-card'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
