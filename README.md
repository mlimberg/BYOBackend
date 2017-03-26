# BYOBackend

# About

#### Current Version: 1.0

The BYOBackend API serves to provide data on current US senators, representatives and has the ability to sort by state, party, years left in office, district, etc. Below is a list of specifc endpoints by data-type.

#### Disclaimer:
The current version of this API fails to meet the JSON API standards due to timing constraints. The following are standards intended to be corrected in the next version to be released:

##### Meets:
* **Response Codes**:
  * All endpoints responde with a `200 OK` status for any successful response, `201 CREATED` for any post requests
  * All endpoints requesting a specific resource respond with a `404 NOT FOUND` if the request ID does not match any records in the DB

##### Future Releases:
* **Top-level Members**: 
  * The next release will send all primary data within a _data_ object, containing an identifying "type" attribute
  * The next release will send all responses with a _link_ object identifying the requested endpoint link as well as any other links relevant to the request (i.e. senator/rep website information)
  * Errors will be wrapping in a similar _error_ object with a "type" attribute identifying the error code
* **Pagination**: 
  * The next release may limit representatives responses to paginated views, only showing a limited number of records unless called out specifically in the query paramters
* **Sorting**:
  * The next release will allow for a sorting parameter to be included in the `GET states/` reqest

***



## Endpoints

#### Senator Resources

- **[<code>GET</code> api/v1/senators](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/senators/get%20api_v1_senators.md)**

- **[<code>GET</code> api/v1/senators/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/senators/get%20api_v1_senators_id.md)**

- **[<code>GET</code> api/v1/senators/:id/remaining](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/senators/get%20api_v1_senators_id_remaining.md)**

- **[<code>POST</code> api/v1/senators](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/senators/post%20api_v1_senators.md)**

- **[<code>PATCH</code> api/v1/senators/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/senators/patch%20api_v1_senators_id.md)**


- **[<code>DELETE</code> api/v1/senators/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/senators/delete%20api_v1_senators_id.md)**


#### Representative Resources


- **[<code>GET</code> api/v1/reps](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/reps/get%20api_v1_reps.md)**

- **[<code>GET</code> api/v1/reps/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/reps/get%20api_v1_reps_id.md)**

- **[<code>GET</code> api/v1/reps/:id/remaining](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/reps/get%20api_v1_reps_id_remaining.md)**

- **[<code>POST</code> api/v1/reps](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/reps/post%20api_v1_reps.md)**

- **[<code>PATCH</code> api/v1/reps/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/reps/patch%20api_v1_reps_id.md)**


- **[<code>DELETE</code> api/v1/reps/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/reps/delete%20api_v1_reps_id.md)**

#### State Resources

- **[<code>GET</code> api/v1/states](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/states/get%20api_v1_states.md)**

- **[<code>GET</code> api/v1/states/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/states/get%20api_v1_states_id.md)**


- **[<code>POST</code> api/v1/states](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/states/post%20api_v1_states.md)**

- **[<code>PATCH</code> api/v1/states/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/states/patch%20api_v1_states_id.md)**


- **[<code>DELETE</code> api/v1/states/:id](https://github.com/mlimberg/BYOBackend/blob/master/api-documentation/endpoints/states/delete%20api_v1_states_id.md)**

## FAQ
### How does deleting a state record impact other tables that depend on the state ID?
* Deleting a state record will also delete ALL records (both senator and representative) from their respective table with the corresponding state ID



