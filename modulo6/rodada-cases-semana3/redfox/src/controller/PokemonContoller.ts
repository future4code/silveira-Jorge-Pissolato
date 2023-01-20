import { Request, Response } from "express";
import PokemonBusiness from "../business/PokemonBusiness";


export default class PokemonController {

    constructor(
        public pokemonBusiness: PokemonBusiness  
    ){}

    pokemonsForType = async (req: Request, res: Response)=>{
        try {
            const {Type1, Type2} = req.params
            const types = await this.pokemonBusiness.pokemonsForType(Type1, Type2)
            res.status(200).send({types})
        } catch (error) {
            if (error instanceof Error) {
                res.send({ message: error.message })
            } else {
                throw new Error("Erro do banco!")
            }
        }

    }
    pokemonsForName = async (req: Request, res: Response)=>{
        try {
            const {Name} = req.params
            const names = await this.pokemonBusiness.pokemonsForName(Name)
            res.status(200).send({names})
        } catch (error) {
            if (error instanceof Error) {
                res.send({ message: error.message })
            } else {
                throw new Error("Erro do banco!")
            }
        }

    }

}