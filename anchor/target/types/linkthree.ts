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
          "name": "usernameAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  110,
                  97,
                  109,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "linkthree.username",
                "account": "linkthree"
              }
            ]
          }
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
          "name": "username",
          "type": "string"
        },
        {
          "name": "fullName",
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
          "name": "newUsername",
          "type": "string"
        },
        {
          "name": "newFullName",
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
        },
        {
          "name": "newSocial",
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
          "name": "newLinks",
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
    },
    {
      "name": "usernameAccount",
      "discriminator": [
        120,
        2,
        212,
        44,
        208,
        63,
        20,
        122
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "usernameAlreadyTaken",
      "msg": "The username is already taken."
    }
  ],
  "types": [
    {
      "name": "link",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
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
            "name": "username",
            "type": "string"
          },
          {
            "name": "fullName",
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
    },
    {
      "name": "usernameAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "username",
            "type": "string"
          }
        ]
      }
    }
  ]
};
