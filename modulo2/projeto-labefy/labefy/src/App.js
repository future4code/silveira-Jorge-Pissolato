import React from "react";
import styledComponents from "styled-components";
import axios from "axios";
import TelaCadastro from "./Components/TelaCadastro";
import TelaPlaylist from "./Components/TelaPlaylist";


export default class App extends React.Component {

  state = {
    TelaAtual: "cadastro"
  }

  mudarDeTela = () => {
    switch (this.state.TelaAtual) {
      case "cadastro":
        return <TelaCadastro irParaPlaylist={this.irParaPlaylist} />
      case "playlist":
        return <TelaPlaylist irParaCadastro={this.irParaCadastro} />
        default:
          return <div>Erro! Tente novamente.</div>
    }
  }

  irParaCadastro = () => {
    this.setState({TelaAtual: "cadastro"})
  }
  irParaPlaylist = () => {
    this.setState({TelaAtual: "playlist"})
  }
  irParaDetalhes = () => {
    this.setState({TelaAtual: "detalhes"})
  }

  render() {
    return (
      <div>
        {this.mudarDeTela()}
      </div>


    )
  }
}