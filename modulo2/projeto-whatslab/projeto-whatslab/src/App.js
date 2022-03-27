import React from "react"
import styled from "styled-components"



const InputNome = styled.input`
 width: 100px;

`

const InputMensagem = styled.input`
 flex-grow: 1;

`

const Inputs = styled.div`



display: flex;
height: 4vh;
background-color: azure;
width: 500px; 
margin-left: auto;
margin-right: auto;

`

const ContainerMensagem = styled.div`
	
    height: 100vh;
    border: 1px solid black;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column-reverse;
	background-color: azure;
	width: 500px; 
    margin-left: auto;
    margin-right: auto;
	
   
`

const Container = styled.div`
height: 100%;
	
`




class App extends React.Component {
	state = {
		nome: '',
		mensagem: '',
		listaDeMensagens: []
	}

	onChangeNome = (event) => {
		this.setState({ nome: event.target.value })

	}

	onChangeMensagem = (event) => {
		this.setState({ mensagem: event.target.value })
	}

	onClickEnviar = () => {
		let novaMensagem = { nome: this.state.nome, mensagem: this.state.mensagem }
		let novaLista = [novaMensagem, ...this.state.listaDeMensagens]
		this.setState({ listaDeMensagens: novaLista })
		this.setState({ nome: '', mensagem: '' })
	}

	enviarComEnter = (event) => {
		console.log(event.key)
		if (event.key === 'Enter') {
			this.onClickEnviar()
		}
	}

	render() {
		return (
			<div>
				<ContainerMensagem>
					{this.state.listaDeMensagens.map((item, index) => {
						return <p><b>{item.nome}:</b> {item.mensagem}</p>
					})}
				</ContainerMensagem>
				<Container>
					<Inputs>
						<InputNome placeholder={"Usuário"} value={this.state.nome} onChange={this.onChangeNome} />
						<InputMensagem placeholder={"Mensagem"} value={this.state.mensagem} onChange={this.onChangeMensagem}
							onKeyPress={this.enviarComEnter} />

						<button onClick={this.onClickEnviar}>Enviar</button>
					</Inputs>
				</Container>
			</div>

		)
	}
}

export default App


