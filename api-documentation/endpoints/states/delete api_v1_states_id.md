# User Resources

    DELETE states/:id

## Description
* Delete an entire state record in the DB
* Deletes all associated reps and senators with deleted state_id

## Parameters
* ID (integer)

## Return format
* Returns all states back excluding deleted record

## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/states/2

**Return**
``` json
[
  {
    "id": 1,
    "state": "TN",
    "num_of_reps": 9,
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

