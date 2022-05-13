import React from "react";
import { Button } from '@material-ui/core';
import { corPrimaria } from "../../Constants/Cores";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import CardPost from "../../Components/CardPost.js/CardPost";


function PaginaFeed(){
    useProtectedPage()
    return(
        <div>
            <h2>Feed</h2>
            <CardPost
            title={"post"}
            image={""}
            onClick={()=> null}
            />
        </div>
    )
}

export default PaginaFeed;