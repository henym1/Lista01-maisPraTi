// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a nota: '))

if (nota < 0 || nota > 10) console.log("Nota inválida!")
    else if (nota < 3) {
        console.log(`Com nota ${nota.toFixed(2)}, você está reprovado/a.`)
    }
    else if (nota < 6) {
        console.log(`Com nota ${nota.toFixed(2)}, você está em recuperação.`)
    }
    else console.log(`Com nota ${nota.toFixed(2)}, você está aprovado/a.`)
