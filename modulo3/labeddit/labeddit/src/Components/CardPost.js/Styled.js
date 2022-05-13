import styled from "styled-components"
import { Fab } from "@material-ui/core"


export const PostContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 30px;
`

export const BotaoPost = styled(Fab)`
position: fixed !important;
right: 20px;
bottom: 20px;
z-index: 3;
`