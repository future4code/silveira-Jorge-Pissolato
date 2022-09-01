// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import { BASE_URL } from "../constants/url"
// import { GlobalStateContext } from "./GlobalStateContext"

// export default function GlobalState(props) {

//     const [loterias, setLoterias] = useState([])

//     console.log(loterias)
    
//     const getLoterias = () => {
//         axios.get(`${BASE_URL}/loterias`)
//             .then((response) => {
//                 setLoterias(response.data)
//             }).catch((err) => console.log(err))
//     }

//     useEffect(() => {
//         getLoterias();
//     }, [])


//     const data = {
//         loterias,
//         setLoterias
//     }

//     return (
//         <div>
//             <GlobalStateContext.Provider value={data} >
//                 {props.children}
//             </GlobalStateContext.Provider>
//         </div>

//     )
// }

