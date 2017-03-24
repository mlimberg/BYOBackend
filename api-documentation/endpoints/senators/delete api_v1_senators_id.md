# User Resources

    DELETE senators/:id

## Description
* delete an entire senator record in the DB

## Parameters
* ID (integer)

## Return format
* Returns all senators back excluding deleted record

## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/senators/1

**Return**
``` json
[
  {
    "id": 2,
    "first_name": "Roy",
    "last_name": "Blunt",
    "role_type": "senator",
    "next_election": 2022,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 226
  },
  {
    "id": 3,
    "first_name": "Sherrod",
    "last_name": "Brown",
    "role_type": "senator",
    "next_election": 2018,
    "party": "D",
    "created_at": null,
    "updated_at": null,
    "state_id": 227
  },
  {
    "id": 4,
    "first_name": "Richard",
    "last_name": "Burr",
    "role_type": "senator",
    "next_election": 2022,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 228
  }
]
```
