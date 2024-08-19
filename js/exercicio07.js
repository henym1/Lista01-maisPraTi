// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let macas = prompt('Deseja comprar quantas maçãs? ')
let valorTotal

if (macas < 12) valorTotal = (macas * 0.3)
    else valorTotal = (macas * 0.25)

console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`)
