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


// Função para trocar a cor do arrow icon ao passar o mouse

const btnPrimary = document.querySelectorAll('.btn__primary');

btnPrimary.forEach((btn) => {
  const arrowIcon = btn.querySelector('.arrow-icon'); // pega o ícone dentro do botão

  btn.addEventListener('mouseover', () => {
    arrowIcon.classList.remove('bg-cor-3', 'cor-1');
    arrowIcon.classList.add('bg-cor-1', 'cor-2');
  });

  btn.addEventListener('mouseout', () => {
    arrowIcon.classList.remove('bg-cor-1', 'cor-2');
    arrowIcon.classList.add('bg-cor-3', 'cor-1');
  });
});
