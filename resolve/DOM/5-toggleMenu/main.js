const btn = document.querySelector('.btn-toggle');
const menu = document.querySelector('.main-menu');

btn.addEventListener('click', function () {
  menu.classList.toggle('is-active');
});
