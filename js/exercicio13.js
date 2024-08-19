// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let sum = 0
let count = 0
let entrada = Number(prompt(`Digite o ${count + 1}º valor: `))

while (entrada !== 0) {
    sum += entrada
    count++
    entrada = Number(prompt(`Digite o ${count + 1}º valor: `))
}

let media = (sum / (count))

if (count !== 0) {
    console.log(`A média dos valores é igual a ${media.toFixed(1)}`)
}
