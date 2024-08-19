// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')()

let idade = prompt('Insira sua idade: ')


if (idade <= 0) console.log("Idade inválida!")
    else if(idade < 12) {
        console.log(`Com ${idade} anos, você é criança.`)
    } 
    else if (idade < 18) {
        console.log(`Com ${idade} anos, você é adolescente.`)
    }
    else if (idade < 60) {
        console.log(`Com ${idade} anos, você é adulto/a.`)
    }
    else console.log(`Com ${idade} anos, você é idoso/a`)
