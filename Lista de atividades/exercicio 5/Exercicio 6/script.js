let Ex6Numero1 = document.querySelector("#Ex6Numero1");
let Ex6Numero2 = document.querySelector("#Ex6Numero2");
let Ex6Numero3 = document.querySelector("#Ex6Numero3");
let Ex6Numero4 = document.querySelector("#Ex6Numero4");
let btResultado = document.querySelector("#btResultado");


function MenorNumero2 (){
    let Numero1 = Number(Ex6Numero1.value);
    let Numero2 = Number(Ex6Numero2.value);
    let Numero3 = Number(Ex6Numero3.value);
    let Numero4 = Number(Ex6Numero4.value);


    if (Numero1 <= Numero2 && Numero1<=Numero3 && Numero1<=Numero4){
        alert("Numero1 é o menor Número.");

    } else if (Numero2 <= Numero1 && Numero2 <= Numero3 && Numero2 <= Numero4){
        alert("Numero2 é o menor Número.");

    } else if (Numero3 <= Numero1 && Numero3 <= Numero2 && Numero3 <= Numero4){
        alert("Numero3 é o menor Número.");

    } else {
        alert("Numero4 é o menor Número.");
    }

}

btResultado.onclick = function (){
    MenorNumero2();
}