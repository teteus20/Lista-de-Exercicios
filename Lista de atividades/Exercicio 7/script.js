document.getElementById("verificarButton").addEventListener("click",



function() {
    
const numero = parseInt(document.getElementById("numero").value);
    
const mensagem = (numero % 2 !== 0) ? "ímpar" : "par";

alert(`O número ${numero} é ${mensagem}.`);
});