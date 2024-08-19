// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

let altura = Number(prompt('Digite a sua altura (no formato x.xx): '))
let peso = Number(prompt('Digite o seu peso: '))

let imc = peso / (altura * altura)

if (imc <= 18.5) {
    console.log(`Com IMC ${imc}, você está com baixo peso.`)
}
else if (imc <= 24.9) {
    console.log(`Com IMC ${imc}, você está com peso normal.`)
}
else if (imc <= 29.9) {
    console.log(`Com IMC ${imc}, você está com sobrepeso.`)
}
else {
    console.log(`Com IMC ${imc}, você está com obesidade.`)
}
