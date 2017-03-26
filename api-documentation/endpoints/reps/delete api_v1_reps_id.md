# User Resources

    DELETE reps/:id

## Description
* delete an entire representative record in the DB

## Parameters
* ID (integer)

## Return format
* Returns all reps back excluding deleted record

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
  },
  {
    "id": 3,
    "first_name": "Mark",
    "last_name": "Amodei",
    "role_type": "rep",
    "next_election": 2018,
    "party": "R",
    "district": 2,
    "created_at": null,
    "updated_at": null,
    "state_id": 245
  },
  {
    "id": 4,
    "first_name": "Alma",
    "last_name": "Adams",
    "role_type": "rep",
    "next_election": 2018,
    "party": "D",
    "district": 12,
    "created_at": null,
    "updated_at": null,
    "state_id": 228
  }
]
```

