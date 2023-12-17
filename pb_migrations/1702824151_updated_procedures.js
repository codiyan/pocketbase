/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qds6kipo",
    "name": "RVU",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3dovfvbi",
    "name": "ICD10",
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
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy")

  // remove
  collection.schema.removeField("qds6kipo")

  // remove
  collection.schema.removeField("3dovfvbi")

  return dao.saveCollection(collection)
})
