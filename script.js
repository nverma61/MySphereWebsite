// MySphere Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form buttons now have real URLs - no placeholder alerts needed

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .founder-card, .value-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Handle image loading for all team member photos (founders and interns)
    const allTeamImages = document.querySelectorAll('.founder-image img, .team-image img');
    allTeamImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.display = 'block';
            this.parentElement.querySelector('.image-placeholder').style.display = 'none';
        });

        img.addEventListener('error', function() {
            // Keep placeholder visible if image fails to load
            this.style.display = 'none';
            this.parentElement.querySelector('.image-placeholder').style.display = 'flex';
        });
    });

    // Handle image loading for app screenshots
    const appScreenImages = document.querySelectorAll('.app-screen img');
    appScreenImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.display = 'block';
            this.parentElement.querySelector('.screen-placeholder').style.display = 'none';
        });

        img.addEventListener('error', function() {
            // Keep placeholder visible if image fails to load
            this.style.display = 'none';
        });
    });

    // Mobile navigation toggle (if you want to add hamburger menu later)
    let mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    let navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
});

// Function to update form links when provided
function updateFormLinks(waitlistUrl, companionUrl) {
    const waitlistBtn = document.getElementById('waitlist-btn');
    const companionBtn = document.getElementById('companion-btn');

    if (waitlistBtn && waitlistUrl) {
        waitlistBtn.href = waitlistUrl;
        waitlistBtn.removeEventListener('click', handlePlaceholderClick);
    }

    if (companionBtn && companionUrl) {
        companionBtn.href = companionUrl;
        companionBtn.removeEventListener('click', handlePlaceholderClick);
    }
}

function handlePlaceholderClick(e) {
    e.preventDefault();
    alert('Form link will be provided soon. This is a placeholder for now.');
} 