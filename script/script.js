const cartLogo = document.querySelector('.logo-cart');
const asideIn = document.querySelector('aside');
const menos = document.querySelector('.menos');
const mais = document.querySelector('.mais');
const numero = document.querySelector('.number');
const vazio = document.querySelector('.vazio');
const produtos = document.querySelector('.produtos');
const buttonAdd = document.querySelector('.button-add');
const vezes = document.querySelector('.vezes');
const total = document.querySelector('.total');
const compra = document.querySelector('.compra');
const lixo = document.querySelector('.lixo');

let adicional = 0;

mais.addEventListener('click', () => {
    adicional++;
    numero.textContent = adicional;
    
})

menos.addEventListener('click', () => {
    adicional--;
    numero.textContent = adicional;
})

buttonAdd.addEventListener('click', () => {
    if (adicional >= 1) {
        vazio.style.display = 'none';
        produtos.style.display = 'block';
    }
    let vezes = adicional;
    let total = adicional * 125.00.toFixed(2);
    compra.innerHTML = "$125.00" + " x " + vezes + " <span class='total'>" + "$" + total + "</span>";
})

lixo.addEventListener('click', () => {
    produtos.style.display = 'none';
    vazio.style.display = 'block';
})

function miniMenu() {
    asideIn.classList.toggle('aparecer');
}

window.addEventListener('load', function() {
    var miniImgs = document.querySelectorAll('.mini-img img');
    var imgPrincipal = document.querySelector('.img-principal');
    miniImgs.forEach(function(miniImg) {
    miniImg.addEventListener('click', function() {
        var srcMaior = this.getAttribute('data-src-maior');
        imgPrincipal.src = srcMaior;
        miniImgs.forEach(function(img) {
        img.classList.remove('selecionada');
        });
        this.classList.add('selecionada');
    });
    });
});


cartLogo.addEventListener('click', miniMenu)