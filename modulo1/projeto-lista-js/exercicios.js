// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(){

 const altura = Number(prompt('altura do triangulo:'))
 const largura = Number(prompt('largura do triangulo:'))

 console.log(altura * largura)
}



// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = Number(prompt('Em que ano estamos?'))
  const anoNascimento = Number(prompt('Qual seu ano de nascimento?'))

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt('Qual o seu nome')
 const idade = Number(prompt('Qual o seu nome'))
 const email = prompt('Seu email:')
  
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('uma cor favorita:')
  let cor2 = prompt('mais uma cor favorita')
  let cor3 = prompt('outra cor favorita')

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
   
  const resultado = Number (custo / valorIngresso)
  
  return resultado


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 
return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const subtituicao = array[0]
array[0] = array[array.length-1]
array[array.length-1] = subtituicao
  
  
  
  // const primeiroNumero = array[0]
  // const ultimoNumero = array.length-1
  // array[0] = ultimoNumero
  // array.length-1 = (primeiroNumero)
 

  return array

  // var novoArray = [1,2,3,4,5]
  // console.log(novoArray)
  // novoArray[0] = 5
  // novoArray[2] = 1
  // console.log(novoArray)



}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const iguais = string1.toLowerCase()
  const maisIguais = string2.toLowerCase()
  
  return iguais === maisIguais 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Em que ano estamos?'))
  const anoDeNascimento = Number(prompt('Ano de nascimento?'))
  const anoIdentidade = Number(prompt('que ano sua identidade foi expedida?'))

  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}