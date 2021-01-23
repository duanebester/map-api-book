# Basic Koa App

Edit app.js:

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

module.exports = app;
```

Edit index.js:

```js
const app = require('./app');
// Default the port to 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
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
> npm run dev
```

If we go to [localhost:8080](http://localhost:8080), we should see `Hello world`! This is cool, but we have some things to understand about Koa apps. For now, let's create a simple Dockerfile for our very basic application...