import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { corPrimaria, corNeutra } from './Cores';

const theme = createTheme({
  palette: {
    primary: {
      main: corPrimaria,
      contrastText: "white"
    },
    text:{
        primary: corNeutra,
    }
  },
});  

export default theme;

