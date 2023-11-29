import cursos from "./modulos/cursos.js"

/* 09-filter.js
filter (Filtrar)
Passa por elementos de um array (usado a função callback) e retornar valores de acordo com uma ou mais condições gerando um novo array.
*/

const vendas =  [1500, 3000, 1000, 500, 750]
const meta = 1000

// gerando um array com valores que bateram a meta
const vendasAcimaDaMeta = vendas.filter((venda)=>{
    return venda >= meta
})

//console.log(vendasAcimaDaMeta)

// exemplo 2 
const alunos = ["Nicolas", "Eliel", "Kaue", "Barbosa", "Aline", "Melissa", "Marino"]
const resultados = alunos.filter( aluno => {
    return aluno.startsWith("M") && aluno.endsWith("a")
})

//console.log(resultados)

/* Filtrando cursos */

// Filtrando por cursos da categoria desing
const cursosDesign = cursos.filter( curso => curso.categoria === "Design")

//console.log(cursosDesign)

//Cursos menos o design
const cursosMenosDesign = cursos.filter( curso => curso.categoria != "Design")
//console.log(cursosMenosDesign)

const exercicio = cursos.filter( curso => curso.preco >= 600 && curso.categoria === "Front-End" || curso.categoria === "Mobile")

//console.log(exercicio)

/* Desafio: gerar um novo array somente com os titulos dos cursos da categoria Mobile*/
const desafio = cursos
.filter( curso => curso.categoria === "Mobile")
.map(curso => curso.titulo)

console.log(desafio)