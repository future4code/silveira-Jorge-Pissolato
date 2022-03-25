import React from "react"

class MeuComponenteReact extends React.Component {
	state = {
		nome: '',
    mensagem: ''
	}

	onChangeNome = (event) => {
		this.setState({nome: event.target.value})
   
	}

  onChangeMensagem = (event) => {
		this.setState({mensagem: event.target.value})
	}

  onClickEnviar = () => {
    console.log(this.state)
    this.setState({mensagem: ''})
  }

	render() {
    console.log(this.state)
    
		return (
        <div>
				  <input placeholder={"Usuário"} value={this.state.nome} onChange={this.onChangeNome}/>
				  <input placeholder={"Mensagem"} value={this.state.mensagem} onChange={this.onChangeMensagem}/>
          <div>
            <p><b>{this.state.nome}</b>  {this.state.mensagem}</p>
          </div>
            <button onClick={this.onClickEnviar}>Enviar</button>
        </div>

		)
	}
}

export default MeuComponenteReact


