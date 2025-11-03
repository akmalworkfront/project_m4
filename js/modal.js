const modalWindow = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');


const openModalWindow = () => {
  modalWindow.classList.add('open');
  document.body.style.overflow = "hidden";
}

const closeModalWindow = () => {
  modalWindow.classList.remove('open');
  document.body.style.overflow = "";
}
modalTrigger.addEventListener('click', () => {
  openModalWindow();
});

modalWindow.querySelector('.modal_close').addEventListener('click', () => {
  closeModalWindow();
});

modalWindow.addEventListener('click', () => {
  if (event.target === modalWindow && !modalWindow.querySelectorAll('input').value) {
    closeModalWindow();
  }
})










// Это мой вариант кода (написан исходя из собственных знаний и логики действий)

// const documentHeight = document.body.offsetHeight
// let windowHeight = 0;
// let windowScroll = 0;
// let scrollTotal = 0;

// const scroll = () => {
//   windowHeight = window.innerHeight
//   windowScroll = window.scrollY
//   scrollTotal = (windowHeight + windowScroll)

//   if (scrollTotal === documentHeight) {
//     openModalWindow();
//     removeEventListener("scroll", scroll)
//   }
// }
// window.addEventListener('scroll', scroll)


// Тут делаю проверку, открывалось ли уже окно при скролле до низа страницы, если да то  
let modalOpened = false

const timeoutId = setTimeout(() => {
  if (!modalOpened) {
    modalOpened = true;
    openModalWindow();
    window.removeEventListener('scroll', onScroll); 
  }
}, 10000);






// Ну а это второй вариант (основан на анализе работ учеников, которые проходили курс раньше меня)
// После просмотра одного из примеров, проект: https://cult-of-the-lamb-three.vercel.app/,
// я сравнил свой код с кодом одного из прежних учеников.
// Позже я даже сравнил оба варианта через ИИ. GPT разложил мне все по фактам:
// второй вариант действительно оказался проще, понятнее и надёжнее.
// Даже такие мелочи, как имена переменных и структура функции, там продуманы лучше.
// Принял это с лёгким сожалением. С пониманием того, что моей логики пока немного не хватает,
// но и это опыт.
// Единсвенное мне не понятно это действие: document.body.offsetHeight - 1. В чем тут логика? 

const onScroll = () => {
  const scroll = window.innerHeight + window.scrollY
  if (scroll >= document.body.offsetHeight - 1) {
    modalOpened = true;
    openModalWindow()
    clearTimeout(timeoutId) // Делаю очистку timeoutId, что бы не вызывать повторно окно через 10 сек. 
    removeEventListener("scroll", onScroll)
  }
}

window.addEventListener('scroll', onScroll)

