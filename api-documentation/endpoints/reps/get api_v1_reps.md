
# User Resources

    GET reps

## Description
IF no query parameter is defined, it will return ALL representatives.

## Parameters
* To get all republican representatives add:
    
    `?party=R`
    
* To get all democrat representatives add:
    
    `?party=D`


## Return format
Current rep profile information returns an array of rep objects.


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
    "state_id": 274
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

## Example
**Request**

    https://api/v1/reps?party=R

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
    "state_id": 274
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
    "state_id": 271
  }
]
```

[OAuth]: https://github.com/500px/api-documentation/tree/master/authentication
[full format]: https://github.com/500px/api-documentation/blob/master/basics/formats_and_terms.md#profile-format
