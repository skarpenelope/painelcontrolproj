
//mudar o valor total na página Entradas 
let valorEntAtual = 30;

document.getElementById("valorEnt").innerHTML = `<i>${valorEntAtual}</i>`

//dicionar nova linha na lista de entrada
n = 0;
const form = document.getElementById("list");
let formCount = 0;

function addLinha(){
    const newForm = document.createElement('div');
    newForm.innerHTML = `
    <fieldset>

                    <input type="number" name="valor" id="value">
                    <select name="fontes" id="meiodeent">
                        <option value="trabalho">trabalho</option>
                        <option value="vendas">vendas</option>

                    </select>
                    <input type="date" name="data" id="date">
                    <button id="button+" class="button-plus" onclick="addLinha()">+</button>

    </fieldset>`;
           
    form.appendChild(newForm);

};

newForm.querySelector("button-plus").addEventListener('click', function(event) {
    event.preventeDefault();
    addLinha();
    
})
console.log("vc clicou no botão");

document.querySelector("button-plus").addEventListener('click', function(event) {
    event.preventDefault();
    addLinha();
})



/*document.getElementById("button+").addEventListener('click', function(){
    addLinha();
    
})*/


/*function addlinha(){
    var linha = document.getElementById("list");
    var copy = document.cloneNode(linha);
    n++;

    copy.getElementByTagName('valor');
    copy.getElementByTagName('fontes');
    copy.getElementByTagName('data');

    element.parentNode.appendChild(copy);

}*/
