//EXERCÍCIO 1

// function minhaFuncao(variavel) {
// return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a)console.log(minhaFuncao(2 x 5 = 10))
//   console.log(minhaFuncao(10 x 5 = 50))


// b) A função acontece corretamente mas não
//    apareceria impresso no console.

// EXERCÍCIO 2


// let textoDoUsuario = prompt("insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) primeiro pede para inserir um texto, declara
//    o texto na função e retorna o texto com letras
//    minúsculas e inclui o item "cenoura"

// b) eu gosto de cenoura cenoura
// b.1) cenoura é bom pra vista (retorna true por que o
//       includes() determina se o caractere cenoura foi
//       encontrado na string, por isso retorna true)
// b.2) retorna true, pois CENOURA esta maiuscula,mas é 
//      transformado em minúscula antes de ser anailsada
// b.3) retorna true, mesmo com o s no final, pois o includes()
//      reconhece os caracteres cenoura em cenouras.

//EXERCÍCIO 3

//a)

// const semParametros = function() {

// console.log(` Eu sou Jorge, tenho 29 anos, moro em Palma e sou estudante.`)

// }

// semParametros()

//b)

// const semParametros = function(nome, idade, cidade, profissao, ) {

//     console.log(` Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    
// }
    
// semParametros('Jorge', 29 , 'Palma', 'Estudante')


//EXERCICIO 2

// function somar(a, b) {

//     let soma = a + b

//     return soma

// }

// const resultado = somar(x, y)
// console.log(resultado)


// function comparar(x, y) {

// return x >= y 

// }
//  console.log(comparar(8,4))

//c)

// function numeroPar(x) {
 
//     const verificar = (x % 2) == 0
//     return verificar  
    
//     }
//      console.log(numeroPar(13))

//EXERCICIO 3

// function soma(x, y){
//     return x + y
// }

// function subtrai(x, y){
//     return x - y
// }

// function multiplica(x, y){
//     return x * y
// }

// function divide(x, y){
//     return x / y
// }

// const num1 = Number(prompt("digite um numero"))
// const num2 = Number(prompt("digite um numero"))

// console.log(`numeros ${num1} e ${num2}
// ${soma(num1, num2)}
// ${subtrai(num1, num2)}
// ${multiplica(num1, num2)}
// ${divide(num1, num2)} `)






