/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7354wyo9hwmlh0e")

  // remove
  collection.schema.removeField("miyrurhi")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7354wyo9hwmlh0e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "miyrurhi",
    "name": "size",
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
})
