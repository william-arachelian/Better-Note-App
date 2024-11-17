const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Note', {
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
}
