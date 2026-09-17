// Barimap Landing Page Script

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Hamburger menu ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ---- Phone carousel auto-slide ----
const slides = document.querySelectorAll('.phone-slide');
if (slides.length > 0) {
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 2800);
}

// ---- Language switcher ----
const langBtns = document.querySelectorAll('.lang-btn');
const langSamples = document.querySelectorAll('.lang-sample');
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    langSamples.forEach(s => {
      if (s.id === 'sample-' + lang) {
        s.classList.remove('hidden');
      } else {
        s.classList.add('hidden');
      }
    });
  });
});

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- Intersection Observer for fade-in animations ----
const observerOpts = { threshold: 0.12 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOpts);

// Add fade-in class to animatable elements
const animatables = document.querySelectorAll(
  '.prob-card, .feat-card, .testi-card, .step, .price-card, .ss-item, .lang-badge'
);
animatables.forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  el.classList.add('fade-in');
  observer.observe(el);
});
