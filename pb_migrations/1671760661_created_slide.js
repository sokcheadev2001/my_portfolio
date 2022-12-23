migrate((db) => {
  const collection = new Collection({
    "id": "b5gcoh15095s9h4",
    "created": "2022-12-23 01:57:41.793Z",
    "updated": "2022-12-23 01:57:41.793Z",
    "name": "slide",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w0zvthp5",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fc6p0nh3",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rbr0anas",
        "name": "link",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("b5gcoh15095s9h4");

  return dao.deleteCollection(collection);
})
