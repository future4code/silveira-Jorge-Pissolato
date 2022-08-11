import DogData from "../data/DogData";
import DogWalking from "../model/dogWalking";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { CriarPasseioDTO } from "../types/criarPasseioDTO";

export default class DogBusiness {

    constructor(
        public dogData: DogData,
        public idGenerator: IdGenerator,
        public authenticator: Authenticator
    ){}

    criarPasseio = async (input: CriarPasseioDTO) => {
        //validação
        const { status, data, preco, duracao, latitude, longitude, pets, inicio, fim } = input
        if (!status || !data || !preco || !duracao || !latitude || !longitude || !pets || !inicio || !fim) {
            throw new Error("campos inválidos")
        }
        //conferir se o passeio existe 
        const passeioRegistrado = await this.dogData.encontrarPorStatus(status || data)
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
}