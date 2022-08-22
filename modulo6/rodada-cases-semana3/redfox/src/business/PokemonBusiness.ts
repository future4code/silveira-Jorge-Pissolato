


export default class PokemonBusiness {

    pokemonsForType = async (Type1: string, Type2: string)=>{
        try {
            if(!Type1  || !Type2 ){
                throw new Error("insira pelo menos um tipo para o pokemon!")

            }
            const pokeTypes = await.pokemonData.select(Type1, Type2)
            if(Type1 && !Type2){
                return(Type1)
            }
            if(Type1 && Type2){
                return(Type1 && Type2) 
            }
        }catch(error){

        }
    }
}