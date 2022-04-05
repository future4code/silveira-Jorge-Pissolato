import React, { Component } from 'react';



export default class Etapa1 extends Component {

    render() {
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <div>
                    <p>1. Qual o seu nome ?</p>
                    <input>placeholder={"Mensagem"} </input>
                    <div>
                        <p>2. Qual a sua idade ?</p>
                        <input>placeholder={"Mensagem"} </input>
                    </div>
                    <p>2. Qual a sua escolaridade ?</p>
                    <input>placeholder={"Mensagem"} </input>
                    <select>
                        <option>"Ensino Médio Incompleto"</option>
                        <option>"Ensino Médio Completo"</option>
                        <option>"Ensino Superior Incompleto"</option>
                        <option>"Ensino Médio Completo"</option>
                    </select>
                    <div>
                        <button>Próxima Etapa</button>
                    </div>
                </div>
            </div>
        )
    }
}