# Docker Files

Edit the `Dockerfile`: 
```Dockerfile
FROM node:lts-alpine

COPY . .

RUN npm i

EXPOSE 8080

CMD [ "node", "index.js" ]
```

Edit the `.dockerignore` file: 
```ignore
.git
node_modules/
```

Edit the `docker-compose.yml` file: 
```yml
version: '3.8'
services:
  mongo:
    image: 'mongo:latest'
    container_name: 'mongodb'
    volumes: 
      - ./mongo-volume:/data/db
    ports:
      - '27017-27019:27017-27019'
```

At this point, we can run the following command to start up a Mongo Database!
```bash
docker-compose up -d
```

It will take a while, but your Mongo instance should come up. We can verify by running:
```bash
> docker ps
# Returns:
# CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS       
# 6bba9117fccc   mongo:latest   "docker-entrypoint.s…"   35 seconds ago   Up 34 seconds
```

To stop the running containers, run:
```bash
docker-compose down --remove-orphans
```

The nice thing about Docker Compose is that we can _compose_ several services together. Say we also wanted to add a Postgres Database. We would do so by adding the following `postgres:` section below the `mongo:` section:
```yml
  mongo:
    ...
  postgres:
    image: 'postgres:12'
    container_name: 'postgresdb'
    environment: 
      - POSTGRES_DB=map
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    ports: 
      - '5432:5432'
```

Now we can run `docker-compose up -d` and `docker-compose down` to start and stop both Mongo and Postgres!

The `up` command will create and start all containers in the `docker-compose.yml` file.
Similarly, the `down` command will stop and remove all containers in the `docker-compose.yml` file.

We can also run:

```bash
docker-compose up --no-start
docker-compose start mongo
```

To _just_ start the Mongo container. And then:

```bash
docker-compose stop mongo
```

To stop _just_ the Mongo container. Note that this doesn't remove/delete the container, just stops it from running.

We aren't going to use Postgres, so you can stop call containers (`docker-compose down`) and remove the `postgres:` section from the `docker-compose.yml` file.

> Removing ununsed Docker objects...

Sometimes after lots of development, you'll get "Out of space" warnings. Usually related to dangling volumes/images/etc. These are resources that we can remove, but then we will lose any saved data. I recommend removing these every now and then:
```bash
docker system prune
```

Volumes aren't removed by default, so to remove those as well:
```bash
docker system prune -a
```