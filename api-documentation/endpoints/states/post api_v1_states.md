

# User Resources

    POST states

## Description
* Create a new state record

## Body

* Requires an object with all of the necessary key-value pairs. Example:

```
  body: {
    "name": "Mars",
    "num_of_sens": 2,
    "num_of_reps": 6,
  }
```

## Return format
* Returns array of all states including newly added state record


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
    "id": 5,
    "state": "Mars",
    "num_of_reps": 6,
    "num_of_sens": 2,
    "created_at": null,
    "updated_at": null
  }
]
```

