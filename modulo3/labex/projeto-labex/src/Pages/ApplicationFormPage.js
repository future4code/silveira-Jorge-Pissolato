import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToListTripsPage } from "../Routs/Coordinator"
import axios from "axios";

function ApplicationFormPage() {
    
    const navigate = useNavigate()

    const ApplyTrip = ()=>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-pissolato-silveira/trips/:id/apply'
        axios.post(url, )
    }

    return (
        <GlobalStyle>
            <h1>FORMULARIO DE INSCRIÇÃO</h1>
            <button onClick={() => backToListTripsPage(navigate)}>Voltar</button>
            <form>
                
                    <ul>
                        <select>
                            <option value="" disabled>Escolha uma viagem</option>
                        </select>
                    </ul>
                    <ul>
                        <input
                            placeholder="Nome"
                        />
                    </ul>
                    <ul>
                        <input
                            placeholder="idade"
                            type={"number"}
                        />
                    </ul>
                    <ul>
                        <input
                            placeholder="Texto de candidatura"
                        />
                    </ul>
                    <ul>
                        <input
                            placeholder="Profissão"
                        />
                    </ul>
                    <ul>
                        <select>
                            <option value={""} disabled>Escolha um País</option>
                        </select>
                    </ul>
                
            </form>
        </GlobalStyle>
    )
}

export default ApplicationFormPage;