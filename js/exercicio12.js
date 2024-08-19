// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let num = Number(prompt('Insira um número de 1 a 10: '))

if (num < 1 || num > 10) {
    console.error("Valor inválido!")
}
else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${(num * i)}`)
    }
}
