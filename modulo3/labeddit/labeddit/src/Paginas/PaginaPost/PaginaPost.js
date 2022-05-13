import React from "react";
import useProtectedPage from "../../Hooks/UseProtectedPage";

function PaginaPost(){
    useProtectedPage()
    return(
        <div>Adicionar Post</div>
    )
}

export default PaginaPost;