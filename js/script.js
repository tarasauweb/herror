const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
