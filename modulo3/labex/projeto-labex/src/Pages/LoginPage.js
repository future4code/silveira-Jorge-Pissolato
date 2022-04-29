import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToHomePage, goToAdminPage } from "../Routs/Coordinator"
import useForm from "../Hooks/UseForm";
import axios from "axios";

function LoginPage() {

    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const enviarLogin = (event) => {
        event.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-pissolato-silveira/login`
        axios.post(url, form,)
        console.log(form)
        cleanFields()
    }

    return (
        <GlobalStyle>
            <h1>PÁGINA DE LOGIN</h1>
            <button onClick={() => backToHomePage(navigate)}>Voltar para Home</button>

            <form onSubmit={enviarLogin}>
                <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={"email"}
                    required
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder={"senha"}
                    required
                />
                <button>Área Admin</button>
            </form>
        </GlobalStyle>
    )
}

export default LoginPage