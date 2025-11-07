// SCRIPT PARA EFEITO DE MOVER DO MENU NAVBAR
const menu = document.querySelector('.header__menu');
const border = document.querySelector('.menu-border');
const items = document.querySelectorAll('.header__menu-item');
const homeItem = document.querySelector('[data-home]');

function moveBorderTo(element) {
  const rect = element.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  border.style.width = `${rect.width}px`;
  border.style.height = `${rect.height}px`;
  border.style.left = `${rect.left - menuRect.left}px`;
  border.style.top = `${rect.top - menuRect.top}px`;
}

// posição inicial (Home)
moveBorderTo(homeItem);

// mover ao passar o mouse
items.forEach((item) => {
  item.addEventListener('mouseenter', () => moveBorderTo(item));
});

// voltar pro Home ao sair da navbar
menu.addEventListener('mouseleave', () => moveBorderTo(homeItem));
