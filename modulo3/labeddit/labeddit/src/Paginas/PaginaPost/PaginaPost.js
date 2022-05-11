import React from "react";
import useProtectedPage from "../../Hooks/UseProtectedPage";

function PaginaPost(){
    useProtectedPage()
    return(
        <div>Página de Post</div>
    )
}

export default PaginaPost;