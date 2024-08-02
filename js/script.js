import react from React
//mudar o valor total na página Entradas 
const entrada = document.querySelector('destaque');

let valorEntAtual = 20.000;

document.getElementById("valorEnt").innerHTML = `<i>${valorEntAtual}</i>`

//dicionar nova linha na lista de entrada
function addlinha(){
    var element = document.getElementById("list");
    var copy = element.cloneNode(true);
    n++;

    copy.getElementByTagName('valor');
    copy.getElementByTagName('fontes');
    copy.getElementByTagName('data');

    element.parentNode.appendChild(copy);

}