import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";

function ApplicationFormPage(){

    const navigate = useNavigate()

    const backToListTripsPage = () =>{
        navigate(-1)
    }


    return(
        <GlobalStyle>
            <h1>FORMULARIO DE APLICAÇÕES</h1>
            <button onClick={backToListTripsPage}>Voltar</button>
        </GlobalStyle>
    )
}

export default ApplicationFormPage;