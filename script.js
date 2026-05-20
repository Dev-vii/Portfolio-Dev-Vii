// Transformar scroll vertical em horizontal
document.addEventListener('wheel', (e) => {
    // Impedir o scroll vertical padrão
    e.preventDefault();

    // Converter movimento vertical em movimento horizontal com multiplicador
    window.scrollBy({
        left: e.deltaY * 8,
        top: 0,
        behavior: 'smooth'
    });
}, { passive: false });

// Interação de cartão com mouse

const cards = document.querySelectorAll('#tecs ul li');
let text = document.querySelectorAll('#tecs .tecbox1 .tectext');
let circle  = document.querySelectorAll('#tecs .tecbox1 #circles .circle');

cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (rect.height / 2 - y) / 25;
        const rotateY = (x - rect.width / 2) / 25;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('pointerleave', () => {
        card.style.transform = "";
    });
});

// LISTA DE TECNOLOGIAS

let botaoAnter = document.getElementById('anter');
let botaoProx = document.getElementById('prox');

let section = document.getElementsByClassName('container');


let active = 0
let Primeiro = 0

// LENGTH = 4 CARTAS, POSIÇÃO FINAL É 3, POR ISSO -1
let Ultimo = cards.length - 1


// BOTÃO ANTERIOR
botaoAnter.onclick = () => {
    let cardAntigo = document.querySelector('#tecs .tecbox2 ul li.ativo');
    let textAntigo = document.querySelector('#tecs .tecbox1 .tectext.textoAtivo');
    let circleAntigo = document.querySelector('#tecs .tecbox1 #circles .circle.cirAtivo');
    cardAntigo.classList.remove('ativo');
    textAntigo.classList.remove('textoAtivo');
    circleAntigo.classList.remove('cirAtivo');


    if (active - 1 < Primeiro) {
        active = Ultimo;
    } else {
        active--;
    }
    cards[active].classList.add('ativo');
    text[active].classList.add('textoAtivo');
    circle[active].classList.add('cirAtivo');
}

// BOTÃO PRÓXIMO
botaoProx.onclick = () => {
    let cardAntigo = document.querySelector('#tecs .tecbox2 ul li.ativo');
    let textAntigo = document.querySelector('#tecs .tecbox1 .tectext.textoAtivo');
    let circleAntigo = document.querySelector('#tecs .tecbox1 #circles .circle.cirAtivo');
    cardAntigo.classList.remove('ativo');
    textAntigo.classList.remove('textoAtivo');
    circleAntigo.classList.remove('cirAtivo');

    if (active + 1 > Ultimo) {
        active = 0
    } else {
        active++
    }
    cards[active].classList.add('ativo');
    text[active].classList.add('textoAtivo');
    circle[active].classList.add('cirAtivo');
}