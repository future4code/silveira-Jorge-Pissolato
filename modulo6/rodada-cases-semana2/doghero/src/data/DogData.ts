import DogWalking from "../model/dogWalking"
import { EncontrarPorStatusResponse } from "../types/encontrarPorStatusResponse"
import { BaseDatabase } from "./BaseDataBase"


export default class DogData extends BaseDatabase {

    public TABLE_NAME = "dog_walking"

    insert = async (passeio: DogWalking) => {
        try {
            await this.connection(this.TABLE_NAME).insert(passeio)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    select = async (id: string) => {
        try {
           const resultado = await this.connection(this.TABLE_NAME).select("*").where({id})
           return resultado
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    encontrarPasseio = async (data: string, inicio: string) => {
        try {
            const queryResultado: EncontrarPorStatusResponse = await this
                .connection(this.TABLE_NAME)
                // .select()
                .where({ data })
                .andWhere({inicio})
            return queryResultado[0]
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