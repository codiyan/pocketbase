/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bspf7mr38e7u0jy",
    "created": "2023-11-08 21:15:00.770Z",
    "updated": "2023-11-08 21:15:00.770Z",
    "name": "procedures",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0r8y2ugb",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("bspf7mr38e7u0jy");

  return dao.deleteCollection(collection);
})
