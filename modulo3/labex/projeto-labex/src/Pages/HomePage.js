import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

    const goToListTripsPage = () =>{
        navigate("/list")
    }

    const goToLoginPage = () =>{
        navigate("/login")
    }

    return(
        <GlobalStyle>
            <h1>LabeX</h1>
            <h2>Seu site de viagens Espaciais</h2>
            <button onClick={goToLoginPage}>Area Administrativa</button>
            <button onClick={goToListTripsPage}>Lista de viagens</button>
        </GlobalStyle>
    )
}

export default HomePage