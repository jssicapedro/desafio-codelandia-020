const menuToggle = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

console.log(menu);

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const item = document.querySelector('.menu li');

item.addEventListener('click', () => {
  menu.classList.remove('active');
})