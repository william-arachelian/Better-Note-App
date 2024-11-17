const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Document', {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
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
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true
    }
  })
}
