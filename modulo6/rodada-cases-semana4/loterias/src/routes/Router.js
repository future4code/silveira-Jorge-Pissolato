import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MegaSenaPage from "../pages/MegaSena/MegaSenaPage";
import QuinaPage from "../pages/Quina/QuinaPage"
import LotoFacilPage from "../pages/Lotofacil/LotoFacilPage";
import LotoManiaPage from "../pages/Lotomania/LotoManiaPage";
import TimeManiaPage from "../pages/TimeMania/TimeManiaPage";
import DiaDeSortePage from "../pages/DiaDeSorte/DiaDeSortePage"

export const Router = () =>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path= "/megasena" element={<MegaSenaPage/>} /> 
            <Route path= "/quina" element={<QuinaPage/>} /> 
            <Route path= "/lotofacil" element={<LotoFacilPage/>} /> 
            <Route path= "/lotomania" element={<LotoManiaPage/>} /> 
            <Route path= "/timemania" element={<TimeManiaPage/>} /> 
            <Route path= "/dia-de-sorte" element={<DiaDeSortePage/>} /> 
        </Routes>
        </BrowserRouter>
    )
}
