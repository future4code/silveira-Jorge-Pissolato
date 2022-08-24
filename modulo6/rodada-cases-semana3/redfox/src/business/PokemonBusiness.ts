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
    pokemonsForName = async (Name: string) => {
        try {
            const pokeNames = await this.pokemonData.selectName(Name)
            if (pokeNames) {
                return (pokeNames)
            }
            if (!pokeNames) {
                throw new Error("Esse nome não existe")
            }
        } catch (error) {
            throw new Error("Erro no banco business.")
        }
    }
}