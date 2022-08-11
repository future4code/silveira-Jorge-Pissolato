import { Request, Response } from "express";
import DogBusiness from "../business/DogBusiness";
import { CriarPasseioDTO } from "../types/criarPasseioDTO";

export default class DogController {
    static criarPasseio(arg0: string, criarPasseio: any) {
        throw new Error("Method not implemented.");
    }

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
            throw new Error(" Não foi possivel criar o passeio")
        }
    }
}