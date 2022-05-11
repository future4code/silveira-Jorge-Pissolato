import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { goToFeed, goToLogin } from '../../Routes/Coordinator';
import {useHistory} from "react-router-dom"

function Header() {
    const history = useHistory()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="secondary" position="static">
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button onClick={()=> goToFeed(history)} color="inherit">Labeddit</Button>
                    </Typography>
                    <Button onClick={()=> goToLogin(history)} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
