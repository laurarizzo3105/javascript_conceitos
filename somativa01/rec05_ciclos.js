const entrada = require("readline-sync");

const producaociclo = Number(entrada.question(`Digite qual a produção por ciclo: `)) 

let acumulada = 0;
    console.log(`=== RESULTADO DA PRODUCAO ===`) 

for (let ciclo =1; ciclo <=12; ciclo++){ 
    acumulada += producaociclo 
    console.log(`Ciclo ${ciclo} - Producao acumulada: ${acumulada}`); }