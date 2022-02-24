/*


//EXERCÍCIO 1

//a) O que vai ser impresso no console?

// Será impresso no console:
// indice 0 = nome: "Amanda Rangel", apelido: "Mandi"
// indice 1 = nome: "Laís Petra", apelido: "Laura"
// indice 2 = nome: "Letícia Chijo", apelido: "Chijo"
// pois o map cria uma array com elementos modificados a partir da original. Com tamanho igual ao original


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


//EXERCÍCIO 2

//a) O que vai ser impresso no console?

// Neste caso o return fez a função novoArrayB puxar somente o item nome da lista original, 
    // ou seja,"Amanda Rangel", "Laís Petra", "Letícia Chijo"   

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// EXERCÍCIO 3

// a) O que vai ser impresso no console?

// Neste ele usou filter que vai um novo array com apenas alguns elementos da array
// original. Aí ele pediu o apelido diferente ou negando o nome 'Chijo', ou seja, ele 
// vai imprimir somente os os nomes que não possuírem apelidos que forem "Chijo".
// "Amanda Rangel", apelido: "Mandi" e "Laís Petra", apelido: "Laura"

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//EXERCÍCIO 4

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha]

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]


//    const nomeDosPets = pets.filter((item, index, array) => {
//      return item.raca == "Poodle"
//   })
//  console.log(nomeDosPets)

//  const poodles = nomeDosPets.map((item, indice, array) => {
//     if(item.raca === "Poodle"){
//         return `"Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
//  }
//  })

// console.log(poodles)

//  const Poodles = Poodles.map((item, indice, array) => {
//     if(item.raca === "Poodle")

//  const nomedosPets = pets.map((item, index, array) => {
//     return item.nome
      
//  })


//   const nomeDosDoguinhos = pets.map((item, index, array) => {
//     return item.nome
//  })
//  console.log(nomeDosDoguinhos)


// const apelidoDosDoguinhos = pets.filter((item, index, array) => {
//     return item.raca == "Salsicha"
//  })
 
//  console.log(apelidoDosDoguinhos)

// const clientesPoodle = pets.filter((item, index, array) => {
//     return item.nome == "Poodle"
//  })
//  const nomePoodle = pets.filter((item, index, array) => {
//     return index.nome == "Poodle"
//  })
 
//  console.log(`"você ganhou um cupom de desconto de 10% para tosar o/a"`!)

// EXERCÍCIO 5

// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
// utilizando as funções de array map e filter

// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) Crie um novo array que contenha apenas o nome de cada item

    const nomeDosProdutos = produtos.map((item, index, array) => {
     return item.nome
  })
 
  console.log(nomeDosProdutos)

  // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

  

  // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 
  const categoriaBebidas = produtos.filter((item, index, array) => {
    return item.categoria == "Bebidas"
 })

 console.log(categoriaBebidas)

 // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//  const nomeYpe = produtos.filter((item, index, array) => {
//     return item.nome == "Ypê"
//  })

//  console.log(nomeYpe)


//     const produtosNovos = produtos.filter((item, index, array) => {
//      return item.nome == "Ypê"
//   })
//  console.log(produtosNovos)

//  const ype = produtosNovos.map((item, indice, array) => {
//     if(item.raca === "Ypê"){
//         return ype
//  }
//  })





*/