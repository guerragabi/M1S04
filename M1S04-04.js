//[M1S04] Ex 4 - Funções de callback: Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima. 
//Esta função deve simular uma operação de adição, onde os dois números são somados. Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima.
//OBS: a função anônima apenas irá imprimir o resultado passado pelo parâmetro.

const prompt = require('prompt-sync')();

function adicao(num1, num2, anonima){
    let sum = num1 + num2;
    anonima(sum);
}

let numero1 = Number(prompt("Digite um número:"));
let numero2 = Number(prompt("Digite um número:"));

adicao(numero1, numero2, (soma) => {
    console.log("O resultado da soma é:", soma);
})
