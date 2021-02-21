# RESTful API Basics

### API

To understand what a RESTful API is, we need to understand what an API is.

API stands for "**A**pplication **P**rogramming **I**nterface" and is "a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow" - Wikipedia.

We can think of an API almost as a set of rules and conditions that we expect software to adhere to. There is no magic to this-- we can define an API any way we like. Let's define a simple one:

Our API (version 1.0):
* You give me any number, and I'll return that number.
* You give me any two numbers, and I'll give you their product.

That's all it takes! The above is a totally legit API. Just a list of bullet points.

An API is just a way to define a set of rules. It was invented to allow software developers to modularize their code. You could take the above API defintion, hand it to any software developer, and they can write the code that adheres to the rules.

E.g.
```
Input x, y:
    If y is Undefined
        Set y = 1

    Return (x * y)
```

But this API isn't fool-proof... What happens if we were given something other than numbers? We can totally add or multiply `'a'` and `'b'`, but it might not be what you expect. For example, in JavaScript:
```js
console.log('a' + 'b');
// Returns 'ab'
console.log('a' * 'b');
// Returns NaN (Not A Number)
```

Luckily we can extend an API. Let's say version 1.0 is deprecated and everyone must use our newly extended API:

Our API (version 2.0):
* You give me any number, and I'll return that number.
* You give me any two numbers, and I'll give you their product.
* Can only enter numbers, entering anything else returns an error message.

E.g.
```
Input x, y:
    If x is Undefined
        Return Error

    If x isNot Number
        Return Error

    If y is Undefined
        Set y = 1

    If y isNot Number
        Return Error

    Return x * y
```

The nice thing about this is you could define multiple API specifications and then stitch them all together. An API, for example, can be the bridge between two software developers. Bob is writing some code for a Math library and needs a function for multiplication. Jim has some free time and can write the multiplication code. Bob and Jim agree on an API, such that as long as Jim's code meets the API definition, we can combine the two pieces of code together when they have both finished. Modularization.

Our list of bulletpoints totally works, but code is much more succint, and can be Type checked. In TypeScript, Bob can define the interface as a function. Same as our bulletpoints, the function takes a number and a second optional number. It then returns a number. He can then continue on his day writing other code that would call this function:
```ts
interface IMath {
    multiply: (x:Number, y?:Number) => Number
}
```

Jim would then write the implementation. Same as the bulletpoint logic; If the type of the first input isn't a number, return an error. If the type of the second input isn't defined, we set it to `1`. If the second input was defined, but it's not a number, return an error. Otherwise if all is good, return the multiplication of the two inputs:
```ts
var math:IMath = {
    multiply: (x:Number, y?:Number) => {
        if(typeof x !== 'number') throw new Error()
        if(typeof y === 'undefined') y = 1
        if(typeof y !== 'number') throw new Error()
        return x * y
    }
}
```

Bob could then use Jim's implementation in his code:
```ts
console.log(math.multiply(2))   // 2
console.log(math.multiply(2,3)) // 6
```

Voilà, we are interface masters. just created a simple interface and the implementation of that interface... Remember that API stands for Application Programming **Interface**? This basically means that a whole _Application_ has an _Interface_.

So a better example of an _API_ versus _just the I_ might look more like this:
```ts
interface IMath {
    add: (x:Number, y?:Number) => Number
    subtract: (x:Number, y?:Number) => Number
    multiply: (x:Number, y?:Number) => Number
    divide: (x:Number, y?:Number) => Number
}
```

### REST

REST stands for "**RE**presentational **S**tate **T**ransfer" and a RESTful Web service is required to provide an application access to its Web resources in a textual representation. - Wikipedia

This interpretation doesn't win awards for being clear. A RESTful API _could be many things,_ but the community has largely accepted that sending Http Requests and Responses in a certain manner constitutes as RESTful. A RESTful API is the bridge between the "Frontend" and "Backend" code that is needed to build a web application. They communicate via the API. Backend code is usually the server that connects to a database and performs business logic on said data before sending it to a Frontend. The Frontend is usually an application that runs in the browser that makes the business logic and data make sense to users. The Frontend also handles user input and interactions. Why split the two? Again, for modularization. The two areas have become complex enough that they require more expertise. Thus web applications are largely split.

For us to build a RESTful API we need to focus on three attributes of an Http Request:

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

The Body of an Http Request is the data the Request contains. For our purposes, this will be a JSON document with info we want to send to our service.
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
