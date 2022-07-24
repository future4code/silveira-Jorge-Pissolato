import React from "react";
import { FormularioLogin, InputsContainer } from "./Styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../Hooks/UseForm";
import { signUp } from "../../Services/Users";
import { useHistory } from "react-router-dom";


function CadastroForm({botaoDaDireita, setBotaoDaDireita}) {

    const [form, onChange, cleanFields] = useForm({ username: "", email: "", password: "" })
    const history = useHistory()
    
    const envioFormulario = (event) => {
        event.preventDefault()
        signUp(form, cleanFields, history, setBotaoDaDireita)
    }

    return (

        <form onSubmit={envioFormulario}>
            <FormularioLogin>
                <InputsContainer>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome do Usuário"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
                    />
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
                </InputsContainer>
                <Button
                    type={"submit"}
                    color="primary"
                    variant="contained"
                    fullWidth
                    margin={"normal"}

                >
                    Cadastrar
                </Button>
            </FormularioLogin>
        </form>
    )
}

export default CadastroForm






