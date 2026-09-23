const entrada = require('readline-sync');

const quantidadeHora = entrada.questionInt("Quantas caixas sao produzidas por hora?: ");
const horasTrab = entrada.questionInt("Por favor, informe a quantidade de horas trabalhadas: ");

const total = quantidadeHora * horasTrab

console.log(`Producao por hora: ${quantidadeHora}`);
console.log(`Horas trabalhadas: ${horasTrab}`);
console.log(`Producao total: ${total}`)