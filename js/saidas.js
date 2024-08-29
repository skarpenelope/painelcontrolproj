//mudar o valor total na página Entradas 
let valorEntAtual = 0;

function atualizarValorAtual(){
    const inputs = document.querySelectorAll("#list input[name='valor']");

    let soma = 0;

    inputs.forEach(input => {
        soma += parseFloat(input.value) || 0;
    })

    valorEntAtual = soma.toFixed(2);

    document.getElementById("valorEnt").innerHTML = `<i>${valorEntAtual}</i>`

    localStorage.setItem('valorSaidas', valorEntAtual);
}



//dicionar nova linha na lista de entrada
n = 0;
const form = document.getElementById("list");
let formCount = 0;

function addLinha(){
    const newForm = document.createElement('div');
    newForm.innerHTML = `
    <fieldset>
                <div>
                    <input type="number" name="valor" id="value">
                    <input type="date" name="data" id="date">
                    <button id="button+" class="button-plus" onclick="addLinha()">+</button>
                </div>

    </fieldset>`;
           
    form.appendChild(newForm);

    newForm.querySelector("input[name='valor']").addEventListener('input',atualizarValorAtual);

};

document.querySelector("input[name='valor']").addEventListener('input', atualizarValorAtual);



document.addEventListener('DOMContentLoaded', (event) => {
    atualizarValorAtual();
    
})