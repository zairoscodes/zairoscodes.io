/* 
  ONE CODE - Dynamic JavaScript Interactions
  
  Dynamic Functionality Implemented:
  1. Dynamic Header: Changes the header style on scroll.
  2. Automatic Slideshow: Rotates One Piece–themed images on the Home page.
  3. Interactive Info Toggle: Reveals extra content on demand.
  Extra: Smooth scrolling for in-page navigation links.
*/

/*** 1. Dynamic Header Functionality ***/
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      // Solid background on scroll
      header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
      header.classList.remove('scrolled');
      header.style.background = 'rgba(0, 0, 0, 0.7)';
    }
  });
  
  /*** 2. Automatic Slideshow Functionality ***/
  let slideIndex = 0;
  function showSlides() {
    const slides = document.querySelectorAll('.slideshow-container img');
    if (!slides.length) return; // Only execute if slideshow exists
    
    // Remove 'active' class from all slides
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    
    // Increment slide index and loop back if needed
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex - 1].classList.add('active');
    
    // Schedule next slide change
    setTimeout(showSlides, 5000);
  }
  
  // Initialize slideshow when the DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.slideshow-container')) {
      showSlides();
    }
  });
  
  /*** 3. Interactive Info Toggle Functionality ***/
  document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.info-toggle');
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', function() {
        const infoContent = this.nextElementSibling;
        if (infoContent) {
          // Toggle display
          if (infoContent.style.display === 'block') {
            infoContent.style.display = 'none';
          } else {
            infoContent.style.display = 'block';
          }
        }
      });
    });
  });
  
  /*** Extra Interaction: Smooth Scrolling ***/
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
      // Only apply smooth scroll for in-page anchor links
      if (link.hash) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const target = document.querySelector(this.hash);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80, // Adjusted offset for fixed header
              behavior: 'smooth'
            });
          }
        });
      }
    });
  });
  