import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import {backToHomePage, goToCreateTripsPage, returnToHomePage} from "../Routs/Coordinator"

function AdminHomePage(){

    const navigate = useNavigate()



    return(
        <GlobalStyle>
            <h1>PÁGINA DE ADMINISTRADOR</h1>
            <button onClick={()=>backToHomePage(navigate)}>Voltar</button>
            <button onClick={()=>goToCreateTripsPage(navigate)}>Criar</button>
            <button onClick={()=>returnToHomePage(navigate)}>Sair</button>
        </GlobalStyle>
    )
}

export default AdminHomePage