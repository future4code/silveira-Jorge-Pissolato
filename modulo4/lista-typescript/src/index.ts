//escreva o seu código aqui

// - Exercício 1
    
//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). 
//     A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

// function meusDados(nome:string, nascimento: string):string{
    
//     const dataSeparada = nascimento.split("/")
   
//     return(`Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`)
// }

// console.log(meusDados("jorge", "24/04/1992"))

// - Exercício 2
    
//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

type Parametro = number | string | undefined

function user(parametro?: Parametro):void {
    if(parametro: String){
        console.log("string")
    }

}
