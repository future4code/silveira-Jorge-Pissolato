import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlaylist = styled.div`
border: 2px solid black;
padding: 10px;
margin: 10px;
display: flex;
width: 97%;
justify-content: space-between ;
background-color: Lavender;
`
const Body = styled.div`
text-align: center;
background-color: SteelBlue;
`

export default class TelaPlaylist extends React.Component {
    componentDidMount() {
        this.armazenarPlaylist()
    }

    state = {
        playlists: [],
    }

    armazenarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

        axios.get(url, {
            headers: {
                Authorization: "jorge-pissolato-silveira"
            }
        })
            .then((response) => {
                console.log(response.data)
                this.setState({ playlists: response.data.result.list })

            })
            .catch((error) => {
                alert("A playlist não foi armazenada.")
            })

    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

        axios.delete(url, {
            headers: {
                Authorization: "jorge-pissolato-silveira"
            }
        })
            .then((response) => {
                console.log(response)
                alert("Playlist excluída!")
                this.armazenarPlaylist()
            })
            .catch((error) => {
                alert("Não foi possível excluir ess Playlist")
            })
    }

    mudarParaDetalhes = () => {

    }
    render() {


        const listaDePlaylists = this.state.playlists.map(musica => {
            return <CardPlaylist key={musica.id}>
                {musica.name}
                <button onClick={() => this.deletarPlaylist(musica.id)}>Deletar</button>
                <button onClick={this.props.irParaDetalhes}>Detalhes</button>
            </CardPlaylist>

        })
        return (
            <div>
                <Body>
                    <h1>LABEFY JORGE PISSOLATO</h1>
                </Body>

                <hr />

                <Body>
                <h2>PLAYLISTS</h2>
                <button onClick={this.props.irParaCadastro}> Ir para Cadastro</button>
                </Body>

                {listaDePlaylists}
            </div>


        )
    }
}