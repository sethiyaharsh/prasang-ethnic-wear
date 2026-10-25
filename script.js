const slides = document.querySelectorAll('.hero .slide');
const ctrl   = document.querySelector('.hero .ctrl');
const prev   = document.querySelector('.hero .prev');
const next   = document.querySelector('.hero .next');

let current = 0;
let timer;

// create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
  dot.addEventListener('click', () => { show(i); restart(); });
  ctrl.appendChild(dot);
});
const dots = ctrl.querySelectorAll('button');

function show(n) {
  current = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('on', i === current));
  dots.forEach((d, i) => d.classList.toggle('on', i === current));
}

function restart() {
  clearInterval(timer);
  timer = setInterval(() => show(current + 1), 5000);
}

prev.addEventListener('click', () => { show(current - 1); restart(); });
next.addEventListener('click', () => { show(current + 1); restart(); });

show(0);
restart();