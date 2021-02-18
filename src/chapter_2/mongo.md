# Connect Mongo

> Remember to have Mongo running via Docker (`docker-compose up -d`)!

To connect to our instance of Mongo running locally we are going to install and use the Mongoose library:
```bash
npm install mongoose
```

We then make a file `db.js` with the following:
```js
const mongoose = require('mongoose')

function connect(dbUrl) {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  mongoose.connect(dbUrl)
}

function close() {
  mongoose.connection.close()
}

const db = {
  connect,
  close
};

module.exports = db
```

If we want to get more info about the Database connection, we can add the following into our `connect` function:
```js
function connect(dbUrl) {
  // ...previous code...

  mongoose.connection.once('open', () => {
    console.log('Connected to database');
  });
  mongoose.connection.on('error', err => {
    console.error(err);
    console.log('MongoDB connection failed: ' + dbUrl);
    process.exit();
  });
}
```

We need to require our db instance in our `index.js` file:
```js
const db = require('./db');

db.connect('mongodb://localhost:27017/map');
```

Now when we start our app (`npm run dev`) we will see this:
```bash
...
[nodemon] starting `node index.js`
App running on port: 8080
Connected to database
```
Connected to database! Let's define some Schemas for our Models with Mongoose.