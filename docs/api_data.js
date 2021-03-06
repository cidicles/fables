define({ "api": [
  {
    "type": "post",
    "url": "/fable/messages/:collectionId",
    "title": "Create a Fable Message",
    "name": "Create_a_Fable_Message",
    "group": "Fable_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the Fable.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fable_Messages"
  },
  {
    "type": "delete",
    "url": "/fable/messages/:collectionId/:messageId",
    "title": "Delete a Fable Message",
    "name": "Delete_a_Fable_Message",
    "group": "Fable_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the Fable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>Id of the Message.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "authenticated creator"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fable_Messages"
  },
  {
    "type": "get",
    "url": "/fable/:collectionId",
    "title": "Get a single fables messages",
    "name": "List_All_Fable_Messages",
    "group": "Fable_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "collectionId",
            "optional": false,
            "field": "The",
            "description": "<p>collectionId of the message object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fable_Messages"
  },
  {
    "type": "put",
    "url": "/fable/messages/:collectionId/:messageId",
    "title": "Update a Fable Message",
    "name": "Update_a_Fable_Message",
    "group": "Fable_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the Fable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>Id of the Message.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "authenticated creator"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fable_Messages"
  },
  {
    "type": "post",
    "url": "/fable",
    "title": "Create a new Fable",
    "name": "Create_a_Fable",
    "group": "Fables",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Fable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the Fable.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "HTTP/1.1 200 OK\n {\n     \"__v\": 0,\n     \"creator\": \"creator\",\n     \"name\": \"name\",\n     \"_id\": \"5a4349c4660c1b7bc200d1e2\",\n     \"locale\": [\n         \"en_us\"\n     ],\n     \"created_date\": \"2017-12-27T07:20:36.305Z\",\n     \"messages\": []\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fables"
  },
  {
    "type": "delete",
    "url": "/fable/:collectionId",
    "title": "Delete a Fable",
    "name": "Delete_a_Fable",
    "group": "Fables",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the Fable.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "authenticated creator"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fables"
  },
  {
    "type": "get",
    "url": "/fable/:collectionId",
    "title": "Get a Fable",
    "name": "Get_a_Fable",
    "group": "Fables",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the Fable.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fables"
  },
  {
    "type": "get",
    "url": "/fable/:locale/:page/:limit",
    "title": "Get a paginated list of all Fables",
    "name": "List_All_Fables",
    "group": "Fables",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>The sites current locale.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>The current page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "limit",
            "description": "<p>The amount to return.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fables"
  },
  {
    "type": "put",
    "url": "/fable/:collectionId",
    "title": "Update a Fable",
    "name": "Update_a_Fable",
    "group": "Fables",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>Id of the Fable.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "authenticated creator"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/fablesController.js",
    "groupTitle": "Fables"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create New User",
    "name": "Create_New_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Desired username (unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Desired password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"User successfully registered.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Logs a User In",
    "name": "Logs_a_User_In",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "HTTP/1.1 200 OK\n{\n     \"user\": {\n         \"_id\": \"_id\",\n         \"salt\": \"salt\",\n         \"hash\": \"hash\",\n         \"username\": \"username\",\n         \"__v\": 0\n     },\n     \"token\": \"JWT\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "Logs a User Out",
    "name": "Logs_a_User_Out",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"User successfully logged out.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/userController.js",
    "groupTitle": "User"
  }
] });
