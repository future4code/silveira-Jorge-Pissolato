import React from "react";
import { ContainerTela, InputsContainer, LogoImagem } from "./Styled";
import logo from "../../Assets/logo2.png"
import { Button, TextField } from "@material-ui/core";
import useForm from "../../Hooks/UseForm";
import Header from "../../Components/Header/Header";

function PaginaLogin() {

    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })

    const envioFormulario = () => {

    }

    return (
        <ContainerTela>
            <LogoImagem src={logo} />
            <InputsContainer>
                <form onSubmit={envioFormulario}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                    />
                </form>
                <p>
                <Button color="primary" variant="contained">Fazer Login</Button>
                <Button color="primary" variant="contained">Crie uma conta aqui</Button>
                </p>
            </InputsContainer>
        </ContainerTela>
    )
}

export default PaginaLogin;