// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let num1 = prompt("Insira o primeiro valor: ")
let num2 = prompt("Insira o segundo valor: ")

if (num1 === num2) {
    console.error("Os valores devem ser diferentes!")
}
else if (num1 > num2) {
    console.log(`Valores ordenados: ${num2}, ${num1}`)
}
else {
    console.log(`Valores ordenados: ${num1}, ${num2}`)
}
