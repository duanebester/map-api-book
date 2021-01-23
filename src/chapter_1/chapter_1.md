# Setup API Server

For our Map project, we need a robust and easy to use API Server. Luckily [Koa](https://koajs.com/) fits these requirements and is a nice API framework to use.

From the Koa website:

_"A Koa application is an object containing an array of middleware functions which are composed and executed in a stack-like manner upon request."_

We can visualize the http request flowing through the layers like so:

![Koa App](../assets/koa_app.png)