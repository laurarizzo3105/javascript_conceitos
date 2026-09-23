const entrada = require('readline-sync');

const nome = entrada.question("Digite o nome do produto: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const preco = entrada.questionFloat("Por favor, informe o preco do produto: ");
const total = preco * quantidade

