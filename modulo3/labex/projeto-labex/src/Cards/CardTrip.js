import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Pages/HomePage";

const StyledCardTrip = styled.div`
border: 1px solid black;
padding: 25px;
margin: 25px;
display: flex;
width: 97%;
justify-content: space-between ;
align-items: center;

`

function CardTrip(props) {
    return (
        <div>
            <StyledCardTrip>
                <p>{props.trip.name}</p>
                <p>{props.trip.description}</p>
            </StyledCardTrip>
        </div>

    )
}

export default CardTrip;