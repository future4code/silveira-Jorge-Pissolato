import { BaseDatabase } from "./BaseDataBase"
import { SeachForTypeResult } from "../types/SeachForTypeResult"


export default class PokemonData extends BaseDatabase {

    public TABLE_NAME = "pokemonGo"

    select = async (Type1: string, Type2: string) => {
        try {
            const result = await this.connection(this.TABLE_NAME).select("*").where({ Type1, Type2 })
            return (result)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    seachPasseio = async (Type1: string, Type2: string) => {
        try {
            const seachResult: SeachForTypeResult = await this
                .connection(this.TABLE_NAME)
                .where({ Type1 })
                .andWhere({ Type2 })
            return seachResult[0]
        } catch (error) {
            if (error instanceof Error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                } else {
                    throw new Error("Erro do banco !")
                }
            }
        }
    }
}

