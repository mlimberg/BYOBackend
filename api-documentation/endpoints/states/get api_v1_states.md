# User Resources

    GET states

## Description
* it will return ALL states

## Return format
* Array of all state objects

## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/states

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



