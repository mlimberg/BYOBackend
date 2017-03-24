# User Resources

    PATCH senators/:id

## Description
* Modify data to a specific senator in the DB

## Parameters
* ID (integer)

## Return format
* Returns all senators back with modified record included

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
    "id": 1,
    "first_name": "Lamar",
    "last_name": "Alexander",
    "role_type": "senator",
    "next_election": 2020,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 225
  }
]
```
