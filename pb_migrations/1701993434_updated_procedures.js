/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy")

  // remove
  collection.schema.removeField("1oa9rukh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mzplpi6p",
    "name": "site",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1oa9rukh",
    "name": "code",
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

  // remove
  collection.schema.removeField("mzplpi6p")

  return dao.saveCollection(collection)
})
