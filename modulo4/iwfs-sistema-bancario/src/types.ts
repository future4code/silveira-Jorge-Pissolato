



export type Transacoes = {
    valor: number,
    data: Date,
    descricao: string
}

export type conta = {
    nome: string,
    CPF: string,
    nascimento: Date,
    saldo: Number,
    extrato: Transacoes[]
}