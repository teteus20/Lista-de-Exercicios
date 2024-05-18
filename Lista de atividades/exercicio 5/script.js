let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let btValorFinal = document.querySelector("#btValorFinal");

function MaiorNumero (){
    let valor1 = Number(ipValor1.value);
    let valor2 = Number(ipValor2.value);
    
    if (valor1 > valor2){
        alert("o valor1 é maior do que o valor2");

    } else {
        alert("valor2 é maior que valor1");

    }

}

btValorFinal.onclick = function (){
    MaiorNumero();
}

