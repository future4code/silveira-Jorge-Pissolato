import React from "react";
import { BotaoCadastro, ContainerTela, FormularioLogin, InputsContainer, LogoImagem } from "./Styled";
import logo from "../../Assets/logo2.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goToCadastro } from "../../Routes/Coordinator"
import { useHistory } from "react-router-dom";
import {useUnProtectedPage} from "../../Hooks/useUnProtectedPage";

function PaginaLogin({botaoDaDireita, setBotaoDaDireita}) {
    useUnProtectedPage()

    const history = useHistory()

    return (
        <ContainerTela>
            <LogoImagem src={logo} />
            <LoginForm botaoDaDireita={botaoDaDireita} setBotaoDaDireita={setBotaoDaDireita}/>
            <BotaoCadastro>
                <Button
                    onClick={() => goToCadastro(history)}
                    color="primary"
                    variant={"text"}
                    fullWidth
                    margin={"normal"}
                >
                    Criar Conta
                </Button>
            </BotaoCadastro>
        </ContainerTela>
    )
}

export default PaginaLogin;