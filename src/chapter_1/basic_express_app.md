# Basic Express App

### Create the App

Edit app.js:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
```

Edit index.js:

```js
const app = require('./app');
// Default the port to 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
});
```

Edit package.json, add a `"dev"` property to the `"scripts"` object:

```json
"scripts": {
    "dev": "nodemon index.js",
},
```

### Run the App

We can now run our very basic app:

```bash
> npm run dev
```

If we go to [localhost:8080](http://localhost:8080), we should see `Hello world`! This is cool, so let's create a simple test for our  API to verify this functionality.

### Test the App

Add a `"jest":` section to the `package.json` file:

```json
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/"
    ]
  },
```

And then add this script to the `"scripts":` section of the `package.json` file:

```json
  "scripts": {
    "dev": "nodemon index.js",
    "test": "NODE_ENV=test jest --testTimeout=10000",
  }
```

Now we add the following in `app.test.js` which just checks that a request to our endpoint returns a Status: 200 - Success, and the `Hello World!` body:
```js
const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello World', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .then(response => {
          assert(response.body, 'Hello World!');
          done();
      })
      .catch(err => done(err))
  });
});
```

We can now run the following to test our simple app:
```bash
npm run test
```