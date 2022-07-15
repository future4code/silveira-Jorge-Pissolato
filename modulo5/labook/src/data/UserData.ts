import User from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import {BaseDatabase} from "./BaseDatabase"

export default class UserData extends BaseDatabase{

    private TABLE_NAME = "labook_users"

    insert = async(user: User) => {
        try {
            await this.connection(this.TABLE_NAME).insert(user)
        } catch (error) {
            throw new Error("Erro ao cadastrar usuário no banco de dados")  
        }
    }

    findByEmail = async(email: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
            .connection(this.TABLE_NAME)
            .select()
            .where({email})
            return queryResult[0]
        } catch (error) {
           throw new Error("Erro ao cadastrar usuário no banco de dados")
        }

    }
}