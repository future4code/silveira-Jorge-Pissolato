import { app } from "./controller/app";
import DogController from "./controller/dogController";

app.post("/dog_waking", DogController.criarPasseio)