const diferenca = (valor1, valor2) => {
    if (valor1 < valor2){
        let aux = valor1
        valor1 = valor2
        valor2 = aux
    }
    let resultado = valor1 -  valor2
    return console.log(resultado)
}
let resultado1 = diferenca(10,20)
let resultado2 = diferenca(100,50)

console.log("----------------------------------------")

const exercicio2 = nome => console.log(nome.toUpperCase())  

exercicio2("phelipe")
exercicio2("eduardo")
exercicio2("victor")

