# Introduction

### About Me

Hi there! My name is Duane Bester. My background is Electrical Engineering, but I have been writing professional software for over ten years now. I've been involved in various different startups with projects that have ranged from Virtual Reality, Sensors and Hardware Design, to full stack web applications and ETL pipelines ingesting 100's of thousands of articles a day. This has given me the ability to use many software languages and frameworks over the years. I've come to understand what good software engineering design looks like, and will go over this in the following chapters. I believe in learning by doing, so we will skip a lot of mundane programming theory and build something practical in a short amount of time. A lot of code "out there" follows Object Oriented Programming (OOP) and tries to do crazy dependency injection patterns, etc. While I'm not for or against this, we will be using a more functional style where we try to compose our functions and move complexity to the edges of our program. If this sentence didn't make sense, that's okay! There is an [excellent video](https://www.youtube.com/watch?v=vK1DazRK_a0) of writing procedural code, refactoring to object oriented code, and then functional code by Rafal Dittwald. The title mentions the software language Clojure, but fear not! His examples are written in JavaScript. 

### Plot
Imagine we have various data that contains GPS coordinates, like coffee shops. We would like to display our data on a map in a React application. We also want to save User and CoffeeShop data in MongoDB (we will be using Mongo Atlas). The app will have a robust RESTful API written with the Express framework in Node.js. We will also leverage Docker to run services locally as well as for deploying this application to any cloud provider. I'll provide optional videos where we deploy to Google Cloud and AWS.

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