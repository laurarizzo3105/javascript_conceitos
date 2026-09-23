const entrada = require('readline-sync');

const nome = entrada.question("Digite o nome do produto: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const preco = entrada.questionFloat("Por favor, informe o preco do produto: ");
const total = quantidade * preco  

console.log(`Nome do produto: ${nome}`);
console.log(`preco unitario: ${preco}`);
console.log(`Quantidade solicitada: ${quantidade}`);
console.log(`O custo do lote de pecas para reposicao é de: ${total}`)
