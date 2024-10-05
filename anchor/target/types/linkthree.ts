/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/linkthree.json`.
 */
export type Linkthree = {
  "address": "CWPtWybP2yNXgPHWnzSuCjyoTaXqzbcGu52THbNdvV6t",
  "metadata": {
    "name": "linkthree",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "close",
      "discriminator": [
        98,
        165,
        201,
        177,
        108,
        65,
        206,
        96
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "decrement",
      "discriminator": [
        106,
        227,
        168,
        59,
        248,
        27,
        150,
        101
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "deleteLink",
      "discriminator": [
        160,
        191,
        177,
        176,
        99,
        40,
        106,
        98
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSocial",
      "discriminator": [
        62,
        241,
        46,
        70,
        69,
        6,
        38,
        177
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u8"
        }
      ]
    },
    {
      "name": "increment",
      "discriminator": [
        11,
        18,
        104,
        9,
        104,
        174,
        59,
        33
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "linkthree",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "owner",
          "type": "pubkey"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "photoProfile",
          "type": "string"
        },
        {
          "name": "position",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        }
      ]
    },
    {
      "name": "set",
      "discriminator": [
        198,
        51,
        53,
        241,
        116,
        29,
        126,
        194
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "value",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateAll",
      "discriminator": [
        205,
        139,
        239,
        66,
        134,
        131,
        110,
        182
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "newName",
          "type": "string"
        },
        {
          "name": "newPhotoProfile",
          "type": "string"
        },
        {
          "name": "newPosition",
          "type": "string"
        },
        {
          "name": "newDescription",
          "type": "string"
        }
      ]
    },
    {
      "name": "upsertLink",
      "discriminator": [
        156,
        211,
        176,
        98,
        92,
        59,
        64,
        118
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u8"
        },
        {
          "name": "imageBackground",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ]
    },
    {
      "name": "upsertSocial",
      "discriminator": [
        69,
        245,
        33,
        88,
        44,
        124,
        94,
        9
      ],
      "accounts": [
        {
          "name": "linkthree",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u8"
        },
        {
          "name": "icon",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "linkthree",
      "discriminator": [
        198,
        40,
        192,
        150,
        193,
        103,
        17,
        37
      ]
    }
  ],
  "types": [
    {
      "name": "link",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "imageBackground",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "linkthree",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "photoProfile",
            "type": "string"
          },
          {
            "name": "position",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "social",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "social"
                  }
                },
                100
              ]
            }
          },
          {
            "name": "links",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "link"
                  }
                },
                100
              ]
            }
          }
        ]
      }
    },
    {
      "name": "social",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "icon",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          }
        ]
      }
    }
  ]
};
