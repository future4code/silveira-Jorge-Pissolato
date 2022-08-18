// CREATE TABLE IF NOT EXISTS dog_walking (
//     id VARCHAR(255) PRIMARY KEY,
//     status  VARCHAR(255) UNIQUE NOT NULL,
//     data  VARCHAR(255) NOT NULL,
//     preco VARCHAR(255) NOT NULL,
//     duracao VARCHAR(255) NOT NULL,
//     latitude VARCHAR(255) NOT NULL,
//     longitude VARCHAR(255) NOT NULL,
//     pets VARCHAR(255) NOT NULL,
//     inicio VARCHAR(255) NOT NULL,
//     fim VARCHAR(255) NOT NULL
//     )


export default class DogWalking {
    constructor(
        public id: string,
        public status: string,
        public data: string,
        public preco: string,
        public duracao: string,
        public latitude: number,
        public longitude: number,
        public pets: string,
        public inicio: string,
        public fim: string
    ){}
}