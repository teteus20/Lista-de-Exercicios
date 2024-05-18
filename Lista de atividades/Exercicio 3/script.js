let SaldoAtual = document.querySelector("#SaldoAtual");
let btValorFinal = document.querySelector("#btValorFinal");

function CalcularSaldocomReajuste (Saldo){
    const Reajuste = Saldo * 0.01;
    const NovoSaldo = Saldo + Reajuste;
    return NovoSaldo;
}

btValorFinal.onclick = function (){
    let Saldo = parseFloat(SaldoAtual.value);
    let NovoSaldo = CalcularSaldocomReajuste (Saldo);
    console.log("Novo Saldo com Reajuste: " + NovoSaldo);

}