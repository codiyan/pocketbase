/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lwuvjuq56v9vyr5",
    "created": "2023-11-08 20:35:59.467Z",
    "updated": "2023-11-08 20:35:59.467Z",
    "name": "cases",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p2y7x6wx",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "new",
            "pending",
            "scheduled",
            "closed"
          ]
        }
      },
      {
        "system": false,
        "id": "kekkvmwm",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lwuvjuq56v9vyr5");

  return dao.deleteCollection(collection);
})
