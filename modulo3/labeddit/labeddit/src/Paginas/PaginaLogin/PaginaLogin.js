import React from "react";
import { ContainerTela, InputsContainer, LogoImagem } from "./Styled";
import logo from "../../Assets/logo.png"
import { TextField } from "@material-ui/core";
import useForm from "../../Hooks/UseForm";

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
                        // label={"E-mail"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        // label={"Senha"}
                    />
                </form>
            </InputsContainer>
        </ContainerTela>
    )
}

export default PaginaLogin;