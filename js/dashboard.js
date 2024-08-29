let valorEntAtual = 0;
//document.getElementById("valorEnt").innerHTML = `<i>${valorEntAtual}</i>`
//document.getElementById("valorEntSa").innerHTML = `<i>${valorEntAtual}</i>`
document.addEventListener('DOMContentLoaded', () => {
    const valorEntradas = localStorage.getItem('valorEntradas') || '0.00';
    const valorSaidas = localStorage.getItem('valorSaidas') || '0.00';

    document.getElementById("valorEnt").innerHTML = `<i>${valorEntradas}</i>`;
    document.getElementById("valorEntSa").innerHTML = `<i>${valorSaidas}</i>`;
});