/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l90aohja",
    "name": "cost",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wf7twjwb",
    "name": "mins",
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
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy")

  // remove
  collection.schema.removeField("l90aohja")

  // remove
  collection.schema.removeField("wf7twjwb")

  return dao.saveCollection(collection)
})
