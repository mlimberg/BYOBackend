# User Resources

    PATCH reps/:id

## Description
* Modify data to a specific representative in the DB

## Parameters
* ID (integer)

## Body
* Requires `update` object containiner field(s) to be modified. Example:

```
update: {
    "next_election": 2030 
}
```

## Return format
* Returns all reps back with modified record included

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
    "id": 1,
    "first_name": "Robert",
    "last_name": "Aderholt",
    "role_type": "rep",
    "next_election": 2030,
    "party": "R",
    "district": 4,
    "created_at": null,
    "updated_at": null,
    "state_id": 24
  },
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
    "state_id": 21
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
    "state_id": 25
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
    "state_id": 18
  }
]
```
