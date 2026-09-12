// // ============= Navigation ============= //
// const navbar = document.getElementById('navbar');
// const navbarMenu = document.querySelector('.navbar-menu');
// const mobileMenuBtn = document.getElementById('mobileMenuBtn');
// const navLinks = document.querySelectorAll('.nav-link');

// // Navbar scroll effect
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });

// // Mobile menu toggle
// function toggleMenu() {
//   mobileMenuBtn.classList.toggle('active');
//   navbarMenu.classList.toggle('open');
// }

// function closeMenu() {
//   mobileMenuBtn.classList.remove('active');
//   navbarMenu.classList.remove('open');
// }

// // Set active nav link based on current page
// function setActiveNavLink() {
//   const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//   navLinks.forEach(link => {
//     const href = link.getAttribute('href');
//     if (href === currentPage || (currentPage === '' && href === 'index.html')) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('load', setActiveNavLink);

// // ============= Scroll Animations ============= //
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// // Observe all fade-in elements
// document.addEventListener('DOMContentLoaded', () => {
//   const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
//   fadeElements.forEach(el => {
//     // Check if element is already in view
//     if (el.getBoundingClientRect().top < window.innerHeight) {
//       el.classList.add('visible');
//     } else {
//       observer.observe(el);
//     }
//   });
// });

// // ============= Terminal Animation ============= //
// const terminalOutput = document.getElementById('terminalOutput');
// if (terminalOutput) {
//   // Animate terminal output after 2 seconds
//   setTimeout(() => {
//     terminalOutput.style.opacity = '1';
//     terminalOutput.style.transition = 'opacity 0.5s ease';
    
//     // Animate the dots
//     let dotCount = 1;
//     const dotsInterval = setInterval(() => {
//       const dotsSpan = terminalOutput.querySelector('.animated-dots');
//       if (dotsSpan) {
//         dotCount = (dotCount % 3) + 1;
//         dotsSpan.textContent = '.'.repeat(dotCount);
//       }
//     }, 500);
    
//     // Stop animation after 5 seconds
//     setTimeout(() => clearInterval(dotsInterval), 5000);
//   }, 2000);
// }

// // ============= Smooth Scroll Link Handling (removed for multi-page) ============= //
// // Links now navigate to different pages instead of using anchor scrolling

// // ============= Year in Footer ============= //
// document.getElementById('year').textContent = new Date().getFullYear();

// // ============= Stagger Text Animation ============= //
// const staggerTexts = document.querySelectorAll('.stagger-text');
// staggerTexts.forEach(text => {
//   const spans = text.querySelectorAll('span');
//   spans.forEach((span, index) => {
//     span.style.animationDelay = `${index * 0.1}s`;
//   });
// });

// // ============= Fade In Line Animation ============= //
// const fadeInLines = document.querySelectorAll('.fade-in-line');
// fadeInLines.forEach((line, index) => {
//   line.style.animationDelay = `${0.8 + index * 0.15}s`;
// });

// // ============= Add scroll-triggered animations to staggered elements ============= //
// function animateOnScroll() {
//   const elements = document.querySelectorAll('[class*="fade-in"]');
  
//   const scrollObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.animation = 'slideInUp 0.6s ease forwards';
//         scrollObserver.unobserve(entry.target);
//       }
//     });
//   }, {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
//   });

//   elements.forEach(element => {
//     scrollObserver.observe(element);
//   });
// }

// // Initialize animations on page load
// window.addEventListener('load', () => {
//   animateOnScroll();
// });

// // ============= Hover Effects ============= //
// const projectCards = document.querySelectorAll('.project-card');
// projectCards.forEach(card => {
//   card.addEventListener('mouseenter', function() {
//     this.style.transform = 'translateY(-8px)';
//   });
//   card.addEventListener('mouseleave', function() {
//     this.style.transform = 'translateY(0)';
//   });
// });

// const skillCards = document.querySelectorAll('.skill-card');
// skillCards.forEach(card => {
//   card.addEventListener('mouseenter', function() {
//     this.style.transform = 'translateY(-4px)';
//   });
//   card.addEventListener('mouseleave', function() {
//     this.style.transform = 'translateY(0)';
//   });
// });

// // ============= Smooth page transitions ============= //
// document.addEventListener('DOMContentLoaded', () => {
//   document.body.style.animation = 'fadeIn 0.6s ease';
// });

// // ============= Responsive Menu Close ============= //
// window.addEventListener('resize', () => {
//   if (window.innerWidth > 768 && navbarMenu.classList.contains('open')) {
//     closeMenu();
//   }
// });

// // ============= Keyboard Navigation ============= //
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeMenu();
//   }
// });

// // ============= Lazy Loading Images ============= //
// if ('IntersectionObserver' in window) {
//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         if (img.dataset.src) {
//           img.src = img.dataset.src;
//           img.removeAttribute('data-src');
//         }
//         imageObserver.unobserve(img);
//       }
//     });
//   });

//   document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
// }

// // ============= Additional Utils ============= //
// // Prevent FOUC (Flash of Unstyled Content)
// window.addEventListener('load', () => {
//   document.body.style.opacity = '1';
// });

// // Smooth scroll for all browsers
// if (!('scrollBehavior' in document.documentElement.style)) {
//   console.log('Smooth scroll not supported, using polyfill');
// }

// // ============= Performance Monitoring ============= //
// if (window.performance && window.performance.timing) {
//   window.addEventListener('load', () => {
//     const perfData = window.performance.timing;
//     const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
//     console.log('Page load time:', pageLoadTime + 'ms');
//   });
// }

