import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nick_name, email } = req.body
        if (!name || !nick_name || !email) {
            res.status(422)
            throw new Error("não colocou tudo")
        }
        await connection("user")
            .insert({
                id: Date.now().toString(),
                name: name,
                nick_name: nick_name,
                email: email
            })
        res.status(201).send("usuário criado com sucesso")
    } catch (error: any) {
        if (error.sqlMessage) {
            res.send(error.sqlMessage)
        }
        if (res.statusCode == 422) {
            res.send(error.message)
        }
        res.status(500).send("erro ao criar usuário")
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (!id) {
            res.status(422)
            throw new Error("Id não informado")
        }
        const result = await connection("user").where({ id })

        res.status(200).send(result)
    } catch (error: any) {
        if (error.sqlMessage) {
            res.send(error.sqlMessage)
        }
        if (res.statusCode == 422) {
            res.send(error.message)
        }
        res.status(500).send("Erro ao buscar usuario")
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { name, nick_name, email } = req.body
        if (!id) {
            res.status(422)
            throw new Error("Id não informado")
        }
        if (!name || !nick_name || !email) {
            res.status(422)
            throw new Error("não colocou tudo")
        }
        await connection("user")
            .update({
                name: name,
                nick_name: nick_name,
                email: email
            })
            .where({ id })

        res.status(200).send("deu bom")
    } catch (error: any) {
        if (error.sqlMessage) {
            res.send(error.sqlMessage)
        }
        if (res.statusCode == 422) {
            res.send(error.message)
        }
        res.status(500).send("Erro ao buscar usuario")
    }
})

app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDateString, creatorUserId } = req.body
        const [day, month, year] = limitDateString.split("/")
        const limitDate: Date = new Date(`${year}-${month}-${day}`)
        
        if (!title || !description || !limitDate || !creatorUserId) {
            res.status(422)
            throw new Error("não colocou tudo")
        }
        await connection("task")
            .insert({
                title: title,
                description: description,
                limitDate: limitDate,
                creatorUserId: Date.now().toString()
            })
            res.status(201).send("tarefa criada com sucesso")
    } catch (error: any) {
        if (error.sqlMessage) {
            res.send(error.sqlMessage)
        }
        res.status(500).send("erro ao criar tarefa!")
    }

})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app
