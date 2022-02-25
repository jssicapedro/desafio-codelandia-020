const menuToggle = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

console.log(menu);

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const items = document.querySelectorAll('.menu li');

items.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  })
});