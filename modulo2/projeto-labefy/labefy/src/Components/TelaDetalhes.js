import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class TelaDetalhes extends React.Component {


    render() {
        return (
            <div>Detalhe da Playlist
            <button onClick={this.props.irParaPlaylist}> Ir para Playlists</button>
            </div>
        )
    }
}