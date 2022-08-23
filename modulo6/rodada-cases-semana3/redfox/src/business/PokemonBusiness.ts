import PokemonData from "../data/PokemonData"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"



export default class PokemonBusiness {

    constructor(
        public pokemonData: PokemonData, 
        public idGenerator: IdGenerator,
        public authenticator: Authenticator
    ){}

    pokemonsForType = async (Type1: string, Type2: string)=>{
        try {
            if(!Type1  || !Type2 ){
                throw new Error("insira pelo menos um tipo para o pokemon!")

            }
            const pokeTypes = await this.pokemonData.select(Type1, Type2)
            if(pokeTypes){
                return(pokeTypes)
            }
            const pokeTypeOne = await this.pokemonData.select(Type1, Type2)
            if(Type1 && !Type2){
                return(pokeTypeOne) 
            }
        }catch(error){

        }
    }
}