// JavaScript for interactive features
// Smooth mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Pricing toggle logic
const toggleBilling = document.getElementById('toggleBilling');
const priceElements = document.querySelectorAll('.price-card .price');
toggleBilling.addEventListener('change', () => {
    const yearly = toggleBilling.checked;
    priceElements.forEach(el => {
        el.textContent = yearly ? el.dataset.year : el.dataset.month;
    });
});

// FAQ collapse/expand
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Contact form placeholder submit
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    contactForm.reset();
});

// Optionally implement testimonial rotation (simple setInterval)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials.forEach((t, i) => {
        t.style.display = i === testimonialIndex ? 'block' : 'none';
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}, 5000);

// Initialize display state for testimonials
testimonials.forEach((t, i) => {
    t.style.display = i === 0 ? 'block' : 'none';
});

// Smooth scrolling for anchor links is handled by CSS scroll-behavior
// Additional JS could be added for offset if header height causes issues.