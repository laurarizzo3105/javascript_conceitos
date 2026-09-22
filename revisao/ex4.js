const entrada = require('readline-sync');

const materiais = [];

for (let i= 0; i < 4; i++){
    const material = {
        nome: entrada.question("Digite o nome do material: "),
        quantidade: entrada.questionInt("Digite a quantidade: "),
        estoqueMinimo: entrada.questionInt("Digite o estoque minimo: ")
    }
    materiais.push(material);
}
console.log("===== RELATORIO DE ESTOQUE =====");

for (let i = 0; 1< materiais.length; i++){
    const material = materiais[i];

    let situação;
    if (material.quantidade < material.estoqueMinimo){
        situacao = "ESTOQUE BAIXO";
    }else{
        situacao = "ESTOQUE OK";
    }
    console.log(`material: ${material.nome}`)
    console.log(`quantidade: ${material.quantidade}`)
    console.log(`estoque minimo: ${material.estoqueMinimo}`)
    console.log(`Situacao: ${situacao}`)
    console.log("-".repeat(20)); 
}
