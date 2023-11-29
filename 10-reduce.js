import cursos from "./modulos/cursos.js"

/* 10-reduce.js
reduce (reduzir)
Passa por elementos de um array (usado a função callback com parametros, e um parametro com valor inicial) e retornar um unico valores/resultado.pode ser util para operações matemáticas que gera um único resultado. */

// exemplo 1
//const valores = [10, 5, 50, 200, 1000]
//const total = valores.reduce((acumulador, valor) => {
  //  return acumulador + valor
//}, 0)
//console.log(valores)
//console.log(total)

// sem reduce
//let acumulador = 0
//for (let i = 0; i < valores.length; i++) {
    //acumulador = acumulador + valores[i];
//}

//console.log(acumulador)


//exercicio
const exercicio = cursos.filter( curso => curso.categoria === "Front-End" || curso.categoria === "Mobile").reduce((acumulador, curso) => {
    return acumulador + curso.preco
}, 0)

console.log(exercicio)