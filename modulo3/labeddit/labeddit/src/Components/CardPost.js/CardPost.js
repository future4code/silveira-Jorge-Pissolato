import React from "react"
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia/CardMedia"
import Typography from "@material-ui/core/Typography/Typography"
import { PostContainer } from "./Styled"


const CardPost = (props) => {
    return (
        <PostContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={props.title}
                    height={"150px"}
                    image={props.image}
                    title={props.title}
                />
                <PostContainer>
                    <Typography align={"center"}>
                    </Typography>
                </PostContainer>
            </CardActionArea>
        </PostContainer>

    )
}

export default CardPost