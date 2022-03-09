/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//     Essa etapa do projeto consiste em criar um programa que:

// 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

// 2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".

// 3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".

// 4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      confirm === "ok"
   
      let pontuacaoUsuario = 0
      let pontuacaoComputador = 0
      const primeiraDoUsuario = comprarCarta()
      const segundaDoUsuario = comprarCarta()
      const primeiraDoComputador = comprarCarta()
      const segundaDoComputador = comprarCarta()

      pontuacaoUsuario = primeiraDoUsuario.valor + segundaDoUsuario.valor
      pontuacaoComputador = primeiraDoComputador.valor + segundaDoComputador.valor
      
      console.log(`Usuario - cartas: ${primeiraDoUsuario.texto} ${segundaDoUsuario.texto} - pontuação ${pontuacaoUsuario}`)
      console.log(`Computador - cartas: ${primeiraDoComputador.texto} ${segundaDoComputador.texto} - pontuação ${pontuacaoComputador}`)
      
      if(pontuacaoUsuario === pontuacaoComputador){
       console.log("Empate")
      }
      else if(pontuacaoComputador > pontuacaoUsuario){
       console.log("Você Perdeu")
      }
      else {
         console.log("Você ganhou")
      }


   } else {
      confirm === "cancelar"
      console.log("O jogo acabou!")
   }



   