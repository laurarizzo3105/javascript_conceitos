const entrada = require('readline-sync');

const producao = entrada.questionInt('Digite a producao de produtos por ciclo: ');

let acumulado = 0;

for (let ciclo = 1; ciclo <= 12; ciclo++) {
  acumulado += producao;
  console.log('ciclo: ${ciclo} | producao acumulada: ${acumulado} ');
};