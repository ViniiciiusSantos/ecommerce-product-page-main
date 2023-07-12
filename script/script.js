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
const fechar = document.querySelector('.close');
const modalJanela = document.querySelector('.modal-janela');
const imgContainer = document.querySelector('#img-modal');

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

imgContainer.addEventListener('click', () => {
    modalJanela.style.display = 'flex';
});

fechar.addEventListener('click', () => {
    modalJanela.style.display = 'none';
});

var miniImgsModal = document.querySelectorAll('#mini-img img');
var imgPrincipalModal = document.querySelector('#img-principal');
var indiceAtual = 0;

function handleMiniImgClickModal() {
    var srcMaior = this.getAttribute('data-new-src');
    imgPrincipalModal.src = srcMaior;

    miniImgsModal.forEach(function(img, index) {
        img.classList.remove('selecio');
        if(index === indiceAtual) {
            img.classList.add('selecio');
        }
    });
}
function exibirImagem(index) {
    if (index >= 0 && index < miniImgsModal.length) {
        var miniImg = miniImgsModal[index];
        var srcMaior = miniImg.getAttribute('data-new-src');
        imgPrincipalModal.src = srcMaior;
        miniImgsModal.forEach(function(img) {
            img.classList.remove('selecio');
        });
        miniImg.classList.add('selecio');
        indiceAtual = index;
    }
}

document.getElementById('btn-anterior').addEventListener('click', function() {
    exibirImagem(indiceAtual - 1);
});

document.getElementById('btn-proximo').addEventListener('click', function() {
    exibirImagem(indiceAtual + 1);
});

miniImgsModal.forEach(function(miniImg, index) {
    miniImg.addEventListener('click', function() {
        exibirImagem(index);
    });
});

cartLogo.addEventListener('click', miniMenu)