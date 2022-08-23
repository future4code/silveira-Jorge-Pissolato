import PokemonData from "../data/PokemonData"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"



export default class PokemonBusiness {

    constructor(
        public pokemonData: PokemonData, 
        public idGenerator: IdGenerator,
        public authenticator: Authenticator
    ){}

    pokemonsForType = async (Type1: string, Type2: string)=> {
        try {
            const pokeTypes = await this.pokemonData.select(Type1, Type2)
            if(pokeTypes){
                return(pokeTypes)
            }
            if(Type1 && !Type2){
                return(pokeTypes) 
            }
        }catch(error){
            throw new Error("Erro no banco business.")
        }
    }
}