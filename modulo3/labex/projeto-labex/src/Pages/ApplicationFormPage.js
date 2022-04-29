import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./HomePage";
import { backToListTripsPage } from "../Routs/Coordinator"
import axios from "axios";
import useForm from "../Hooks/UseForm";

function ApplicationFormPage() {
    
    const[trips, setTrips] = useState([])
    const[idTrip, setIdTrip] = useState("")

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: "",

    })

    const pegarListaDeViagens = ()=> {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-pissolato-silveira/trips`)
        .then((response)=>{
            setTrips(response.data.trips)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    console.log(trips)
    
    useEffect(()=>{
        pegarListaDeViagens()
    }, [])

    const navigate = useNavigate()


    const enviarFormulario = (event) => {
        event.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-pissolato-silveira/trips/${idTrip}/apply`
        axios.post(url, form,)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(form)
        cleanFields()
    }
    const selectViagens = trips.map((trip)=>{
        return(
            <option key={trip.id} value={trip.id}>{trip.name}</option>
        )
    }) 

    const onChangeSelect = (event) =>{
        setIdTrip(event.target.value)
    }

    console.log(idTrip)

    return (
        <GlobalStyle>
            <h1>FORMULARIO DE INSCRIÇÃO</h1>
            <button onClick={() => backToListTripsPage(navigate)}>Voltar</button>
            <form onSubmit={enviarFormulario}>
                <select onChange={onChangeSelect} value={idTrip}>
                    <option disabled value={""}>Selecione uma viagem</option>
                    {selectViagens}
                </select>
                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={"nome"}
                    required
                />
                <input
                    name="age"
                    value={form.age}
                    onChange={onChange}
                    placeholder={"idade"}
                    required
                    type="number"
                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder={"texto"}
                    required
                />
                <input
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    placeholder={"profissão"}
                    required
                />
                <input
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    placeholder={"país"}
                    required
                />
                <button>Enviar Formulario</button>
            </form>
        </GlobalStyle>
    )
}

export default ApplicationFormPage;







