import DogWalking from "../model/dogWalking"
import { EncontrarPorStatusResponse } from "../types/encontrarPorStatusResponse"
import { BaseDatabase } from "./BaseDataBase"


export default class DogData extends BaseDatabase {
    
    public TABLE_NAME = "dog_walking"

    insert = async(passeio: DogWalking)=>{
        try {
            await this.connection(this.TABLE_NAME).insert(passeio)
        } catch (error) {
            throw new Error("Erro ao buscar passeio no banco de dados")   
        }
    }

    encontrarPorStatus = async(status: string)=>{
        try {
            const queryResultado: EncontrarPorStatusResponse = await this
            .connection(this.TABLE_NAME)
            .select()
            .where({status})
            return queryResultado[0]
        } catch (error) {
            throw new Error("Erro ao buscar passeio no banco de dados")
        }
    }
}