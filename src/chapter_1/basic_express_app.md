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
    "dev": "nodemon index.js"
  },
```

### Run the App

We can now run our very basic app:

```bash
npm run dev
```

If we go to [localhost:8080](http://localhost:8080), we should see `Hello world`! This is cool, so let's create a simple test for our  API to verify this functionality.

> Nodemon will watch any code changes we make and automatically reload our server. 

We can stop our server from running with (Cmd or Ctrl) + C.

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

And then add the `"test"` script to the `"scripts":` section of the `package.json` file:

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
    function hasHelloWorld(res) {
      if ('Hello World!' !== res.text) throw new Error("Missing Hello World!");
    }
    request(app)
      .get('/')
      .expect(200)
      .expect(hasHelloWorld)
      .end(done)
  });
});
```

We can now run the following to test our simple app (make sure server isn't running):
```bash
npm run test
```

We should see our test passes! 
```bash
 PASS  ./app.test.js
  GET /
    ✓ responds with Hello World (23 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.645 s, estimated 1 s
Ran all test suites.
```

Onwards, to creating Docker files.