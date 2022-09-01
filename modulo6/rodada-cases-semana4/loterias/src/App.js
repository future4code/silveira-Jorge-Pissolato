import React from "react";
import { Router } from "./routes/Router";
import GlobalState from "./global/GlobalState"
import LotoFacilPage from "./pages/Lotofacil/LotoFacilPage";
import LotoManiaPage from "./pages/Lotomania/LotoManiaPage";
import MegaSenaPage from "./pages/MegaSena/MegaSenaPage";
import DiaDeSortePage from "./pages/DiaDeSorte/DiaDeSortePage";
import TimeManiaPage from "./pages/TimeMania/TimeManiaPage";
import QuinaPage from "./pages/Quina/QuinaPage";
import { ThemeProvider } from "@mui/material";
import {theme} from "./constants/theme"
import SelectBox from "./components/SelectBox/SelectBox";







function App() {
  return (
    <div>
      <Router/>
    </div>
  )
}

export default App;
