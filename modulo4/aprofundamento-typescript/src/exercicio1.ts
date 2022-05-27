
//EXERCÍCIO 1:

//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = 123456
//Type 'number' is not assignable to type 'string'
// Tipo número não é assimilado com tipo string

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 100

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

let pessoa1: { name: string, age: number, corFavorita: string } = {
    name: "Jorge",
    age: 30,
    corFavorita: "verde"
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

type pessoa = {
    name: string,
    age: number,
    corFavorita: string
}
const flavio: pessoa ={
    name: "Flavio",
    age: 32,
    corFavorita: "preto"
}
const wislaine: pessoa ={
    name: "wislaine",
    age: 25,
    corFavorita: "rosa"
}
const ana: pessoa ={
    name: "Ana",
    age: 33,
    corFavorita: "azul"
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre 
// as cores do arco-íris. Utilize um enum para isso.
//vermelha, laranja, amarela, verde, azul, azul-escuro e violeta

enum corFavorita {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul escuro",
    VIOLETA = "violeta"
}
const jorge ={
    name: "jorge",
    age: 30,
    class: corFavorita.VERDE
}





