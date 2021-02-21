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
* Favorites (list of Earthquakes)

### Earthquake

* ID
* Year
* Area
* Scale
* Location
    * Latitude
    * Longitude

## Schemas & Models

We will build the Earthquake schema first, following the guide from [Mongoose geoJSON docs](https://mongoosejs.com/docs/geojson.html). Create a file called `models.js`:
```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const earthquakeSchema = new Schema({
  source: String,
  year: Number,
  area: String,
  scale: Number,
  location: {
    _id: false,
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      // longitude, latitude
      type: [Number],
      required: true
    }
  }
});
```

> Note that longitude comes before latitude in the coordinate array.

Our Earthquake Model can be defined like so:
```js
const Earthquake = mongoose.model('Earthquake', earthquakeSchema, 'earthquakes');
```

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
    ref: 'Earthquake',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
```

> Note: The `{ timestamps: true }` config object tells Mongoose to automatically add `createdAt` and `updatedAt` timestamps to our Model.


And finally export both Models:
```js
module.exports = { User, Earthquake };
```
