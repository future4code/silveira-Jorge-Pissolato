import React from "react";
import theme from "./constants/theme";
import { ThemeProvider } from '@material-ui/core/styles'
import { Router } from "./src/routes/Router";
import GlobalState from "./global/GlobalState";


const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>

  );
}

export default App;


// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9