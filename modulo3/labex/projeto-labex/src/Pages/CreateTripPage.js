import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";

function CreateTripPage(){

    const navigate = useNavigate()

    const backToAdminPage = () =>{
        navigate(-1)
    }

    return(
        <GlobalStyle>
            <h1>PÁGINA DE CRIAR VIAGENS</h1>
            <button onClick={backToAdminPage}>Voltar</button>
            <button>Criar</button>
        </GlobalStyle>
    )
}

export default CreateTripPage;