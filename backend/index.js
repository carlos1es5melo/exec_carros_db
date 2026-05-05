const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const veiculoController = require('./controller/veiculo.controller')

const hostname = 'localhost'
const PORT = 3000

// ---------------- Middleware ----------------
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
// ---------------- Rotas ---------------------

app.post('/veiculo', veiculoController.cadastrar)
app.get('/veiculos', veiculoController.listar)

app.get('/', (req,res) => {
    res.status(200).json({message: "aplicação rodando"})
})

// --------------- Server --------------

conn.sync()
.then(() => {
    app.listen(PORT,hostname, () => {
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.error('Erro ao conectar com o banco ',err)
})