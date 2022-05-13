import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PostContainer } from './Styled';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    return (
        <PostContainer onClick={props.onClick}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography> */}
                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.body}
                    </Typography>
                    {/* <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button color='primary' size="small">Comentar</Button>
                </CardActions>
                <CardActions>
                    <Button color='primary' size="small"></Button>
                </CardActions>
            </Card>
        </PostContainer>
    );
}

// import React from "react"
// import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea"
// import CardMedia from "@material-ui/core/CardMedia/CardMedia"
// import Typography from "@material-ui/core/Typography/Typography"
// import { PostContainer } from "./Styled"


// const CardPost = (props) => {
//     return (
//         <PostContainer onClick={props.onClick}>
//             <CardActionArea>
//                 <CardMedia
//                     component={"img"}
//                     alt={props.title}
//                     height={"150px"}
//                     // image={props.image}
//                     title={props.title}
//                 />
//                 <PostContainer>
//                     <Typography align={"center"}>
//                     </Typography>
//                 </PostContainer>
//             </CardActionArea>
//         </PostContainer>

//     )
// }

// export default CardPost