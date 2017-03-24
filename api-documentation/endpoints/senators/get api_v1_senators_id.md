# User Resources

    GET senators/:id

## Description
IF no query parameter is defined, it will return ALL senators.

## Parameters
* ID (integer)

## Return format
Current senator profile information returns an array of senator objects.


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
