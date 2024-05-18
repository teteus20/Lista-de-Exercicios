let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btValorfinal = document.querySelector("#btValorfinal");
let h2resultado = document.querySelector("#h2resultado");
function multiplicarvalores(){
    let valor1 = ipValor1.value;
    let valor2 = ipValor2.value;
    let multiplica = valor1 * valor2;
    h2resultado.textContent = multiplica

}

btValorfinal.onclick = function(){
    multiplicarvalores()
}