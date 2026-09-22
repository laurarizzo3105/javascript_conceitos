const entrada = require('readline-sync');

let total = 0; //acumulador iniciado em 0.

for (let inspecao = 1; inspecao <=6; inspecao++){
    const valor = entrada.questionFloat("Digite a medida da ${inspecao}a:  ");
    total += valor;
}

const media = total / 6;

console.log(`Total de defeitos: ${total}`);
console.log(`Media de defeitos de defeitos: ${media}`);