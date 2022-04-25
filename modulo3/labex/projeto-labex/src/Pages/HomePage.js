import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
text-align: center;
position: absolute;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function HomePage() {
    return(
        <HomeContainer>
            <h1>LabeX</h1>
            <h2>Seu site de viagens Espaciais</h2>
            <button>Area Administrativa</button>
            <button>Lista de viagens</button>
        </HomeContainer>
    )
}

export default HomePage