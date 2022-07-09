import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserBusiness{

    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ){}

    signup = async (input: SignupInputDTO)=>{
        const {name, email, password} = input
        if(!name || !email || !password){
            throw new Error( "campos inválidos")
        }

        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error("esse e-mail já foi cadastrado")
        }

        const id = this.idGenerator.generateId()

        const hashedPassword = await  this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword

        )
        await  this.userData.insert(user)

        const token =  this.authenticator.generateToken({id}) 
    }
}