import React, { useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import LogoVermelha from '../.././assets/logo-vermelha.png';
import Backward from '../../assets/back.png';
import { Hr, Back, Logo, DivLogo, DivForm, Button } from './styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signup } from '../../services/users';
import { goBack } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import  useRequestData from "../../hooks/useRequestData"

const EditarPerfil = () => {
    
    const perfil = useRequestData({}, `${BASE_URL}/profile`)

    console.log(perfil[0].user.name)
    
    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" })
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();
        signup(form, clear, navigate)
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
                        value={perfil[0].user.name}
                        onChange={onChange}
                        id="outlined-basic"
                        label="Nome"
                        margin='dense'
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                        variant="outlined"
                        placeholder='Nome e sobrenome'
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        id="outlined-basic"
                        label="E-mail"
                        margin='dense'
                        type="email"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                        variant="outlined"
                        placeholder='email@email.com'
                    />
                    <TextField
                        name={"cpf"}
                        value={form.cpf}
                        onChange={onChange}
                        id="outlined-basic"
                        label="CPF"
                        margin='dense'
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                        variant="outlined"
                        placeholder='000.000.000-00'
                    />

                    <Button><strong>Atualizar dados</strong></Button>
                </form>
            </DivForm>
        </div>
    )
}


export default EditarPerfil
