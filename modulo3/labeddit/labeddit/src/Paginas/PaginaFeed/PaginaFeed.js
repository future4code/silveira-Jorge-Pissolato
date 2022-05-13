import React from "react";
import { Button } from '@material-ui/core';
import { corPrimaria } from "../../Constants/Cores";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import CardPost from "../../Components/CardPost.js/CardPost";
import { BASE_URL } from "../../Constants/Url"
import useRequestData from "../../Hooks/UseRequestData";
import { BotaoPost, PostContainer } from "../../Components/CardPost.js/Styled";
import { goToPost } from "../../Routes/Coordinator";
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";



function PaginaFeed() {

    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)
    useProtectedPage()

    const irParaPost = (id) =>{
        goToPost(history, id)
    }

    const postCard = posts.map((post) => {
        return (
            <CardPost
                key={post.id}
                title={post.title}
                onClick={irParaPost}
            />
        )
    })
    return (
        <PostContainer>
            {postCard}
            <BotaoPost
                color={"primary"}
                onClick={() => goToPost(history)}
            >
                <Add />
            </BotaoPost>
        </PostContainer>
    )
}

export default PaginaFeed;