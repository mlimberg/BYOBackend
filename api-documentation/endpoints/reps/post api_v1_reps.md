
# User Resources

    POST reps

## Description
* Create a new representative record

## Body

* requires an object with all of the necessary key-value pairs. Example:

```
  body: {
    "first_name": "New",
    "last_name": "Rep",
    "role_type": "rep",
    "next_election": 2024,
    "party": "D",
    "district": 3,
    "state_id": 14
  }
```

## Return format
* Returns an array of all reps including the newly added record


## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/reps

**Return**
``` json
[
  {
    "id": 1,
    "first_name": "Robert",
    "last_name": "Aderholt",
    "role_type": "rep",
    "next_election": 2018,
    "party": "R",
    "district": 4,
    "created_at": null,
    "updated_at": null,
    "state_id": 8
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
    "state_id": 24
  },
  {
    "id": 3,
    "first_name": "New",
    "last_name": "Rep",
    "role_type": "rep",
    "next_election": 2024,
    "party": "D",
    "district": 3,
    "created_at": null,
    "updated_at": null,
    "state_id": 14
  }
]
```


