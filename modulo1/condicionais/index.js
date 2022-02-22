

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

//  if (numero % 2 === 0) {
//    console.log("Passou no teste.")
//  } else {
//    console.log("Não passou no teste.")
//    /
//  }

//EXERCICIO 1

//a) Explique o que o código faz. Qual o teste que ele realiza? 

// Ele pede ao usuario que digite um numero, transforma a resposta de string para número realmente.
// Pega esse número e diz que o resto da divisão tem que ser igual a 0.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Passou no teste se retornar um booleano true (numero % 2 === 0)

//c) Para que tipos de números a mensagem é "Não passou no teste"?

//Não passou no teste se retornar um booleano false (numero % 2 !== 0)


//EXERCÍCIO 2 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// O codigo pede ao usuario que escolha uma fruta.
// Ele relaciona a fruta com preço, (ex: se for laranja o preco é = 3.5)

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//O preço da fruta "Maçã" é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?.

//O preço da fruta "Pêra" é R$ 5.5


//EXERCÍCIO 3


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
   

// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

// criou uma variavel pedindo ao usuario para digitar o primeiro numero e transformando 
// a string recebida em numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?'

// Ele diz que é verdadeiro em if se o número for maior que 0. se for 10 ele mostra a mensagem
// "Esse número passou no teste". No caso de -10 não aparece nada, somente um erro.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// sim, pois ele usou console.log(mensagem) fora do escopo na função 


//EXERCÍCIO 4

// 1. Faça um programa que pergunta ao usuário qual a idade dele e 
// imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//     Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


// const idadeDoUsuario = prompt("Usuário, qual a sua idade ?")
// const numero = Number(idadeDoUsuario)


// if (numero >= 18 ) {
//     console.log("Pode dirigir.")
//   } else {
//     console.log("Não pode dirigir.")
//   }

//EXERCÍCIO 5 

// 2 - Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else

//  Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
// Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

// Se o usuário digitar "V", a saída deve ser:
// ```
// "Boa Tarde!"
// ```

// const turnoDoDia = prompt("Em qual turno você estuda? responda com M, V ou N:")

// if (turnoDoDia === 'M'){
  
//     console.log("Bom dia ")


// }if (turnoDoDia === 'V'){
    
//     console.log("Boa Tarde!")

// }if (turnoDoDia ==='N'){
    
//     console.log("Boa Noite")
// }

//EXERCÍCIO 6

//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turnoDoDia = prompt("Em qual turno você estuda? responda com M, V ou N:")

// switch(turnoDoDia){
//     case 'M':
//         console.log('Bom Dia')
//         break
//     case 'V':
//         console.log('Boa Tarde') 
//         break
//     case 'N':
//         console.log('Boa Noite')  
//         break     

// }


//EXERCÍCIO 7


//Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. 

// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

// const genero = prompt("qual genero do filme vão assistir?")
// const ingresso = Number(prompt("Qual preço do ingresso ?"))

// switch (genero){
//     case 'fantasia':
//     console.log('Bom Filme')
//     break
//    default:
//        console.log("Escolha outro genero") 
// }


