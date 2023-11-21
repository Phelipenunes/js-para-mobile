let resultado
function diferenca(valor1, valor2){
    if (valor1 < valor2){
        let aux = valor1
        valor1 = valor2
        valor2 = aux
    }
    resultado = valor1 -  valor2
}

diferenca(10,20)
console.log(resultado)

diferenca(100,50)
console.log(resultado)