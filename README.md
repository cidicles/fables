# Fables API

The fables API.

Docs can be viewed [here](https://cidicles.github.io/Fable/).

Contains:

* [Mongoose](http://mongoosejs.com/)
* [Express](https://expressjs.com/)

Prereqs:

* [Node JS](https://nodejs.org/en/)
* [Mongo](https://www.mongodb.com/)
* [Yarn](https://yarnpkg.com/en/) *optional*
* [Docker](https://www.docker.com/) *optional*

#### First Time Set Up
`yarn install`

*If you are on windows do this first: `npm install --global --production windows-build-tools`*

#### Startup (Local)
`yarn local`

#### Startup (Docker)
`docker-compose up`

#### Rebuild Image (Docker)
`docker-compose build`

#### Generate Docs
`yarn docs`