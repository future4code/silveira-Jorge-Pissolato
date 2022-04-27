import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToHomePage, goToApplicationFormPage } from "../Routs/Coordinator"
import CardTrip from "../Cards/CardTrip";
import axios from "axios";


function ListTripsPage() {

    const navigate = useNavigate()


    return (
        <GlobalStyle>
            <h1>PÁGINA DE LISTA DE VIAGENS</h1>
            <button onClick={() => backToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrição</button>
            <ul>
                <CardTrip />
                <CardTrip />
                <CardTrip />
                <CardTrip />
            </ul>
        </GlobalStyle>
    )
}

export default ListTripsPage;