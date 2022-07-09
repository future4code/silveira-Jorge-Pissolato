import { FindByEmailResponse } from "../types/findByEmailResponse"
import {BaseDatabase} from "./BaseDatabase"

export default class UserData extends BaseDatabase{

    protected TABLE_NAME = "labook_users"

    findByEmail = async(email: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
            .connection(this.TABLE_NAME)
            .select()
            .where({email})
            return queryResult[0]
        } catch (error) {
           if(error) 
        }

    }
}