# User Resources

    GET reps/:id

## Description
* Return specific data for one representative

## Parameters
* ID (integer)

## Return format
* Returns an array containing the matching representative object

## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/reps/1

**Return**
``` json
[
  {
    "id": 2,
    "first_name": "Justin",
    "last_name": "Amash",
    "role_type": "rep",
    "next_election": 2018,
    "party": "R",
    "district": 3,
    "created_at": null,
    "updated_at": null,
    "state_id": 271
  }
]
```

