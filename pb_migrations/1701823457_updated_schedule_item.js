/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xo55tql9",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "surgery",
        "block"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // remove
  collection.schema.removeField("xo55tql9")

  return dao.saveCollection(collection)
})
