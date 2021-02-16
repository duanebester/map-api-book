# Create Project

Create a new directory, `map-api` and then change directory into it:

```bash
> mkdir map-api
> cd map-api
```

Create an NPM project:

```bash
> npm init -y
```

#### Install dependencies

Application dependencies:
```bash
> npm i express cors compression helmet
```

Development dependencies:
```bash
> npm i -D nodemon jest supertest
```

#### App files

> Note: In the root directory of the project

Make a new file called `index.js`.

```bash
> touch index.js
```

Make a new file called `app.js`.

```bash
> touch app.js
```

Make a new file called `app.test.js`.

```bash
> touch app.test.js
```

Make a new file called `Dockerfile`.

```bash
> touch Dockerfile
```

Make a new file called `.dockerignore`.

```bash
> touch .dockerignore
```

Make a new file called `docker-compose.yml`.

```bash
> touch docker-compose.yml
```