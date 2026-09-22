const entrada = require('readline-sync');

const producao = entrada.questionInt('Digite a producao de pecas por ciclo: ');

let acumulado = 0;

for (let ciclo = 1; ciclo <= 10; ciclo++) {
  acumulado += producao;
  console.log('ciclo: ${ciclo} | producao acumulada: ${acumulado} ');
};