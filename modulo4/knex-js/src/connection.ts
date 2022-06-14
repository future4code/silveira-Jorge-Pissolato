import knex from "knex";

const connection = knex({
    client: "mysql",
    connection:{
        host: "35.226.146.116",
        user: "21815311-jorge-pissolato",
        password: "",
        database: "silveira-21815311-jorge-pissolato",
        multiStatements: true
    }

})

export default connection
