import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import {backToAdminPage} from "../Routs/Coordinator"

function CreateTripPage(){

    const navigate = useNavigate()



    return(
        <GlobalStyle>
            <h1>PÁGINA DE CRIAR VIAGENS</h1>
            <button onClick={()=>backToAdminPage(navigate)}>Voltar</button>
            <button>Criar</button>
            <input placeholder="nome"></input>
        </GlobalStyle>
    )
}

export default CreateTripPage;