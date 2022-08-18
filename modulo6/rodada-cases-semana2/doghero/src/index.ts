import DogBusiness from "./business/DogBusiness";
import { app } from "./controller/app";
import DogController from "./controller/DogController";
import DogData from "./data/DogData";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";

    const dogBusiness = new DogBusiness(
        new DogData(),
        new IdGenerator(),
        new Authenticator()
    )

    
const dogController = new DogController(
    dogBusiness
)

app.post("/dog_waking", dogController.criarPasseio)
app.get("/dog_walking/:id", dogController.pegarPasseio)