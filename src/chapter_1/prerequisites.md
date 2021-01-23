# Prerequisites

#### Tools
* Install [Node LTS](https://nodejs.org/en/download/)
* Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    * Make sure Docker is running after install!
* Install [VSCode](https://code.visualstudio.com/)
* Install [Git](https://git-scm.com/)
    * Apple ships Git with XCode, so on a mac you _shouldn't_ need to install it.

#### Accounts
* Create a [GitHub](https://github.com/) Account
* Create a [DigitalOcean](https://digitalocean.com/) Account
* Create a [Mapbox](https://account.mapbox.com/) Account

### Verifying Installs

Open a terminal, type and enter:

```bash
> docker ps
# Returns: CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

Same terminal, type and enter:

```bash
> node --version
# Returns: v14.15.4 or similar
```

Same terminal, type and enter:

```bash
> git --version
# Returns: git version 2.24.3 (Apple Git-128)
```