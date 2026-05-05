const Veiculo = require('../models/Veiculo')

const cadastrar = async (req, res) => {
    // Recebendo os valores do front-end
    const valores = req.body 
    console.log('Dados recebidos do front =', req.body)

    try {
        await Veiculo.create(valores)

        res.status(201).json({ message: "Veículo cadastrado com sucesso!" })
    } catch (err) {
        // Log detalhado para você ver o erro real no terminal do VS Code
        console.error('Erro detalhado:', err) 
        res.status(500).json({ message: "Não foi possível cadastrar o veículo" })
    }
}

const listar = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll()
        res.status(200).json(veiculos)
    } catch (err) {
        console.error('Erro ao listar:', err)
        res.status(500).json({ message: "Não foi possível listar os veículos" })
    }
}

module.exports = { cadastrar, listar }