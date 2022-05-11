import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Constants/Temas";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";


function App() {
  
  const token = localStorage.getItem("token")
  const [botaoDaDireita, setBotaoDaDireita] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header botaoDaDireita={botaoDaDireita} setBotaoDaDireita={setBotaoDaDireita}/>
      <Router botaoDaDireita={botaoDaDireita} setBotaoDaDireita={setBotaoDaDireita}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


