const entrada = require('readline-sync');

const prod = entrada.question("Digite o produto: ");
const qntdPorHora = entrada.questionInt("Digite a quantidade produzida por hora: ");
const horasTrab = entrada.questionInt("Digite a quantidade de horas trabalhadas: ");

const total = qntdPorHora * horasTrab

console.log('\n ----- RELATORIO DE PRODUCAO -----');
console.log('Produto: ${prod}');
console.log('Producao por hora: ${qntdPorHora}');
console.log('Horas trabalhadas: ${horasTrab}');
console.log('Producao total: ${total}')