# Introduction

### About Me

Hi there! My name is Duane Bester. My background is in Electrical Engineering, but I have been writing professional software for over ten years now. I've been involved in various different startups with projects that have ranged from Virtual Reality-- Sensors and Hardware Design, to full stack web applications and ETL pipelines-- ingesting hundreds of thousands of articles a day. This has given me the ability to learn and use many software languages and frameworks over the years. I believe in learning by doing, so we will skip a lot of mundane programming theory and build something practical in a short amount of time.

### Plot
Imagine we have data that contains GPS coordinates, like locations of earthquakes. We would like to display our data on a map in a [React](https://reactjs.org/) application. We also want to save User and Earthquake data in MongoDB (eventually using [Mongo Atlas](https://www.mongodb.com/cloud/atlas)). The app will have a robust RESTful API written with the [Express](https://expressjs.com/) framework in Node.js. We will also leverage Docker to run services locally as well as for deploying this application to any cloud provider. 

This book will cover getting up and running with the basics of a full-stack application:

* React
    * Displaying Data with Mapbox
    * Material UI 
        * React Components
        * Loading Screens / Skeletons
    * React Testing Library
* Node.js
    * Express API Framework
        * Middleware
    * Testing
    * User Authentication
* MongoDB
    * ORM - Mongoose Driver

As well as the tools & services:

* Docker
* cURL
* VSCode
* Git & GitHub
* Cloud Providers
    * Digital Ocean
    * Google Cloud
    * Amazon Web Services
    * Mongo Atlas

At the end, I'll provide a link to the full working source code in GitHub. Let's get started!