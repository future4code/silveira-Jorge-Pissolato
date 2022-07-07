import User from "../model/User";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserBusiness{
    signup = async (input: SignupInputDTO)=>{
        const {name, email, password} = input
        if(!name || !email || !password){
            throw new Error( "campos inválidos")
        }

        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error("esse e-mail já foi cadastrado")
        }

        const id = idGenerator.generateId()

        const hashedPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword

        )
        await userData.insert(user)

        const token = authenticator.generateToken({id}) 
    }
}