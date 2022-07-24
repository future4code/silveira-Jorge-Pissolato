import React from "react";
import { BotaoCadastro, ContainerTela, FormularioLogin, InputsContainer, LogoImagem } from "./Styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../Hooks/UseForm";
import { login } from "../../Services/Users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function LoginForm({botaoDaDireita, setBotaoDaDireita}) {

    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })

    const history = useHistory()

    const envioFormulario = (event) => {
        event.preventDefault()
        login(form, cleanFields, history, setBotaoDaDireita)
    }


    return (

        <InputsContainer>
            <form onSubmit={envioFormulario}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                    required
                    type={"password"}
                />
                <FormularioLogin>
                    <Button
                        type={"submit"}
                        color="primary"
                        variant="contained"
                        fullWidth
                        margin={"normal"}

                    >
                        Fazer Login
                    </Button>

                </FormularioLogin>
            </form>
        </InputsContainer>
    )
}

export default LoginForm;