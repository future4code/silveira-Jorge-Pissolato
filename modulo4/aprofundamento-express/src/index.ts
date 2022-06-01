import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())



//Exercício 1

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

//Exercício 2
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”todos”). 
// Crie uma variável de tipo para representar cada afazer.

const userType = {
    "userId": Number,
    "id": Number,
    "title": String,
    "completed": Boolean,
}

//Exercício 3    
// Crie um array de afazeres para servir como base de dados da nossa API 
// e utilize a tipagem desenvolvida no exercício anterior.

const arrayAfazeres = [
    {
        "userId": 1,
        "id": 1,
        "title": "lavar o rosto",
        "completed": true
    },
    {
        "userId": 1,
        "id": 2,
        "title": "tomar café da manhã",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "trocar de roupa",
        "completed": true
    },
    {
        "userId": 1,
        "id": 4,
        "title": "pegar o carro",
        "completed": false
    },
    {
        "userId": 1,
        "id": 5,
        "title": "caminhar até o trabalho",
        "completed": true
    },
]

// - Exercício 4    
//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, 
//ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento

app.get("/afazeres/:status", (request: Request, response: Response) => {

    const afazeresFeitos = arrayAfazeres.filter((tarefa) => {
        return tarefa.completed === true
    })
    const afazeresNaoFeitos = arrayAfazeres.filter((tarefa) => {
        return tarefa.completed !== true
    })
    if (request.params.status) {
        response.send([afazeresFeitos])
    } else  {
        response.send([afazeresNaoFeitos])
    }
    
})

// app.get("/afazeres/:status", (request: Request, response: Response) => {          


// })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})