# Introduction

### Plot
Imagine we have various GPS data; perhaps car accidents, or windmills, or oil wells. We would like a web application to display our data, perferrably on a map, in a React application. We also want to save the Geo data in Mongo and User data in Postgres at the same time. The User data will be for our users to create accounts and login. The app will have a robust RESTful API written with the Koa framework in Node.js. We will also leverage Docker to deploy this application stack to any cloud provider. I'll provide additional, optional, videos at the end of the course to add GraphQL to our application, but these won't go into the depth of GraphQL fundamentals.

This book will cover getting up and running with the basics of a full-stack application:

* React
    * Displaying Data with Mapbox
    * Material UI - React Components
    * Loading Screens / Skeletons
    * React Testing Library
* Node.js
    * Express API Framework
        * Middleware
    * Testing
        * Unit Tests
        * Integration Tests
    * Authentication
    * GraphQL
* MongoDB
    * Official Node Driver
* Postgres
    * Sequelize
* Cloud Providers
    * Digital Ocean
    * Google Cloud
    * Amazon Web Services
    * Mongo Atlas