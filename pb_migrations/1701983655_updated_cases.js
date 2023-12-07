/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkybqwsi",
    "name": "time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5")

  // remove
  collection.schema.removeField("gkybqwsi")

  return dao.saveCollection(collection)
})
