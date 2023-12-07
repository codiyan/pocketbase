/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qiwzwo5ntv2e6j2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lotp2kxy",
    "name": "age",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qiwzwo5ntv2e6j2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lotp2kxy",
    "name": "Age",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
