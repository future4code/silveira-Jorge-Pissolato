// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }


//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. 
//Refatore a função para o Typescript.


function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string) {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log(imprimeTresCoresFavoritas("verde", "amarelo", "azul"))
 }

