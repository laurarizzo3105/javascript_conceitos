const entrada = require('readline-sync');

const produto = entrada.question("Digite o produto:  ");
const qtdPorHora = entrada.questionInt("Digite a quantidade produzida por hora:  ");
const HorasTrabalhadas = entrada.questionTnt("Digite as horas trabalhadas:  ");

const total = qtdPorHora * HorasTrabalhadas

console.log('\n=== Relatorio de producao');
console.log('Produto: ${produto}');
console.log('Producao por Hora: ${qtdPorHora}');
console.log('Horas Trabalhadas: ${HorasTrabalhadas}');
console.log('Total de peças produzidas ${total}');

