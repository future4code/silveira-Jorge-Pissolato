import React from "react";
import { BotaoCadastro, ContainerTela, LogoImagem } from "./Styled";
import logo from "../../Assets/logo2.png"
import { Button } from "@material-ui/core";
import CadastroForm from "./CadastroForm";
import {useUnProtectedPage} from "../../Hooks/useUnProtectedPage";

function PaginaCadastro({botaoDaDireita, setBotaoDaDireita}) {
    useUnProtectedPage()


    return (
        <ContainerTela>
            <LogoImagem src={logo} />
            <CadastroForm botaoDaDireita={botaoDaDireita} setBotaoDaDireita={setBotaoDaDireita}/>
        </ContainerTela>
    )
}

export default PaginaCadastro;