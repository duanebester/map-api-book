# Design and Build API

One of the biggest problems with software today is that people do not spend enough time in the "design" phase. It has become easier to iterate and change code, but if we spend some extra time in the beginning to think through our system, we will mitigate a lot of potential changes.

Why Mongo?

Mongo is a NoSQL database, which mostly means it is more free-form and offers us some flexibility in the prototyping phase. It also has a nice way to query and aggregate with GPS coordinates. Mongo documents are essentially JSON documents, so Mongo works well with JavaScript based applications. 

So right now our system might be something like this:

![System One](../assets/app_design.png)

We can then think of what we want our API endpoints to look like. For retrieving Earthquakes, perhaps something like:

| Operation  | Request Method | Request Path                 | Response Status | Response Body |
|------------|----------------|------------------------------|-----------------|---------------|
| Get Quakes | GET            | `/api/<version>/earthquakes` | 200             | [Earthquake]  |


And if we wanted to limit the amount of earthquakes returned, we can add a `limit` query param to the path of the above:
```ignore
/api/<version>/earthquakes?limit=10
```

And to paginate through our earthquakes, a `skip` query param:
```ignore
/api/<version>/earthquakes?limit=10&skip=10
```

To find earthquakes near a certain coordinate, we could setup a long,lat query param called `near`:
```ignore
/api/<version>/earthquakes?near=[longitude,latitude]
```

We could also pass min and max distances (from above GPS point) as query params, but for now we will just let the API default those to something reasonable.

> It's usually best practice to version API's. We can then support multiple versions of the Get Earthquakes endpoint.

For "CRUD" (Creating, Retrieving, Updating and Deleting) Users, a flushed out API might look like this:

> The `5` in the Request Path below represents the User's ID

| Operation      | Request Method | Request Body | Request Path    | Response Status | Response Body |
|----------------|----------------|--------------|-----------------|-----------------|---------------|
| Get Users      | GET            |              | /api/v1/users   | 200             | [User]        |
| Get User By ID | GET            |              | /api/v1/users/5 | 200             | User          |
| Create User    | POST           | User         | /api/v1/users   | 201             | User          |
| Update User    | PUT            | User         | /api/v1/users/5 | 200             | User          |
| Delete User    | DELETE         |              | /api/v1/users/5 | 204             |               |