const burger = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const offer = document.querySelector('.offer');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
  menu.classList.toggle('active');
  offer.classList.toggle('active');
});
