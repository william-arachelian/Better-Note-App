function applyExtraSetup(sequelize) {
  // Apply extra setup
  const { Document, Note } = sequelize.models

  Document.hasMany(Note)
  Note.belongsTo(Document)
}

module.exports = { applyExtraSetup }
