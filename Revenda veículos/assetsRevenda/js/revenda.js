document.getElementById ("btnCalcularPreco").addEventListener("click", function(){

    var nomeDoCarro = document.getElementById("inputCarro").value;
    var precoTotal = parseFloat(document.getElementById)(inputPreco).value);
    
    var valorEntrada= 0.3*precoTotal;
    var valorParcelas = (precoTotal-valorEntrada) /12;
    
    document.getElementById("NomeDoCarro").textContent= "Nome do Carro" + nomeDoCarro;
    document.getElementById("valorEntrada").textContent="Valor da Entrada: R$ " + valorEntrada.toFixed(2);
    document.getElementById("valorParcelas").textContext= "Valor das Parcelas (12x): R$" + valorParcelas.toFixed(2);
}
)
