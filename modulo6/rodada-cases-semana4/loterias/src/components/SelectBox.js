import { useNavigate } from "react-router-dom"
import { goQuinaPage, goLotoFacilPage, goDiaDeSortePage, goMegaSenaPage, goTimeManiaPage, goLotoManiaPage } from "../routes/Coordinator"

const SelectBox = () => {

    const navigate = useNavigate()

    return (
        <div>
            <select>
                <option><button onClick={() => goQuinaPage(navigate)}>Quina</button></option>
                <option><button onClick={() => goLotoFacilPage(navigate)}>LotoFácil </button></option>
                <option><button onClick={() => goLotoManiaPage(navigate)}>LotoMania </button></option>
                <option><button onClick={() => goTimeManiaPage(navigate)}>TimeMania </button></option>
                <option><button onClick={() => goDiaDeSortePage(navigate)}>Dia de Sorte </button></option>
                <option><button onClick={() => goMegaSenaPage(navigate)}>MegaSena </button></option>
            </select>
        </div>
    )
}
export default SelectBox