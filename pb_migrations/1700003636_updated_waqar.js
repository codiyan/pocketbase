/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qp3wuadn1eomw6e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovjph6zz",
    "name": "file",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "application/pdf",
        "text/csv"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qp3wuadn1eomw6e")

  // remove
  collection.schema.removeField("ovjph6zz")

  return dao.saveCollection(collection)
})
