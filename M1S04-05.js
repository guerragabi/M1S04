//[M1S04] Ex 5 - Laço while: Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, 
// será apenas aceita três tipos de avaliação: ruim, bom e excelente. Depois verifique quantas pessoas classificaram a série como ruim.

const prompt = require('prompt-sync')();

let resultado = 0;
let entrevistas = 0;

while (entrevistas < 4){
    let avaliacao = prompt("Qual sua avaliação da série Stranger Things: ruim, boa ou excelente?");
    if (avaliacao == "ruim"){
        resultado++;
    }
    entrevistas++;
}

console.log("Total de pessoas que avaliaram Stranger Things como ruim:", resultado);
