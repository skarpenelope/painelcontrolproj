
//mudar o valor total na página Entradas 
let valorEntAtual = 30;

document.getElementById("valorEnt").innerHTML = `<i>${valorEntAtual}</i>`

//dicionar nova linha na lista de entrada
n = 0;
function addlinha(){
    var element = document.getElementById("list");
    var copy = document.cloneNode(element);
    n++;

    copy.getElementByTagName('valor');
    copy.getElementByTagName('fontes');
    copy.getElementByTagName('data');

    element.parentNode.appendChild(copy);

}