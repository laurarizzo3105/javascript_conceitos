function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    }
    if (percentual >= 75) {
        return "ADEQUADO";
    }
    return "REVISAR PROCESSO";
}

let total = prompt("Digite a quantidade total:");
let util = prompt("Digite a quantidade útil:");

let percentual = calcularAproveitamento(+util, +total);
let classificacao = classificarAproveitamento(percentual);

console.log("Total: " + total);
console.log("Quantidade Útil: " + util);
console.log("Percentual: " + percentual + "%");
console.log("Classificação: " + classificacao);
