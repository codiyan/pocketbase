/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "lwuvjuq56v9vyr5",
      "created": "2023-11-08 20:35:59.467Z",
      "updated": "2023-11-28 05:39:30.044Z",
      "name": "cases",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "p2y7x6wx",
          "name": "status",
          "type": "select",
          "required": true,
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
        },
        {
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
        },
        {
          "system": false,
          "id": "974edbel",
          "name": "first_name",
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
          "id": "ny7hzsrj",
          "name": "last_name",
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
          "id": "rqilx4tt",
          "name": "ssn",
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
          "id": "yeocrtki",
          "name": "sex",
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
          "id": "ika49ss4",
          "name": "dob",
          "type": "date",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "4ynq4e6h",
          "name": "phone_number",
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
          "id": "zl566g3y",
          "name": "email",
          "type": "email",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "o6g3pycj",
          "name": "subscriber",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "xaofd7he",
          "name": "insurance_details",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "yrauaoznqczp0pr",
      "created": "2023-11-08 20:41:01.913Z",
      "updated": "2023-11-20 06:47:47.493Z",
      "name": "surgery_scheduled",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "05a0xzsg",
          "name": "title",
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
          "id": "cjhocz0c",
          "name": "start",
          "type": "date",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "c3qozuk0",
          "name": "end",
          "type": "date",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "ryxk8wtn",
          "name": "surgeon",
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
        },
        {
          "system": false,
          "id": "zvldxoz1",
          "name": "case",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "lwuvjuq56v9vyr5",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "xgunlozw",
          "name": "procedures",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "bspf7mr38e7u0jy",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
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
    },
    {
      "id": "du149pi3gtxccfv",
      "created": "2023-11-08 21:12:37.172Z",
      "updated": "2023-11-20 06:47:47.476Z",
      "name": "case_activity_item",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "gilppmcd",
          "name": "created_by",
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
        },
        {
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
              "surgery_scheduled_added",
              "surgery_scheduled_removed",
              "surgery_scheduled_updated"
            ]
          }
        },
        {
          "system": false,
          "id": "kgasslc7",
          "name": "attachments",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 99,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "gbkbnyzy",
          "name": "case",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "lwuvjuq56v9vyr5",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "bbegmcbx",
          "name": "meta",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
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
    },
    {
      "id": "_pb_users_auth_",
      "created": "2023-11-20 06:47:47.324Z",
      "updated": "2023-11-27 20:34:47.291Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
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
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "ixnrk1fs3vyetge",
      "created": "2023-11-21 19:27:32.500Z",
      "updated": "2023-11-21 19:28:07.625Z",
      "name": "notifications",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "bijtokno",
          "name": "userId",
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
        },
        {
          "system": false,
          "id": "tjn302md",
          "name": "message",
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
    },
    {
      "id": "fwk34p2xgi0nzgt",
      "created": "2023-11-21 19:29:10.444Z",
      "updated": "2023-11-21 19:29:30.034Z",
      "name": "orders",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "q7liuzij",
          "name": "orderDetails",
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
          "id": "qwj47isa",
          "name": "orderDate",
          "type": "date",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "mgvobjrh",
          "name": "userId",
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
