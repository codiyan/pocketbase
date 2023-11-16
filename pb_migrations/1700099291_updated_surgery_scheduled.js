/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // remove
  collection.schema.removeField("c4g0m2mg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4g0m2mg",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "surgery",
        "consultation"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
