import React from "react"
import SelectBox from "../../components/SelectBox/SelectBox"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import { BoxGreen, Concurso, ConcursoStile, Data, LogoSena, MegaPage, SelectBoxStile, Sorteio } from "./styled"
import Sidebar from "../../assets/Sidebar.jpg"




const MegaSenaPage = () => {

    const loterias = useRequestData([], `${BASE_URL}/loterias`)
    const concursos = useRequestData([], `${BASE_URL}/concursos/2359`)
    console.log(loterias[0])
    console.log(concursos[0])

    const megaSena = loterias[0].filter(function (obj) {
        return obj.nome == "mega-sena"
    })
    console.log(megaSena)
    return (
        <div>


            <BoxGreen >
                <LogoSena>
                    <h2>MEGA-SENA</h2>
                </LogoSena>
                <SelectBoxStile>
                    <SelectBox />
                </SelectBoxStile>
                <Concurso>
                    <p>{concursos[0].id}</p>
                    <Data>
                        {concursos[0].data}
                    </Data>
                </Concurso>
            </BoxGreen>
            <ConcursoStile>
                <Sorteio>
                    {concursos[0].numeros}
                </Sorteio>
            </ConcursoStile>
        </div>
    )

}

export default MegaSenaPage