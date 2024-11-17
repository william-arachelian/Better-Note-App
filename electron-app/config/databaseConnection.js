import { Sequelize } from 'sequelize'

const databaseConnection = async () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  return sequelize
}

const closeDatabaseConnection = async (sequelize) => {
  try {
    await sequelize.close()
    console.log('Connection has been closed successfully.')
  } catch (error) {
    console.error('Unable to close the database connection:', error)
  }
}

export { databaseConnection, closeDatabaseConnection }
