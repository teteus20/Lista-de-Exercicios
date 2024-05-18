let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");

function somarValores(){
    let valor1 = Number (ipValor1.value);
    let valor2 = Number (ipValor2.value);
    let resultado = valor1 + valor2;
    h3Resultado.textContent = String(resultado);
}

btSomar.onclick = function(){
    somarValores();
}

let ipValor3 = document.querySelector("#ipValor3");
let ipValor4 = document.querySelector("#ipValor4");
let btsubtrair = document.querySelector("#btsubtrair");
let h4resultado = document.querySelector("#h4resultado");

function subtrairValores(){
    let valor3 = Number (ipValor3.value);
    let valor4 = Number (ipValor4.value);
    let resultado = valor3 - valor4;
    h4resultado.textContent = String(resultado);
}

btsubtrair.onclick = function(){
    subtrairValores();
}