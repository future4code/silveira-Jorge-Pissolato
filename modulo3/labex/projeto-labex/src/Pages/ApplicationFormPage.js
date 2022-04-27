import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToListTripsPage } from "../Routs/Coordinator"

function ApplicationFormPage() {

    const navigate = useNavigate()




    return (
        <GlobalStyle>
            <h1>FORMULARIO DE APLICAÇÕES</h1>
            <button onClick={() => backToListTripsPage(navigate)}>Voltar</button>
            <form>
                <ul>
                <select>
                    <option value="" disabled>Escolha uma viagem</option>
                </select>
                <input
                    placeholder="Nome"
                />
                <input
                    placeholder="idade"
                    type={"number"}
                />
                <input
                    placeholder="Texto de candidatura"
                />
                <input
                    placeholder="Profissão"
                />
                <select>
                <option value={""} disabled>Escolha um País</option>
                </select>
                </ul>
            </form>
        </GlobalStyle>
    )
}

export default ApplicationFormPage;