// - Exercício 1

//     Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. 
//     Copie esse código para o seu exercício de hoje; crie uma instância dessa classe 
//     (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): void {
        console.log(this.id)

    }

    public getEmail(): void {
        console.log(this.email)
    }

    public getName(): void {
        console.log(this.name)
    }
    public getPassword(): void {
        console.log(this.password)
    }
}

// const jorge = new User("001", "jcapissolato@gmail.com", "Jorge", "jabulani")
// jorge.getId()
// jorge.getEmail()
// jorge.getName()
// jorge.getPassword()

//     a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

//Se acrescentar uma função de pegar o password na classe, sim.

//     b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

// 1x em cada vez que rodo o terminal

// - Exercício 2

//     Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. 
//     Copie esse código para o seu exercício de hoje e crie uma instância dessa classe 
//     (com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse 
//     (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na declaração da classe `Customer`; 
//     e, em seu construtor, foi usado o `super`.

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
    public getpurchaseTotal(): void {
        console.log(this.purchaseTotal)
    }
}

const jorge = new Customer("002", "jorge@gmail", "Jorge Antinareli", "jabulani", "Labenu")
jorge.getpurchaseTotal()
jorge.getCreditCard()

//     a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*

    // toda vez que roda o terminal

//     b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

    // toda vez que roda o terminal