// // ============= Accessibility Enhancements ============= //
// // Add keyboard focus styles
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Tab') {
//     document.body.classList.add('keyboard-nav');
//   }
// });

// document.addEventListener('mousedown', () => {
//   document.body.classList.remove('keyboard-nav');
// });



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
if (document.getElementById('year')) {
  document.getElementById('year').textContent = new Date().getFullYear();
}

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

// ============= CERTIFICATES TICKER ============= //
// const certData = [
//   { title: 'Flutter Dev Internship', src: 'src/certificates/Internship_Certificate.png' },
//   { title: 'Advanced Dart Programming', src: 'src/assets/certificate2.png' },
//   { title: 'Firebase Mastery', src: 'src/assets/certificate3.png' },
//   { title: 'Mobile App Development', src: 'src/assets/certificate4.png' },
//   { title: 'UI/UX Design Principles', src: 'src/assets/certificate5.png' },
// ];

let certCur = 0;

function initCertTicker() {
  const track = document.getElementById('certTickerTrack');
  const lightbox = document.getElementById('certLightbox');
  
  console.log('initCertTicker called - track exists:', !!track, 'lightbox exists:', !!lightbox);
  
  if (!track) {
    console.error('certTickerTrack element not found!');
    return;
  }
  
  if (!lightbox) {
    console.error('certLightbox element not found!');
    return;
  }
  
  // Build ticker - double the items for seamless loop
  [...certData, ...certData].forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.tabIndex = 0;
    card.dataset.i = i % certData.length;
    card.setAttribute('aria-label', c.title);
    
    card.innerHTML = `
      <img src="${c.src}" alt="${c.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="cert-ph" style="display:none">${c.title}</div>
      <div class="cert-lbl">${c.title}</div>
    `;
    
    card.addEventListener('click', () => openCertLightbox(Number(card.dataset.i)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openCertLightbox(Number(card.dataset.i));
    });
    
    track.appendChild(card);
  });
  
  track.classList.add('running');
  console.log('Certificates initialized:', track.children.length, 'cards created');
}

function openCertLightbox(idx) {
  certCur = idx;
  renderCertLightbox();
  document.getElementById('certLightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
  document.getElementById('certLightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCertLightbox() {
  const c = certData[certCur];
  
  document.getElementById('certLbTitle').textContent = c.title;
  document.getElementById('certLbCounter').textContent = `${certCur + 1} / ${certData.length}`;
  
  const wrap = document.getElementById('certLbImg');
  wrap.innerHTML = '';
  
  const img = document.createElement('img');
  img.src = c.src;
  img.alt = c.title;
  img.onerror = function() {
    this.remove();
    const ph = document.createElement('div');
    ph.className = 'cert-lb-ph';
    ph.innerHTML = `<div>📜</div><span>${c.title}</span>`;
    wrap.appendChild(ph);
  };
  wrap.appendChild(img);
  
  // Update dots
  const dots = document.getElementById('certLbDots');
  dots.innerHTML = '';
  certData.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'cert-lb-dot' + (i === certCur ? ' active' : '');
    d.setAttribute('aria-label', `Certificate ${i + 1}`);
    d.addEventListener('click', () => { certCur = i; renderCertLightbox(); });
    dots.appendChild(d);
  });
}

// Lightbox controls - with safety checks
document.addEventListener('DOMContentLoaded', () => {
  const lbClose = document.getElementById('certLbClose');
  const lbPrev = document.getElementById('certLbPrev');
  const lbNext = document.getElementById('certLbNext');
  const lbOverlay = document.getElementById('certLightbox');
  
  if (lbClose) lbClose.addEventListener('click', closeCertLightbox);
  if (lbPrev) lbPrev.addEventListener('click', () => {
    certCur = (certCur - 1 + certData.length) % certData.length;
    renderCertLightbox();
  });
  if (lbNext) lbNext.addEventListener('click', () => {
    certCur = (certCur + 1) % certData.length;
    renderCertLightbox();
  });
  
  if (lbOverlay) {
    lbOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'certLightbox') closeCertLightbox();
    });
  }
  
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('certLightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeCertLightbox();
    if (e.key === 'ArrowLeft') { certCur = (certCur - 1 + certData.length) % certData.length; renderCertLightbox(); }
    if (e.key === 'ArrowRight') { certCur = (certCur + 1) % certData.length; renderCertLightbox(); }
  });
  
  // Initialize certificates
  initCertTicker();
});

// ============= Seamless Infinite Certificates Marquee ============= //
function initMarqueeScroll() {
  const wrap = document.querySelector('.certificates-marquee');
  const track = document.getElementById('marqueeTrack');
  if (!wrap || !track) return;

  // Guard: only clone once, even if this function somehow runs twice
  if (track.dataset.cloned === 'true') return;
  track.dataset.cloned = 'true';

  const originalCards = Array.from(track.children);
  originalCards.forEach(card => track.appendChild(card.cloneNode(true)));

  const loopDistance = track.children[originalCards.length].offsetLeft - originalCards[0].offsetLeft;

  let pos = 0;
  let paused = false;
  const speed = 40;

  wrap.addEventListener('mouseenter', () => { paused = true; });
  wrap.addEventListener('mouseleave', () => { paused = false; });

  let lastTime = null;
  function step(timestamp) {
    if (lastTime === null) lastTime = timestamp;
    const delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (!paused) {
      pos -= speed * delta;
      if (Math.abs(pos) >= loopDistance) pos += loopDistance;
      track.style.transform = `translateX(${pos}px)`;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', initMarqueeScroll);