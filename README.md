# QUALI-Challenge
### BE application.

## Installation guide

### 1. Install dependencies
Run this command in order to install the dependencies of server(BE)
```sh
$ npm install
```

### 2. Create the Database
We need to create a Database with PostgreSQL, just the database because we are going to connect it by the ORM Sequelize, so Sequelize is going to create the table and all columns. Note: You can use [DOCKER](https://www.docker.com/) to run the docker-compose file here in the project. Just run the command:

```sh
docker-compose -f docker-compose.yml up
```

### 3. Run the application

This next command will start server by default on port [4000](http://localhost:4000)
```sh
$ npm run start
```

### 3. Front-End Static aplication
Please go to the next [project](https://github.com/nandocabral/quali-front)