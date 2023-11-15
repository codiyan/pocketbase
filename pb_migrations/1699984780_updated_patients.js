/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qiwzwo5ntv2e6j2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yrsfmx05",
    "name": "age",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qiwzwo5ntv2e6j2")

  // remove
  collection.schema.removeField("yrsfmx05")

  return dao.saveCollection(collection)
})
