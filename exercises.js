/* Bem-me-quer

Faça uma função chamada bemMeQuer que receba por argumento o número de
 pétalas da margarida e retorne 'Bem-me-quer' ou 'Mal-me-quer'. Exemplo:

bemMeQuer(4); // retorna 'Bem-me-quer'

*/
/*
bemMeQuer = (petalas) => {
  if(petalas % 2 === 0){
    return 'Bem-me-quer'
  }else {
    return 'Mal-me-quer'
  }
}
console.log(bemMeQuer(4));
console.log(bemMeQuer(1));
console.log(bemMeQuer(1000));
console.log(bemMeQuer(-5));
*/

/*
Faça uma função chamada maiorTexto que receba um array de strings e
retorne o texto com maior número de caracteres. Para testar:
*/


/*var batatasVariadas = new Array("Batata", "Batatão",
"Batata-Gigante", "Batata Mega Hiper Blaster Chuck Norris");


function maiorTexto(arr) {
  let aux= arr[0];
  for (let i=1 ;  i < arr.length; i++)  {
    if(arr[i].length>aux.length){
      aux=arr[i];
    }
  }
  return aux;
}

console.log(maiorTexto(batatasVariadas));
*/

/*Escreva uma função gerarPiramide(niveis) que imprime com console.log uma
pirâmide com uma quantidade de níveis informada por parâmetro, utilizando o
caracter $. Ex:

gerarPiramide(5);
*/

//
// function gerarPiramide (niveis){
//   let cifrao = ''
//   for (let i = 0; i < niveis ; i++) {
//     cifrao += '$'
//     console.log (cifrao)
//   }
// }
//
// gerarPiramide(5)

/*
Funções por parâmetro!?

Crie uma função chamada find que recebe
um array e uma função por parâmetro.
A função (passada por parâmetro)
deverá informar um critério de
busca de elementos dentro
do array e a função find
utilizará este critério para retornar
todos elementos do array que encontram-se
dentro dele.
*/
let arr = [5,2,8,9,6]

function find(arr, func){
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]))
      console.log(arr[i]);
  }
}

function funcFilter (numero){
    return numero % 2 === 0;
  }

find(arr, funcFilter)
