import { useNavigate } from "react-router-dom"
import { goQuinaPage, goLotoFacilPage, goDiaDeSortePage, goMegaSenaPage, goTimeManiaPage, goLotoManiaPage } from "../../routes/Coordinator"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function SelectBox() {
  
  
    let navigate = useNavigate();
    

     function handleChange(value) {
       navigate(`/${value}`);
     }
    
  
  return (
    <select onChange={(event) => handleChange(event.target.value)}>
      <option>megasena</option>
      <option>quina</option>
      <option >lotofacil</option>
      <option>lotomania</option>
      <option>timemania</option>
      <option>dia-de-sorte</option>
    </select>
  );
}
