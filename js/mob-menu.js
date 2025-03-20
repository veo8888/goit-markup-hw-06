const openMobBtn = document.getElementById('open-mob-menu');
const closeMobBtn = document.getElementById('close-mob-menu');
const mobileMenu = document.getElementById('mobile-menu');

const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalWindow = document.getElementById('modal-window');

openMobBtn.addEventListener("click", () => {
  mobileMenu.classList.add('menu-open')
  document.body.classList.add('no-scroll');
})

closeMobBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-open');
  document.body.classList.remove('no-scroll');
});


openModalBtn.addEventListener('click', () => {
  modalWindow.classList.add('is-open');
  document.body.classList.add('no-scroll');
});

closeModalBtn.addEventListener('click', () => {
  modalWindow.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});
