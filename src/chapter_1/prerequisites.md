# Prerequisites

#### Tools
* Install [Node 14 LTS](https://nodejs.org/en/download/)
* Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    * Make sure Docker is running after install!
* Install [VSCode](https://code.visualstudio.com/)
* Install [Git](https://git-scm.com/)
    * Apple ships Git with XCode, so on a mac you _shouldn't_ need to install it.

#### Accounts
* Create a [GitHub](https://github.com/) Account
* Create a [DigitalOcean](https://digitalocean.com/) Account
* Create a [Mapbox](https://account.mapbox.com/) Account
* Optional - Create a Google Cloud Account
* Optional - Create an AWS Account

### Verifying Installs

Open a terminal, type and enter:

```bash
docker ps
# Returns: CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

Same terminal, type and enter:

```bash
node --version
# Returns: v14.15.5 or similar
```

Same terminal, type and enter:

```bash
git --version
# Returns: git version 2.24.3 (Apple Git-128)
```

#### Node Version

My local Node version at time of writing is `v14.15.5`

##### Dependencies

There is a chance you'll be using newer dependency versions, if you run into errors in the later sections, here are my Node dependency versions at time of writing:
```json
  "dependencies": {
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "helmet": "^4.4.1",
    "mongoose": "^5.11.16"
  },
  "devDependencies": {
    "jest": "^26.6.3",
    "nodemon": "^2.0.7",
    "supertest": "^6.1.3"
  }
```