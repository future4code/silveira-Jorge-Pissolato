import DogData from "../data/DogData";
import DogWalking from "../model/dogWalking";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { CriarPasseioDTO, PegarPasseioDTO } from "../types/criarPasseioDTO";

export default class DogBusiness {

    constructor(
        private dogData: DogData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    criarPasseio = async (input: CriarPasseioDTO) => {
        //validação
        console.log("entrei aqui")
        const { status, data, preco, duracao, latitude, longitude, pets, inicio, fim } = input
        if (!status || !data || !preco || !duracao || !latitude || !longitude || !pets || !inicio || !fim) {
            throw new Error("campos inválidos")
        }
        //conferir se o passeio existe 
        const passeioRegistrado = await this.dogData.encontrarPasseio(data, inicio)
        console.log(passeioRegistrado)
        if (passeioRegistrado) {
            throw new Error("Esse passeio já está sendo executado")
        }
        //criar um id para o passeio
        const id = this.idGenerator.generateId()

        //criar o passeio no banco
        const passeio = new DogWalking(
            id,
            status,
            data,
            preco,
            duracao,
            latitude,
            longitude,
            pets,
            inicio,
            fim
        )
        await this.dogData.insert(passeio)

        //criar o token
        const token = this.authenticator.generateToken({ id })

        //retornar o token
        return token
    }

    pegarPasseio = async (id: string) => {
        try {
            
            //validação
            if(!id){
                throw new Error("o id não foi passado")
            }
            //conferir se o passeio existe 
            const passeioRegistrado = await this.dogData.select(id)
            if (!passeioRegistrado) {
                throw new Error("Esse passeio não existe")
            }
           
            return(passeioRegistrado)

        } catch (error) {
          console.log("erro no dogbusiness")
        }


    }

}