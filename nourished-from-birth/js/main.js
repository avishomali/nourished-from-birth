// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Nav scroll effect
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 30px rgba(107,76,53,0.1)'
      : 'none';
  });
}

// Email form
const emailForm = document.querySelector('.email-form');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = emailForm.querySelector('button');
    btn.textContent = 'Thank you! ✓';
    btn.style.background = '#7A9E7E';
    setTimeout(() => {
      btn.textContent = 'Get the Guide';
      btn.style.background = '';
    }, 3000);
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.content-card, .about-card, .prose-pillar').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
