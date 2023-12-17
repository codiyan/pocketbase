/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("du149pi3gtxccfv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2fwveow6",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "note",
        "action_required"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("du149pi3gtxccfv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2fwveow6",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "note",
        "action"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
