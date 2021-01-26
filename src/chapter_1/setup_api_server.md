# Setup API Server

For our Map project, we need a robust and easy to use API Server. Luckily [Express.js](https://expressjs.com/) fits these requirements and is a nice API framework to use. _"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."_

> Why not Koa?

_A note about Koa. Koa is robust, minimal, and widely regarded as the next Express.js framework. However, I firmly believe that for beginners it's easier to understand Express. Working through this course will definitely go a long way to understanding Koa as well._

The most basic Express app that returns "Hello world" for all GET requests is:

```js
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app running on port: ${port}`)
});
```

I encourage you to read the overview on the [Express](https://expressjs.com/) to gain some intuition