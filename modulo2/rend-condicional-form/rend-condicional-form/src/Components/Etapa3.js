import React, { Component } from 'react';

export default class Etapa3 extends Component {

    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3>
                <div>
                    <p>7. Por que você não terminou um curso de graduação ?</p>
                    <input>placeholder={"Mensagem"}</input>
                    <div>
                        <p>8. Você fez algum curso complementar ?</p>
                        <input>placeholder={"Mensagem"}</input>
                        <select>
                            <option>"Nenhum"</option>
                            <option>"Curso Técnico"</option>
                            <option>"Curso de Inglês"</option>
                        </select>
                    </div>
                    <div>
                        <button>"Próxima Etapa"</button>
                    </div>
                </div>
            </div>
        )



    }

}