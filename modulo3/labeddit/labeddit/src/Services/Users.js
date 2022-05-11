import axios from "axios"
import { BASE_URL } from "../Constants/Url"
import { goToFeed } from "../Routes/Coordinator"


export const login = (form, cleanFields, history, setBotaoDaDireita) => {
    axios.post(`${BASE_URL}/users/login`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            cleanFields()
            goToFeed(history)
            setBotaoDaDireita("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })

}

export const signUp = (form, cleanFields, history, setBotaoDaDireita) => {
    axios.post(`${BASE_URL}/users/signup`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            cleanFields()
            goToFeed(history)
            setBotaoDaDireita("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })

}

