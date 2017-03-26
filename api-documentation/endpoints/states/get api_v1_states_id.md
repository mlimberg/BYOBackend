# User Resources

    GET states/:id

## Description
* Return data for a specific state

## Parameters
* ID (integer)

## Return format
* Returns an array containing the matched state object


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
    "num_of_reps": 9,
    "num_of_sens": 2,
    "created_at": null,
    "updated_at": null
  }
]
```

