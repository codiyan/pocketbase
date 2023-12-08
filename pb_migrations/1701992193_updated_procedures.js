/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pqqf424z",
    "name": "laterality",
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
    "id": "i3ttcfon",
    "name": "cpt_code",
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
  collection.schema.removeField("pqqf424z")

  // remove
  collection.schema.removeField("i3ttcfon")

  return dao.saveCollection(collection)
})
