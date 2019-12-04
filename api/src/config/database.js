require('dotenv/config');

/*
* How to install database?
*
* first step is run a docker command:
* docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
*
* then create a database with a 'irank' name,
*
* then execute this sql command:
* CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
*
*/

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};
