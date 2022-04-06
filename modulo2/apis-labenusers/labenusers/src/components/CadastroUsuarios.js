import React from "react"
import axios from "axios"




export default class CadastroUsuarios extends React.Component {

    state = {
        nome: "",
        email: "",
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    cadastrarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "jorge-pissolato"
            }
        })
            .then((response) => {
                alert("O usuário(a) foi cadastrado(a)")
                this.setState({nome:"", email:""}) 
            })
            .catch((error) => {
                alert(error.response.data.message('esse usuario já existe'))

            })
    }


    render() {
        return (
            <div>
                <h1>Cadastro de Usuários</h1>
                <button onClick={this.props.mudaParaLista}>Ir para Lista de Usuários</button>
                <div>
                    <input
                        placeholder="Nome do Usuário"
                        value={this.state.nome}
                        onChange={this.onChangeNome} />
                    <input
                        placeholder="E-mail do Usuário"
                        value={this.state.email}
                        onChange={this.onChangeEmail} />
                    <button onClick={this.cadastrarUsuario}>Cadastrar</button>
                </div>

            </div>
        )
    }
}