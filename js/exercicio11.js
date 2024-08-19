// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Insira o primeiro valor: '))
let num2 = Number(prompt('Insira o segundo valor: '))
let num3 = Number(prompt('Insira o terceiro valor: '))
let num4 = Number(prompt('Insira o quarto valor: '))
let num5 = Number(prompt('Insira o quinto valor: '))

let arr = Array(num1, num2, num3, num4, num5)

let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log()
console.log(`A soma dos elementos é igual a ${sum}`)
