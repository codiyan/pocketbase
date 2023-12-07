/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5")

  // remove
  collection.schema.removeField("o6g3pycj")

  // remove
  collection.schema.removeField("xaofd7he")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6g3pycj",
    "name": "subscriber",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xaofd7he",
    "name": "insurance_details",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
