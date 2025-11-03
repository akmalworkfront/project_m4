const slider = document.querySelector('.slider__wrap');
const slides = document.querySelectorAll('.slider__wrap .slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let offset = 0;
slides[0].classList.add('active-slide');

next.onclick = () => {
  const active = document.querySelector('.active-slide');
  const nextEl = active.nextElementSibling;

  if (nextEl && nextEl.classList.contains('slide')) {
    const slideWidth = active.offsetWidth;
    offset -= slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
    active.classList.remove('active-slide');
    nextEl.classList.add('active-slide');
  } else {
   
    offset = 0;
    slider.style.transform = `translateX(0)`;
    document.querySelector('.active-slide').classList.remove('active-slide');
    slides[0].classList.add('active-slide');
  }
};

prev.onclick = () => {
  const active = document.querySelector('.active-slide');
  const prevEl = active.previousElementSibling;

  if (prevEl && prevEl.classList.contains('slide')) {
    const slideWidth = prevEl.offsetWidth;
    offset += slideWidth;
    active.classList.remove('active-slide');
    prevEl.classList.add('active-slide');
  } else {

    const lastSlide = slides[slides.length - 1];
    offset = -(lastSlide.offsetWidth * (slides.length - 1));
    slider.style.transform = `translateX(${offset}px)`;
    active.classList.remove('active-slide');
    lastSlide.classList.add('active-slide');
  }
};

setInterval(() => {
  next.click();
}, 5000);
