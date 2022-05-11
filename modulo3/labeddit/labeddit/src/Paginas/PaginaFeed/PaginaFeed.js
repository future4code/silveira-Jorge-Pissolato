import React from "react";
import { Button } from '@material-ui/core';
import { corPrimaria } from "../../Constants/Cores";
import useProtectedPage from "../../Hooks/UseProtectedPage";


function PaginaFeed(){
    useProtectedPage()
    return(
        <div>
            <h2>Feed</h2>
        </div>
    )
}

export default PaginaFeed;