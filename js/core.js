document.addEventListener('DOMContentLoaded', () => {
  // FAQ аккордеон
  const toggles = document.querySelectorAll('.vacancy-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.toggle('active');
      const symbol = btn.querySelector('.symbol');

      toggles.forEach(otherBtn => {
        const otherItem = otherBtn.parentElement;
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherBtn.querySelector('.symbol').textContent = '+';
        }
      });

      symbol.textContent = isActive ? '−' : '+';
    });
  });

  // Горизонтальний скрол
  const mediaCarousel = document.querySelector('.media-carousel');
  if (mediaCarousel) {
    mediaCarousel.addEventListener('wheel', e => {
      e.preventDefault();
      mediaCarousel.scrollLeft += e.deltaY;
    });
  }

  // Swiper: знищена техніка
  new Swiper('.destroyed-tech .swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.destroyed-tech .swiper-button-next',
      prevEl: '.destroyed-tech .swiper-button-prev',
    },
    pagination: {
      el: '.destroyed-tech .swiper-pagination',
      clickable: true,
    },
  });

  // Swiper: командир
  new Swiper('.commander-slider .swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.commander-slider .swiper-button-next',
      prevEl: '.commander-slider .swiper-button-prev',
    },
    pagination: {
      el: '.commander-slider .swiper-pagination',
      clickable: true,
    },
  });
});

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97968aec6b389f3e',t:'MTc1NjkxNjA5My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();


// Popup scroll trigger
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.popup-close');
let popupShown = false;

window.addEventListener('scroll', () => {
  if (popupShown) return;
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  if (scrollPercent > 0.85) { // показати коли дійшли майже до кінця
    popup.style.display = 'flex';
    popupShown = true;
  }
});

if (closePopup) {
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


// Анімація при скролі (reveal)
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // анімація запускається тільки 1 раз
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));