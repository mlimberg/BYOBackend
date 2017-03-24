# User Resources

    GET senators

## Description
IF no query parameter is defined, it will return ALL senators.

## Parameters
* To get all republican senators add:
    
    `?party=R`
    
* To get all democrat senators add:
    
    `?party=D`


## Return format
Current senator profile information returns an array of senator objects.


## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/senators

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
  },
  {
    "id": 2,
    "first_name": "Roy",
    "last_name": "Blunt",
    "role_type": "senator",
    "next_election": 2022,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 226
  },
  {
    "id": 3,
    "first_name": "Sherrod",
    "last_name": "Brown",
    "role_type": "senator",
    "next_election": 2018,
    "party": "D",
    "created_at": null,
    "updated_at": null,
    "state_id": 227
  },
  {
    "id": 4,
    "first_name": "Richard",
    "last_name": "Burr",
    "role_type": "senator",
    "next_election": 2022,
    "party": "R",
    "created_at": null,
    "updated_at": null,
    "state_id": 228
  }
]
```

[OAuth]: https://github.com/500px/api-documentation/tree/master/authentication
[full format]: https://github.com/500px/api-documentation/blob/master/basics/formats_and_terms.md#profile-format
