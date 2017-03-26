# User Resources

    PATCH states/:id

## Description
* Modify data to a specific state record in the DB

## Parameters
* ID (integer)

## Body
* Requires `update` object containing field(s) to be modified. Example:

```
update: {
    "num_of_reps": 6 
}
```

## Return format
* Returns all states back with modified record included

## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/states/1

**Return**
``` json
[
  {
    "id": 1,
    "state": "TN",
    "num_of_reps": 6,
    "num_of_sens": 2,
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 2,
    "state": "MO",
    "num_of_reps": 8,
    "num_of_sens": 2,
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 3,
    "state": "OH",
    "num_of_reps": 16,
    "num_of_sens": 2,
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 4,
    "state": "NC",
    "num_of_reps": 13,
    "num_of_sens": 2,
    "created_at": null,
    "updated_at": null
  }
]
```

