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
    environment: 
      - MONGO_INITDB_DATABASE=map
      - MONGO_INITDB_ROOT_USERNAME=user
      - MONGO_INITDB_ROOT_PASSWORD=pass
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

To stop the Mongo Container, run:
```bash
docker-compose down --remove-orphans
```

We can add our Postgres DB Service as well, add the following `postgres:` section below the `mongo:` section:
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