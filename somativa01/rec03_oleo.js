const entrada = require("readline-sync");

const nivel = entrada.question("Qual o nivel de oleo?: ")

if (nivel >= 40 && nivel <=80 ) {
    console.log("NÍVEL NORMAL");
}
else {
    console.log("INSPEÇÃO NECESSÁRIA");
}