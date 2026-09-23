const entrada = require("readline-sync");

const nivel = entrada.question("Digite o nivel de vibração do equipamento:  ")

if (nivel < 3) {
    console.log("situação: ESTÁVEL.");
}
else if (nivel >3 && nivel <6) {
    console.log("situação: ATENÇÃO.");
}
else if (nivel > 6){
    console.log("situação: CRÍTICA.");
}

