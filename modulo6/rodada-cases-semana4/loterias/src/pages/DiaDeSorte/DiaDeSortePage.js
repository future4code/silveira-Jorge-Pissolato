import React from "react"
import SelectBox from "../../components/SelectBox/SelectBox"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import { BoxGreen, Concurso, ConcursoStile, Data, LogoSena, MegaPage, SelectBoxStile, Sorteio, PaginaSena } from "./styled"




const DiaDeSortePage = ()=>{
    const loterias = useRequestData([], `${BASE_URL}/loterias`)
    const concursos = useRequestData([], `${BASE_URL}/concursos/440`)
    console.log(loterias[0])
    console.log(concursos[0])

    const megaSena = loterias[0].filter(function (obj) {
        return obj.nome == "dia de sorte"
    })
    console.log(megaSena)
    return (
        <PaginaSena>
            <BoxGreen >
                <LogoSena>
                    <h2>Dia de Sorte</h2>
                </LogoSena>
                <SelectBoxStile>
                    <SelectBox />
                </SelectBoxStile>
                <Concurso>
                    <p>Concurso: {concursos[0].id}</p>
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
        </PaginaSena>
    )
}

export default DiaDeSortePage