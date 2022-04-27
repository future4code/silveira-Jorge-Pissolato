import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToHomePage, goToAdminPage } from "../Routs/Coordinator"

function LoginPage() {

    const navigate = useNavigate()

    return (
        <GlobalStyle>
            <h1>PÁGINA DE LOGIN</h1>
            <button onClick={() => goToAdminPage(navigate)}>Área Admin</button>
            <button onClick={() => backToHomePage(navigate)}>Voltar para Home</button>
            <form>
                <input
                    placeholder="E-mail"
                />
                <input
                    placeholder="senha"
                />
            </form>
        </GlobalStyle>
    )
}

export default LoginPage