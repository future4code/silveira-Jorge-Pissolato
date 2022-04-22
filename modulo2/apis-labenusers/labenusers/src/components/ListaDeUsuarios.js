import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
border: 3px solid black;
padding: 20px;
margin: 20px;
display: flex;
width: 150px;
justify-content: space-between;
background-color: aquamarine;

`


export default class ListaDeUsuarios extends React.Component {

    state = {
        usuariosCadastrados: [],
    }

    componentDidMount() {
        this.armazenarUsuarios()
    }

    armazenarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "jorge-pissolato"
            }
        })
            .then((response) => {
                this.setState({ usuariosCadastrados: response.data })
            })
            .catch((error) => {
                alert("ocorreu um erro, usuário não foi cadastrado")
            })
    }

    excluirUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "jorge-pissolato"
            }
        })
            .then((response) => {
                alert("usuário(a) excluído com sucesso!")
                this.armazenarUsuarios()

            })
            .catch((error) => {
                alert("Erro ao excluir o usuário(a)")
                
            })
    }

    render() {

        const listaCompleta = this.state.usuariosCadastrados.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.excluirUsuario(user.id)}>Excluir</button>
            </CardUsuario>
        })

        return (
            <div>
                <h1>Lista de Usuários</h1>
                <button onClick={this.props.mudaParaCadastro}>Ir para Cadastro de Usuários</button>

                {listaCompleta}

            </div>
        )
    }
}



