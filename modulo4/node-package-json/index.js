//EXERCÍCIO 1 

//a) Responda como comentário no seu código: 
//como fazemos para acessar os parâmetros 
//passados na linha de comando para o Node?

//Resposta: passaremos valores pelo terminal, que serão acessados no código
// pela propriedade process.argvcl


//b) Crie um programa que receba seu nome e sua idade. 
//Após receber estes valores, 
//imprima no console uma mensagem que siga a seguinte estrutura:
//"Olá, (Nome)! Você tem (sua idade) anos."
// const valorTerminal = process.argv[2]

// const nome = "Jorge"
// const idade = Number(30)
// const nomeEIdade = nome + idade
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
//"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// const idadeMaisSete = idade + Number(7)
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSete}`)

//2) Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
//O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operacao = process.argv[2]
// const valorUm = Number(process.argv[3])
// const valorDois = Number(process.argv[4])
// const add = valorUm + valorDois
// const sub = valorUm - valorDois
// const mult = valorUm * valorDois
// const div = valorUm / valorDois

// switch (operacao) {
//     case "add": 
//         console.log(add)
//         break;
//     case "sub":
//         console.log(sub)
//         break;
//     case "mult":
//         console.log(mult)
//         break;
//     case "div":
//         console.log(div)
//         break;
// }

// Crie uma aplicação Node que receba uma string representando uma tarefa. 
// O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. 
// A lista de tarefas pode estar criada antes da execução do código. 
// Após adicionar o item à lista, exiba a lista atualizada.

// const tarefa = process.argv[2]
// const listaDeTarefas = [] 
// function adicionar(tarefa){
//     const resultado = listaDeTarefas.push(tarefa)
//     // return resultado
//     console.log(resultado)
// }  


