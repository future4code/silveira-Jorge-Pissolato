import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Constants/Temas";
import Router from "./Routes/Router";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;


