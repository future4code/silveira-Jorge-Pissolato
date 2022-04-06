
import React from 'react';
import axios from 'axios';
import CadastroUsuarios from './components/CadastroUsuarios';
import ListaDeUsuarios from './components/ListaDeUsuarios';


export default class App extends React.Component {

  state = {
    telaAtual: "cadastro",

  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroUsuarios mudaParaLista={this.mudaParaLista} />;
      case "lista":
        return <ListaDeUsuarios mudaParaCadastro={this.mudaParaCadastro} />;
      default:
        return <div>Página não encontrada</div>;
    }
  }
  mudaParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  mudaParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }


  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>
    )
  }
}


