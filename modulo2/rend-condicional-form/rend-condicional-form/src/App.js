
import './App.css';
import React from "react";
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';


class App extends React.Component {
  state = {
    etapa: 1,

  };

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 1:
        return <Etapa2 />;
      case 1:
        return <Etapa3 />;
        default: 
        return <Final />;
    }
  }


  irParaProximaEtapa = () => {
    this.onclick(this.state.etapa + 1)
  }



  render() {
    return(
      <div>
      {this.renderizaEtapa()}
      <button>Próxima Etapa</button>
    </div>
    )


  }

}


export default App;
