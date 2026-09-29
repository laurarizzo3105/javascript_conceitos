const entrada = require("readline-sync");

function calcularEficiencia(real, prevista) {
    return (real / prevista) * 100;
}

function classificarEficiencia(percentual) {
    if (percentual >= 90) {
        return "META ATINGIDA";
    } else if (percentual >= 70) {
        return "ATENÇÃO";
    } else {
        return "ABAIXO DA META";
    }
}
