import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToLoginPage, goToListTripsPage} from "../Routs/Coordinator"

export const GlobalStyle = styled.div`
text-align: center;
position: absolute;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function HomePage() {
    
    const navigate = useNavigate()



    return(
        <GlobalStyle>
            <h1>LabeX</h1>
            <h2>Seu site de viagens Espaciais</h2>
            <button onClick={()=>goToLoginPage(navigate)}>Area Administrativa</button>
            <button onClick={()=>goToListTripsPage(navigate)}>Lista de viagens</button>
        </GlobalStyle>
    )
}

export default HomePage