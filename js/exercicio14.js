// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let num = Number(prompt('Insira o valor a ser calculado o fatorial: '))
let fatorial = num
let inicial = num

if (num < 0) console.error('Entrada inválida!')
else if (num === 0 || num === 1) {
    console.log(`O fatorial de ${num} é igual a 1.`)
} else {
    for (let i = num; i > 1; i--) {
        fatorial = fatorial * (num - 1)
        num--
    }

    console.log(`O fatorial de ${inicial} é igual a ${fatorial}`)
}
