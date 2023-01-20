import PokemonBusiness from "./business/PokemonBusiness";
import { app } from "./controller/app";
import PokemonController from "./controller/PokemonContoller";
import PokemonData from "./data/PokemonData";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";



    const pokemonBusiness = new PokemonBusiness(
        new PokemonData(),
        new IdGenerator(),
        new Authenticator()
    )

    const pokemonController = new PokemonController(
        pokemonBusiness
    )

    app.get("/pokemonGo-types", pokemonController.pokemonsForType)
    app.get("/pokemonGo-name", pokemonController.pokemonsForName)