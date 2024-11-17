import { Sequelize, DataTypes, Model } from 'sequelize'
import { databaseConnection } from './databaseConnection'

const sequelize = databaseConnection()

/*
 * TODO Add checks for all paths to ensure they are valid
 * TODO figure out the vector database stuff properly
 * TODO Add a check to make sure the child and parent ids are valid
 */

const Document = sequelize.define('Document', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vectorDatabasePath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  markdownPath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pageNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
})

const makeDatabase = async () => {
  await sequelize.sync()
  return sequelize
}

export { Document, Note, makeDatabase }
