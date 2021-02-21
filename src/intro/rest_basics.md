# RESTful API Basics

### API

To understand what a RESTful API is, we should know what an API is.

"API" stands for "Application programming interface" and is "a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow" - Wikipedia

We can think of an API almost as a set of rules and conditions that we expect software to adhere to. There is no magic to this-- we can define an API any way we like. Let's define a simple one:

Our API (v1.0)
* You give me any number, and I'll return that number.
* You give me any two numbers, and I'll give you their product.

That's all it takes! The above is a totally legit API. Just a list of bullet points.

An API is just a way to define a set of rules. It was invented to allow software developers to modularize their code. You could take the above API defintion, hand it to any software developer, and they can write the code that adheres to the rules.

E.g.
```
Enter x, y:
    If y DoesNotExist
        Set y = 1

    Return x * y
```

We can also extend an API. Let's extend our simple one:

Our API (v1.1)
* You give me any number, and I'll return that number.
* You give me any two numbers, and I'll give you their product.
* Can only enter numbers, anything else returns an error message.

E.g.
```
Enter x, y:
    If x != Number
        Return Error
    If y DoesNotExist
        Set y = 1
    If y != Number
        Return Error

    Return x * y
```

The nice thing about this is you could define multiple API specifications and then stitch them all together. Our API, for example, can be the bridge between two software developers. Bob writes a code that needs a function adhering to our API definition about, and Jim can write the code for our API definition. Modularization.

A RESTful APIs is the bridge between the "Frontend" and "Backend" code that is needed to build a web application. Backend code is usually the server that connects to a database and performs business logic on said data before sending it to a Frontend. The Frontend is usually an application that runs in the browser that makes the business logic and data make sense to users. It also handles user input and interactions. 

### REST

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
```

With the above RESTful API defined, the frontend developers can build an application that queries for users. Similarly, the backend developers can build their code to serve up users and ways to modify users. Once both sides have completed their code, the whole system works together.
