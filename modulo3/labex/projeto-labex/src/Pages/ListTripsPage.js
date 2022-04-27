import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";

function ListTripsPage(){

    const navigate = useNavigate()

    const backToHomePage = () =>{
        navigate(-1)
    }

    const goToApplicationFormPage = () =>{
        navigate("/application")
    }

    return(
        <GlobalStyle>
            <h1>PÁGINA DE LISTA DE VIAGENS</h1>
            <button onClick={backToHomePage}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrição</button>
        </GlobalStyle>
    )
}

export default ListTripsPage;