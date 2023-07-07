const cartLogo = document.querySelector('.logo-cart');
const asideIn = document.querySelector('aside');

function miniMenu() {
    asideIn.classList.toggle('aparecer');
}

cartLogo.addEventListener('click', miniMenu)