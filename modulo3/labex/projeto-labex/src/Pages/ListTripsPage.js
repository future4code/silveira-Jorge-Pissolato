import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToHomePage, goToApplicationFormPage } from "../Routs/Coordinator"
import CardTrip from "../Cards/CardTrip";
import axios from "axios";


function ListTripsPage() {

    const [trips, setTrips]= useState([])

    const navigate = useNavigate()

    const getTrips = () =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-pissolato-silveira/trips`)
        .then((response)=>{
            setTrips(response.data.trips)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getTrips()
    },[])

        const listTrips = trips && trips.map((trip)=>{
            return(
                <CardTrip key={trip.id} trip={trip}></CardTrip>
            )
        })


    return (
        <div>
            <h1>PÁGINA DE LISTA DE VIAGENS</h1>
            <button onClick={() => backToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrição</button>
            <ul>
                {listTrips}
            </ul>
        </div>
    )
}

export default ListTripsPage;