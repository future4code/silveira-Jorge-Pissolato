import { Request, Response } from "express";

export default class DogController {
    criarPasseio = async(req: Request, res: Response)=>{
        const {status, data, preco, duracao, latitude, longitude, pets, inicio, fim} = req.body
    }
}