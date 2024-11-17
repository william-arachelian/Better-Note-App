const { Sequelize } = require('sequelize')
const { applyExtraSetup } = require('./extraSetup.js')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

const modelDefiners = [require('./models/documentModel.js'), require('./models/noteModel.js')]

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize)
}

applyExtraSetup(sequelize)

module.exports = sequelize
