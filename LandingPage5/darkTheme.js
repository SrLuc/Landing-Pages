

const corpo = document.querySelector('html');
const botao = document.getElementById('btn');
botao.addEventListener('click', function trocarTema(){
    corpo.classList.toggle('dark');
});