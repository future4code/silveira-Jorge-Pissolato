import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";

function AdminHomePage(){

    const navigate = useNavigate()

    const backToHomePage = () =>{
        navigate(-1)
    }

    const goToCreateTripsPage = () =>{
        navigate("/create")
    }

    const returnToHomePage = () =>{
        navigate(-2)
    }


    return(
        <GlobalStyle>
            <h1>PÁGINA DE ADMINISTRADOR</h1>
            <button onClick={backToHomePage}>Voltar</button>
            <button onClick={goToCreateTripsPage}>Criar</button>
            <button onClick={returnToHomePage}>Sair</button>
        </GlobalStyle>
    )
}

export default AdminHomePage