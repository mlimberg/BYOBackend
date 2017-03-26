
# User Resources

    GET reps/:id/remaining

## Description
* Endpoint to get calculated "years remaining" in office until the next election

## Parameters
* ID (integer)

## Return format
* Returns a rep object with an added `years-left` property stating how many years they have left until the next election


## Errors
* **404** - not found

***

## Example
**Request**

    https://api/v1/reps/1/remaining

**Return**
``` json
{
  "id": 1,
  "first_name": "Lamar",
  "last_name": "Alexander",
  "role_type": "rep",
  "next_election": 2020,
  "party": "R",
  "created_at": null,
  "updated_at": null,
  "state_id": 225,
  "years_left": 3
}
```
