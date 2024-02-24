//[M1S04] Ex 3 - Arrow function: Crie uma arrow function que recebe um array de números e calcula a média deles.
// OBS: para pegar o tamanho de um array use nomeDoArray.length

const funcao = (array) => {
    let soma = 0;
    for (element of array){
        soma = soma + element;
    }
    let media = soma/array.length;
    console. log (media) ;
}

let numeros = [1,2,3,4,5,6];
funcao (numeros);
