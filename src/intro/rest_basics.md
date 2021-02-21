# REST Basics

"REST" stands for "Representational state transfer" and a RESTful Web service is required to provide an application access to its Web resources in a textual representation. - Wikipedia

This interpretation doesn't win awards for being clear. A RESTful API could _be many things,_ but the community has largely accepted that composing Http endpoints in a certain manner constitutes as RESTful.

For us, to build a RESTful API we need to focus on three attributes of an Http Request:

* Method
* Path
* Body

Request Headers are important for Http, frameworks, and Auth. However, for basic RESTful model design, we won't worry about them.

```ts
Request {
    Path: String
    Body: String | Object
    Method: String
    Headers: Object
}
```

The Http Request Path is the URL endpoint. If we had a URL such as `https://my-website.com/api/users` the path would be `/api/users`.
```ts
Request {
    Path: "/api/users"
}
```

The Body of an Http Request the the data the Request contains. For our purposes, this will be a JSON document with info we want to send to our service.
```ts
Request {
    Body: { name: "John", age: 30 }
}
```

An Http Request Method is usually one of the following; `GET`, `PUT`, `POST`, `DELETE`. (There are many others, but these are the most common).
```ts
Request {
    Method: "POST"
}
```

With the above three attributes, we can build a RESTful service for a User resource (often called a Model). The most common, and usually the default way to represent state transfer for a model is called "CRUD" which stands for Create, Read, Update, and Delete. This makes sense as if we have a User model, we would likely want to create users, retrieve users, update them, and perhaps delete them.

Say we want to **get** the **users** from our service, we'd send an Http Request with the method set to **GET** and the path set to **/api/users**:

> Note that we don't need to send any info in the Body to retrieve users.
```ts
Request {
    Path: "/api/users"
    Body: {}
    Method: "GET"
}
```

And if we wanted to create a new user:
```ts
Request {
    Path: "/api/users"
    Body: { name: "John", age: 30 }
    Method: "POST"
}
```

And if we wanted to update the user's age (we need the ID of the user in the Path):
```ts
Request {
    Path: `/api/users/<user-id>`
    Body: { name: "John", age: 31 }
    Method: "PUT"
}
```

And if we wanted to delete the user (we need the ID of the user in the Path):
```ts
Request {
    Path: `/api/users/<user-id>`
    Body: {}
    Method: "DELETE"
}
