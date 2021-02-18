# Models

A User, to us, might need properties such as:

* First Name
* Last Name
* Email

But what about on the backend? We'd probably also need:

* ID
* Password
* Date Created
* Date Updated

And perhaps we'd like to support User sessions?

* Session ID

And tracking the User's last login?

* Last Login Date

And supporting forgot password flows?

* Phone Number
* Email Verified
* Verification Code

The list goes on and on... For now, let's start simple:

### User

* ID
* Email
* Password
* Date Created
* Favorites (list of Coffee Shops)

### CoffeeShop

* ID
* Name
* Date Created
* Location
    * Latitude
    * Longitude

## Schemas & Models

We will build the location Point schema first, following the guide from [Mongoose geoJSON docs](https://mongoosejs.com/docs/geojson.html). Create a file called `models.js`:
```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    // longitude, latitude
    type: [Number],
    required: true
  },
});
```
We could now use this Point as a nested doc in any other Schema, however we just need it for our CoffeeShop.

> Note that longitude comes before latitude in the coordinate array.

Our CoffeeShop Schema and Model can be defined like so:
```js
const coffeeShopSchema = new Schema({
  name: String,
  location: {
    type: pointSchema,
    required: true
  }
}, { timestamps: true });

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);
```

The `{ timestamps: true }` config object tells Mongoose to automatically add `createdAt` and `updatedAt` timestamps to our Model.

Now we can build our User Schema and Model:
```js
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'CoffeeShop',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
```

And finally export both Models:
```js
module.exports = { CoffeeShop, User };
```
