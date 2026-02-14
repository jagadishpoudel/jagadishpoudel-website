// ============= Navigation ============= //
const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
function toggleMenu() {
  mobileMenuBtn.classList.toggle('active');
  navbarMenu.classList.toggle('open');
}

function closeMenu() {
  mobileMenuBtn.classList.remove('active');
  navbarMenu.classList.remove('open');
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('load', setActiveNavLink);

// ============= Scroll Animations ============= //
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  fadeElements.forEach(el => {
    // Check if element is already in view
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
});

// ============= Terminal Animation ============= //
const terminalOutput = document.getElementById('terminalOutput');
if (terminalOutput) {
  // Animate terminal output after 2 seconds
  setTimeout(() => {
    terminalOutput.style.opacity = '1';
    terminalOutput.style.transition = 'opacity 0.5s ease';
    
    // Animate the dots
    let dotCount = 1;
    const dotsInterval = setInterval(() => {
      const dotsSpan = terminalOutput.querySelector('.animated-dots');
      if (dotsSpan) {
        dotCount = (dotCount % 3) + 1;
        dotsSpan.textContent = '.'.repeat(dotCount);
      }
    }, 500);
    
    // Stop animation after 5 seconds
    setTimeout(() => clearInterval(dotsInterval), 5000);
  }, 2000);
}

// ============= Smooth Scroll Link Handling (removed for multi-page) ============= //
// Links now navigate to different pages instead of using anchor scrolling

// ============= Year in Footer ============= //
document.getElementById('year').textContent = new Date().getFullYear();

// ============= Stagger Text Animation ============= //
const staggerTexts = document.querySelectorAll('.stagger-text');
staggerTexts.forEach(text => {
  const spans = text.querySelectorAll('span');
  spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`;
  });
});

// ============= Fade In Line Animation ============= //
const fadeInLines = document.querySelectorAll('.fade-in-line');
fadeInLines.forEach((line, index) => {
  line.style.animationDelay = `${0.8 + index * 0.15}s`;
});

// ============= Add scroll-triggered animations to staggered elements ============= //
function animateOnScroll() {
  const elements = document.querySelectorAll('[class*="fade-in"]');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInUp 0.6s ease forwards';
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(element => {
    scrollObserver.observe(element);
  });
}

// Initialize animations on page load
window.addEventListener('load', () => {
  animateOnScroll();
});

// ============= Hover Effects ============= //
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ============= Smooth page transitions ============= //
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.animation = 'fadeIn 0.6s ease';
});

// ============= Responsive Menu Close ============= //
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navbarMenu.classList.contains('open')) {
    closeMenu();
  }
});

// ============= Keyboard Navigation ============= //
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// ============= Lazy Loading Images ============= //
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============= Additional Utils ============= //
// Prevent FOUC (Flash of Unstyled Content)
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Smooth scroll for all browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  console.log('Smooth scroll not supported, using polyfill');
}

// ============= Performance Monitoring ============= //
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', pageLoadTime + 'ms');
  });
}

// ============= Accessibility Enhancements ============= //
// Add keyboard focus styles
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});
