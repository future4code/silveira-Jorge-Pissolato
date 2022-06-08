//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { Knex } from "knex";



//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

//Exemplos - consultas no banco ou querys
//Exemplos - endpoints

//Exercício 1

//a) Explique como é a resposta que temos quando usamos o raw. 

// o método raw permite que enviemos uma
// query para o banco usando a linguagem SQL diretamente
// Normalmente, usamos template strings para montar as
// queries do raw. Isso permite quebrar linhas e acessar
// variáveis do código.

// b) Faça uma função que busque um ator pelo nome;

const buscarActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

// c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. 
// Para atrizes, female e para atores male.

const contaActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const conta = result[0][0].conta;
  return conta;
};

//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
