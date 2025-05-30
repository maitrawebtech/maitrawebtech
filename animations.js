document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations when page loads
  initAnimations();
  
  // Initialize scroll reveal animations
  initScrollReveal();
  
  // Initialize particle effect
  initParticles();
  
  // Initialize hover effects
  initHoverEffects();
  
  // Initialize preloader animation
  initPreloader();
});

function initAnimations() {
  // Add animation classes to elements with data-aos attributes
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  animatedElements.forEach(el => {
    const animation = el.getAttribute('data-aos');
    const delay = el.getAttribute('data-aos-delay') || 0;
    
    el.style.animationDelay = `${delay}ms`;
    el.classList.add(animation);
  });
}

function initScrollReveal() {
  // Create Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with reveal class
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

function initParticles() {
  // Only run if particles-js element exists
  if (document.getElementById('particles-js')) {
    // Configure particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#4a6cf7"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4a6cf7",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
}

function initHoverEffects() {
  // Add hover effects to elements with hover classes
  const hoverGrowElements = document.querySelectorAll('.hover-grow');
  const hoverRotateElements = document.querySelectorAll('.hover-rotate');
  const hoverShadowElements = document.querySelectorAll('.hover-shadow');
  
  hoverGrowElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.05)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)';
    });
  });
  
  hoverRotateElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'rotate(5deg)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'rotate(0)';
    });
  });
  
  hoverShadowElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.boxShadow = 'none';
    });
  });
}

function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    // Set different delays for each loader square
    const squares = document.querySelectorAll('.loader-square');
    squares.forEach((square, index) => {
      square.style.setProperty('--delay', index);
    });
    
    // Hide preloader when page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }, 500);
    });
  }
}

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Testimonial slider functionality
function initTestimonialSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;
  
  const slides = document.querySelectorAll('.testimonial-slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Auto-rotate testimonials every 5 seconds
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
}

// Initialize cookie consent
function initCookieConsent() {
  const cookieConsent = document.querySelector('.cookie-consent');
  if (!cookieConsent) return;
  
  const acceptBtn = cookieConsent.querySelector('.accept-cookies');
  
  // Check if user already accepted cookies
  if (localStorage.getItem('cookiesAccepted')) {
    cookieConsent.style.display = 'none';
    return;
  }
  
  // Show cookie consent after delay
  setTimeout(() => {
    cookieConsent.style.display = 'block';
  }, 2000);
  
  // Handle accept button click
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.style.display = 'none';
  });
}

// Floating contact button functionality
function initFloatingContact() {
  const contactBtn = document.querySelector('.floating-contact .contact-btn');
  if (!contactBtn) return;
  
  contactBtn.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
}

// Add these initializations to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  initTestimonialSlider();
  initCookieConsent();
  initFloatingContact();
});

// Parallax effect for hero section
function initParallax() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', initParallax);