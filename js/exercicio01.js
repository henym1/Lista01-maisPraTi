// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let num1 = prompt('Insira o valor a ser verificado: ')

if (num1 % 2 === 0) console.log(`O número ${num1} é par.`)
    else console.log(`O número ${num1} é ímpar.`)
