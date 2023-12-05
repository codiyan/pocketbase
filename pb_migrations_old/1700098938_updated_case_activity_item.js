/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("du149pi3gtxccfv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2fwveow6",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "note",
        "schedule_shift_added",
        "schedule_shift_removed",
        "schedule_shift_updated"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("du149pi3gtxccfv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2fwveow6",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "note",
        "appointment_added",
        "appointment_updated",
        "apppointment_deleted"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
