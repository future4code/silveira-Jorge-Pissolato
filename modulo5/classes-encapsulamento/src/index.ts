// - Exercício 1
    
//     Analise a classe `UserAccount` abaixo. 
//     Perceba quais propriedades são públicas e quais são privadas e responda as 
//     perguntas discursivas em comentários no arquivo `index.ts`
    
type Transaction = {
    description: string,
    value: number,
    date: string
  }
  
  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }
//     a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

// Para receber como parâmetro os atributos da classe UserAccount. Chamamos ele através do this, e pelo console.log
    
//     b) *Copie o código abaixo para o seu exercício de hoje; 
//     crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). 
//     Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    
//     c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*