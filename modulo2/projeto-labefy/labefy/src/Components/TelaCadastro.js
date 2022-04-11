import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
text-align: center;
background-color: SteelBlue;

`

export default class TelaCadastro extends React.Component {



    state = {
        nome: ""
    }

    nomeDaPlaylist = (event) => {
        this.setState({ nome: event.target.value })
    }

    cadastrarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        const body = { name: this.state.nome };
        axios.post(url, body, {
            headers: {
                Authorization: "jorge-pissolato-silveira"
            }
        })
            .then((response) => {
                alert("Playlist cadastrada com sucesso!")
                this.setState({ nome: "" })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    render() {
        return (
            <div>
                <CardBody>
                <h1>LABEFY JORGE PISSOLATO</h1>
                </CardBody>
                <hr />
                <CardBody>
                <h2>CADASTRAR  PLAYLISTS</h2>
                <input
                    placeholder="Nome da playlist"
                    value={this.state.nome}
                    onChange={this.nomeDaPlaylist}
                />
                <button onClick={this.cadastrarPlaylist}>Cadastrar</button>
                </CardBody>
                <hr />
                <CardBody>
                <button onClick={this.props.irParaPlaylist}> Ir para Playlists</button>
                </CardBody>

            </div>
        )
    }
}