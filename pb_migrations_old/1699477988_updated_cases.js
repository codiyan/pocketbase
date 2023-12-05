/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u2mqclyd",
    "name": "activity_items",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "du149pi3gtxccfv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5")

  // remove
  collection.schema.removeField("u2mqclyd")

  return dao.saveCollection(collection)
})
