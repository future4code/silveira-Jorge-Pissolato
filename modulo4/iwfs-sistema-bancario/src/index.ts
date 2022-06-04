import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { contas } from './users'
import { conta } from './types'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const {nome, CPF, nascimentoString} = req.body
        const [ dia, mes , ano ] = nascimentoString.split("/")
        const nascimento: Date = new Date(`${ano}-${mes}-${dia}`)

        const idadeEmMilisegundos:number = new Date().getTime() - nascimento.getTime()
        const idade: number = idadeEmMilisegundos / 1000 / 60 /60 / 24 / 365

        if(idade < 18){
            res.statusCode = 406
            throw new Error("Sua Idade deve ser maior que 18 anos")
        }
        contas.push({
            nome: nome,
            CPF: CPF,
            nascimento: nascimento,
            saldo: 0,
            extrato: []
        })
        res.status(201).send("Sua conta foi criada")
    } catch (error) {
        res.send(error.message)
    }
})

app.get("/users/all",(req: Request, res: Response)=>{
    
    try{
        if(!contas.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(contas)
    }catch(error){
        res.send(error.message)
    }
})  

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});