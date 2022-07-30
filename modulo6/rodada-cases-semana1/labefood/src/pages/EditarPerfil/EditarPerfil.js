import React, { useEffect, useState } from "react"
import TextField from '@material-ui/core/TextField';
import LogoVermelha from '../.././assets/logo-vermelha.png';
import Backward from '../../assets/back.png';
import { Hr, Back, Logo, DivLogo, DivForm, Button } from './styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signup } from '../../services/users';
import { goBack } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData"
import axios from "axios";

const EditarPerfil = () => {

    const perfil = useRequestData({}, `${BASE_URL}/profile`)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')

    // setName(perfil[0].user && perfil[0].user.name)
    // setEmail(perfil[0].user && perfil[0].user.email)
    // setCpf(perfil[0].user && perfil[0].user.cpf)

    const getPerfil = async()=>{
        await axios.get(`${BASE_URL}/profile`, {
            headers:{
                auth: window.localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setName(res.data.user.name)
            setEmail(res.data.user.email)
            setCpf(res.data.user.cpf)
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    const atualizarPerfil = async() => {
        const body = {
            name,
            email,
            cpf
        }
        await axios.put(`${BASE_URL}/profile`,body, {
            headers: {
                auth: window. localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    
    useEffect(()=>{
        getPerfil()
    },[])

    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" })
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();
        signup(form, clear, navigate)
        atualizarPerfil()
    }


    return (
        <div>
            <DivLogo>
                <Back onClick={() => goBack(navigate)} src={Backward} />
                <Hr></Hr>
                <Logo src={LogoVermelha} />
            </DivLogo>
            <h3>Editar Perfil</h3>
            <DivForm>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"name"}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        id="outlined-basic"
                        // label="Nome"
                        margin='dense'
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        // required
                        variant="outlined"
                    // placeholder='Nome e sobrenome'
                    />
                    <TextField
                        name={"email"}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        id="outlined-basic"
                        // label="E-mail"
                        margin='dense'
                        type="email"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        // required
                        variant="outlined"
                    // placeholder='email@email.com'
                    />
                    <TextField
                        name={"cpf"}
                        value={cpf}
                        onChange={(e)=>setCpf(e.target.value)}
                        id="outlined-basic"
                        // label="CPF"
                        margin='dense'
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        // required
                        variant="outlined"
                    // placeholder='000.000.000-00'
                    />

                    <Button><strong>Atualizar dados</strong></Button>
                </form>
            </DivForm>
        </div>
    )
}


export default EditarPerfil
