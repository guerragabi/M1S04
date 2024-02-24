//[M1S04] Ex 2 - Função: Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

const prompt = require('prompt-sync')();

function parOuImpar(num){
    if (num % 2 == 0) {
        return "Este número é par.";
    } else {
        return "Este número é ímpar";
    }
}
    let numero = Number (prompt ("Digite um número:") ) ;
    let resultado = parOuImpar(numero);
    console. log (resultado);
