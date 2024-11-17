const { models } = require('../config')

// console.log(models)

async function seed() {
  await models.Document.sync({ force: true })
  const doc1 = await models.Document.create({
    title: 'Document 1',
    path: 'electron-app/resources/documents/Textbook-392.pdf',
    vectorDatabasePath: 'empty/path'
  })

  const doc2 = await models.Document.create({
    title: 'Document 2',
    path: 'electron-app/resources/documents/Textbook-392.pdf',
    vectorDatabasePath: 'empty/path'
  })

  const test_doc1 = await (await models.Document.findOne({ name: 'Document 1' })).toJSON()
  console.log(test_doc1)
}

seed()
