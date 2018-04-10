/*
Faça uma função chamada imprime que
receba dois parâmetros: um array de
strings e uma função.Dentro da função
imprime chame a função do segundo parâmetro
 para cada elemento do array. Exemplo:
*/

let mentores = [ 'Álvaro', 'Olimar', 'Matheus', 'Leco', 'Yasser']

function imprime(mentores , func){
if (typeof func == 'function') {
       for (let i = 0; i < mentores.length; i++) {
          func(mentores[i])
       }
}
  else {
    console.log("ERRO")
  }
}

function funcImprime(mentor) {
    console.log('Olá, querido mentor:' + mentor)

}

imprime(mentores, funcImprime)
