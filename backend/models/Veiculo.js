const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Veiculo = db.define('Veiculo', {
    codVeiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    categoria: {
        type: DataTypes.ENUM('popular', 'sedan', 'luxo'),
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precoFabrica: {
        type: DataTypes.DECIMAL(10, 2), // 10 dígitos no total, 2 após a vírgula
        allowNull: false,
    },
    precoVenda: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'veiculos' // Define o nome da tabela no db_veiculo
})

module.exports = Veiculo