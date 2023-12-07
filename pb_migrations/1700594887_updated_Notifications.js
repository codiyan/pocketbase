/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ixnrk1fs3vyetge")

  collection.name = "notifications"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ixnrk1fs3vyetge")

  collection.name = "Notifications"

  return dao.saveCollection(collection)
})
