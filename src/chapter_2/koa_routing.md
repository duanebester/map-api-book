# Koa Routing

Lets install the Koa Router:

```bash
> npm i koa-router
```

We then update `app.js` as follows:
```js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
```

Again, going to [localhost:8080](http://localhost:8080) will return a "Hello World".