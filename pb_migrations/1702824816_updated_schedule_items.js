/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // update
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
        "block",
        "consultation",
        "task"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrauaoznqczp0pr")

  // update
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
        "block",
        "consultation",
        "action"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
