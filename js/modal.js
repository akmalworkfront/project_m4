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
  if (event.target === modalWindow) {
    closeModalWindow();
  }
})