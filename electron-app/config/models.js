import { Sequelize, DataTypes, Model } from 'sequelize'
import { databaseConnection } from './databaseConnection'

const sequelize = databaseConnection()

/*
 * TODO Add checks for all paths to ensure they are valid
 * TODO figure out the vector database stuff properly
 * TODO Add a check to make sure the child and parent ids are valid
 */

class Document extends Model {
  async getId() {
    return this.id
  }

  async getTitle() {
    return this.title
  }

  async updateTitle(newTitle) {
    this.title = newTitle
    await this.save()
  }

  async getDocumentPath() {
    return this.path
  }

  async updatePath(newPath) {
    this.path = newPath
    await this.save()
  }

  async getVectorDatabasePath() {
    return this.vectorDatabasePath
  }

  async updateVectorDatabasePath(newPath) {
    this.vectorDatabasePath = newPath
    await this.save()
  }

  async getNotes() {
    return this.notes
  }

  async addNote(noteID) {
    this.notes.push(noteID)
    await this.save()
  }

  async deleteNote(noteID) {
    this.notes = this.notes.filter((note) => note !== noteID)
    await this.save()
  }

  async getCreatedAt() {
    return this.createdAt
  }

  async getUpdatedAt() {
    return this.updatedAt
  }

  async updateUpdatedAt() {
    this.updatedAt = new Date()
    await this.save()
  }
}

Document.init({
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

class Note extends Model {}

Note.init({
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
