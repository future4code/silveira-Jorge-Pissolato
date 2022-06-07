

//EXERCÍCIO 1

// CREATE TABLE Actor (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR (255) NOT NULL,
//     salary FLOAT NOT NULL,
//     birth_date DATE NOT NULL,
//     gender VARCHAR(6) NOT NULL
// );

// a) Nesta tabela, utilizamos o FLOAT para declarar o salário, 
// porque esta é uma forma de representar um número não inteiro em uma tabela. 
// Explique os demais comandos que estão nessa query.



//VARCHAR(n) - strings de no máximo n caracteres
//DATE - representa uma data (YYYY-MM-DD)
//DOUBLE/FLOAT - números não inteiros


// b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. 
// Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

//Mosta os dados do aluno
//Mosta a tabela actor


// c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. 
// Utilize o comando  DESCRIBE Actor e explique os resultados.

//Mostra a tabela com todos os dados(completa) 



//EXERCÍCIO 2

// a) Escreva uma query que crie a atriz Glória Pires, 
// com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963


// INSERT INTO Actor (id, name, salary, birth_date, gender)
// VALUES(
//   "002", 
//   "Glória Pires",
//   120000000,
//   "1963-08-23", 
//   "male"
// );