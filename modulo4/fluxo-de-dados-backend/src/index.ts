import express , { Request, Response } from "express";
import cors from "cors"
import { produtos } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

// - Exercício 1   
//Crie uma nova API do zero (ou utilizando um template) 
//e desenvolva um endpoint de teste com método `**GET`** no path **`“/test”`** 
//que retorna uma mensagem genérica avisando que a API está funcional.

app.get("/test", (req: Request, res: Response)=>{
    res.send("esta API é funcional")
}) 
    
// - Exercício 2   
// Crie um arquivo chamado **`data.ts`** que exporta um array de produtos.
// Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
// Popule manualmente o array com pelo menos 3 produtos.

// - Exercício 3    
// Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada. 
// A id do produto deve ser gerada automaticamente pela API.
type produto = {
    "id": string,
    "name": string, 
    "price": number
}


app.post("/produtos", (req: Request, res: Response)=>{
let errorCode: number = 400

try{
    const { id, name, price } = req.body
    console.log(id, name, price)

    if( !id || !name || !price ){
        errorCode = 422
        throw new Error("Por favor, preencha corretamente os campos")
    }

    const novoProduto: produto = {
        id: id,
        name: name,
        price: price
    } 

    produtos.push(novoProduto)
    res.status(201).send({message: "produto criado com sucesso"})
    
    const novaLista = produtos.push(novoProduto)
   console.log(novaLista)

} catch(error){
    res.status(errorCode).send({message: error.message})
}

})

// - Exercício 4
    
//     Crie um endpoint que **retorna todos os produtos**.

app.get("/produtos", (req: Request, res: Response)=>{
    let errorCode: number = 400
    
    try{


    } catch(error){
        res.status(errorCode).send({message: error.message})
    }
})

app.listen(3003, () => {
    console.log("Servidor está rodando em http://localhost:3003");
});