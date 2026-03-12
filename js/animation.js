import { animate, stagger, splitText } from 'https://esm.sh/animejs';

document.addEventListener('DOMContentLoaded', () => {
  // Split text into characters and animate
  const h2Elements = document.querySelectorAll('h2');
  
  h2Elements.forEach(h2 => {
    const { chars } = splitText(h2, { words: false, chars: true });
    
    if (chars && chars.length > 0) {
      animate(chars, {
        y: [
          { to: '-2.75rem', ease: 'outExpo', duration: 600 },
          { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        rotate: {
          from: '-1turn',
          delay: 0
        },
        delay: stagger(50),
        ease: 'inOutCirc',
        loopDelay: 1000,
        loop: true
      });
    }
  });

  // Toggle billing prices
  const toggle = document.getElementById('toggleBilling');
  const prices = document.querySelectorAll('.price');

  if (toggle) {
    toggle.addEventListener('change', () => {
      prices.forEach(price => {
        if (toggle.checked) {
          price.textContent = price.dataset.year;
        } else {
          price.textContent = price.dataset.month;
        }
      });
    });
  }

  // Contact form submission
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let subject = document.getElementById('subject').value;
      let message = document.getElementById('message').value;

      let body =
        'Name: ' + name + '%0D%0A' +
        'Email: ' + email + '%0D%0A%0D%0A' +
        'Message:%0D%0A' + message;

      window.location.href =
        'mailto:murungiinnocent197@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + body;
    });
  }
});