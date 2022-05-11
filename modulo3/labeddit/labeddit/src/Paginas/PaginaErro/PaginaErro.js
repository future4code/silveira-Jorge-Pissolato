import React from "react";
import { useUnProtectedPage } from "../../Hooks/useUnProtectedPage";
import { ContainerPaginaDeErro } from "./Styled";
import erro from "../../Assets/erro.png"
function PaginaErro(){
    useUnProtectedPage()
    
    return(
        <ContainerPaginaDeErro src={erro}>
            Ocorreu um erro!
        </ContainerPaginaDeErro>
    )
}

export default PaginaErro;