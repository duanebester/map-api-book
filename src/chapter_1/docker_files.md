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

We are going to use a Mongo instance (v4.4) that has some Earthquake data pre-loaded.
Edit the `docker-compose.yml` file: 
```yml
version: '3.8'
services:
  mongo:
    image: 'duanebester/mongo-earthquakes:latest'
    container_name: 'mongo-earthquakes'
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
# CONTAINER ID   IMAGE                   
# ............   mongo-earthquakes:latest
```

To stop the running containers, run:
```bash
docker-compose down
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

To _just_ start the Mongo container. run:

```bash
docker-compose up --no-start
docker-compose start mongo
```

To stop _just_ the Mongo container:

```bash
docker-compose stop mongo
```

Note that this doesn't remove/delete the container, just stops it from running.

We aren't going to use Postgres, so you can stop all containers (`docker-compose down`) and remove the `postgres:` section from the `docker-compose.yml` file.

> Removing unused Docker objects...

Sometimes after lots of development, you'll get "Out of space" warnings. Usually related to dangling volumes/images/etc. These are resources that we can remove, but then we will lose any saved data. I recommend removing these every now and then:
```bash
docker system prune
```

Volumes aren't removed by default, so to remove those as well:
```bash
docker system prune -a
```