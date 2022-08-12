import { Request, Response } from "express";
import DogBusiness from "../business/DogBusiness";
import { CriarPasseioDTO } from "../types/criarPasseioDTO";

export default class DogController {
    
    constructor(
        public dogBusiness: DogBusiness
    ) { }

    criarPasseio = async (req: Request, res: Response) => {
        const { status, data, preco, duracao, latitude, longitude, pets, inicio, fim } = req.body

        const input: CriarPasseioDTO = {
            status,
            data,
            preco,
            duracao,
            latitude,
            longitude,
            pets,
            inicio,
            fim
        }
        try {
            const token = await this.dogBusiness.criarPasseio(input)
            res.status(201).send({message: "passeio criado com sucesso!", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }
}