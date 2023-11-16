/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgunlozw",
    "name": "procedures",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "bspf7mr38e7u0jy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // remove
  collection.schema.removeField("xgunlozw")

  return dao.saveCollection(collection)
})
