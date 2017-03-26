
# User Resources

    POST senators

## Description
* Create a new senator record

## Body

* Requires an object with all of the necessary key-value pairs. Example:

```
  body: {
    "first_name": "Mike",
    "last_name": "Limberg",
    "role_type": "senator",
    "next_election": 2022,
    "party": "D",
    "state_id": 8
  }
```

## Return format
* Returns an array with all senators including newly added record


## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/senators

**Return**
``` json
[
  {
    "id": 1,
    "first_name": "Lamar",
    "last_name": "Alexander",
    "role_type": "senator",
    "next_election": 2020,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 25
  },
  {
    "id": 2,
    "first_name": "Roy",
    "last_name": "Blunt",
    "role_type": "senator",
    "next_election": 2022,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 26
  },
  {
   "id": 3,
   "first_name": "Mike",
   "last_name": "Limberg",
   "role_type": "senator",
   "next_election": 2022,
   "party": "D",
   "created_at": null,
   "updated_at": null,
   "state_id": 8
  }
]
```

