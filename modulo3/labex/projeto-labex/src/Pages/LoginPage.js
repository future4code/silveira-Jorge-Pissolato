import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";

function LoginPage(){

    const navigate = useNavigate()

    const goToAdminPage = () =>{
        navigate("/admin")
    }

    const backToHomePage = () =>{
        navigate(-1)
    }
    return(
        <GlobalStyle>
            <h1>PÁGINA DE LOGIN</h1>
            <button onClick={goToAdminPage}>Área Admin</button>
            <button onClick={backToHomePage}>Voltar para Home</button>
        </GlobalStyle>
    )
}

export default LoginPage