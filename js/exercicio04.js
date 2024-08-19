// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

let salsicha = Number(prompt('Deseja quantas salsichas? (0 - sem salsicha; 1 - uma salsicha; 2 - duas salsichas) '))

switch(salsicha) {
    case 0:
        console.log('Saindo um lanche sem salsicha!')
        break
    case 1:
        console.log('Saindo um lanche com uma salsicha!')
        break
    case 2:
        console.log('Saindo um lanche com duas salsichas!')
        break
    default:
        console.log('Número inválido de salsichas!')
        break
}
