const { Sequelize } = require('sequelize')
const db = new Sequelize('db_veiculo','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

db.authenticate(() => {
    try{
        console.log('Banco conectado com sucesso')
    }catch(err){
        console.log('Erro ao conectar ao banco',err)
    }
})

module.exports = db